import { useState, useEffect } from 'react'

export function App() {
  const [list, setlist] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetch('https://api.github.com/users/nandaospain/repos')
      .then((response) => response.json())
      .then((data) => {
        setlist(data.map((item) => item.full_name))
      })
  }, [])

  function addToList() {
    setlist((state) => [...state, 'Novo Item'])
  }

  const filteredList = list.filter((item) => item.includes(filter))

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setFilter(e.target.value)}
        value={filter}
      />

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <ul>
        {filteredList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={addToList}>Add to list</button>
    </div>
  )
}
