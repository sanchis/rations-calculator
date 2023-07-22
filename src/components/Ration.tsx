
import { useState, type ReactElement } from 'react'
import type { FoodCategory } from '../data'
import { TypeFood } from './TypeFood'
interface RationProps {
  title: string
  elements: FoodCategory[]
}
export const Ration = ({ title, elements }: RationProps): ReactElement => {
  const [ration, setRation] = useState(0)
  return (
    <div className='flex flex-col gap-y-2'>
      <div className='flex flex-row items-center justify-between space-x-2'>
        <h2 className='mb-1 text-xl'>{title}</h2>
        <input type='number' name='ration' value={ration} className='w-20' onChange={(e) => setRation(Number(e.target.value))} />
      </div>
      {ration > 0 && <TypeFood ration={ration} elements={elements} />}
    </div>

  )
}
