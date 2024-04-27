import { useState } from 'react'
import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  ContdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

export function Home() {
  const [task, setTask] = useState('')

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will go work in</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="Named your Project"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />

          <datalist id="task-suggestions">
            <option value="15 minutes" />
            <option value="30 minutes" />
            <option value="45 minutes" />
            <option value="60 minutes" />
          </datalist>

          <label htmlFor="">Durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            min={0}
            max={60}
            step={5}
          />
          <span>minutes.</span>
        </FormContainer>
        <ContdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </ContdownContainer>
        <StartCountdownButton disabled={!task} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
