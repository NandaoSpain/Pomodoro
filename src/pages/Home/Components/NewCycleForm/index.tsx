import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I will go work in</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Named your Project"
        disabled={!!activeCycle}
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
        min={5}
        max={60}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutes.</span>
    </FormContainer>
  )
}
