import { Play } from 'phosphor-react'
import { HomeContainer, FormContainer, ContdownContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will go work in</label>
          <input id="task" type="text" />
          <label htmlFor="">Durante</label>
          <input id="minutesAmount" type="number" />
          <span>minutes.</span>
        </FormContainer>
        <ContdownContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </ContdownContainer>
        <button type="submit">
          <Play size={24} />
          Start
        </button>
      </form>
    </HomeContainer>
  )
}
