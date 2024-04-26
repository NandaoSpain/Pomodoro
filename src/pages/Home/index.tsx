import { Play } from 'phosphor-react'

export function Home() {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="task">I will go work in</label>
          <input id="task" type="text" />
          <label htmlFor="">Durante</label>
          <input id="minutesAmount" type="number" />
          <span>minutes.</span>
        </div>
        <div>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </div>
        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </form>
    </div>
  )
}
