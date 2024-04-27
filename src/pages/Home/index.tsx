import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  HomeContainer,
  FormContainer,
  ContdownContainer,
  Separator,
  StartCountdownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'

const newCicleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Please enter a task'),
  minutesAmount: zod
    .number()
    .min(5, 'Please enter a valid amount of minutes')
    .max(60, 'The Cicle need to be at least 60 minutes'),
})

type NewCycleFormData = zod.infer<typeof newCicleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCicleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">I will go work in</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Named your Project"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="15 minutes" />
            <option value="30 minutes" />
            <option value="45 minutes" />
            <option value="60 minutes" />
          </datalist>

          <label htmlFor="">for</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            min={0}
            max={60}
            step={5}
            {...register('minutesAmount', { valueAsNumber: true })}
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
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
