import { ReactElement, useMemo, useState } from 'react'
import type { FoodCategory } from '../data'
import { BsExclamationTriangle, BsPlus, BsDash } from 'react-icons/bs/index'
interface Props {
  elements: FoodCategory[]
  ration: number
}

interface FoodCategorySelected extends FoodCategory {
  quantity: number
}
export const TypeFood = ({ elements, ration }: Props): ReactElement => {
  const [categorySelected, setElements] = useState<FoodCategorySelected[]>([])

  const addElement = (id: string): void => {
    const elementFounded = elements.find(element => element.id === id)
    if (elementFounded != null) {
      setElements(currentElements => [...currentElements, { ...elementFounded, quantity: 1 }])
    }
  }

  const updateQuantity = (element: FoodCategorySelected, quantity: number): void => {
    if (quantity === 0) {
      setElements(elements => elements.filter(elementFilter => elementFilter.id !== element.id))
      return
    }
    element.quantity = quantity
    setElements([...categorySelected])
  }
  const elementsToShow = useMemo(
    () => elements.filter(element => !categorySelected.some(selected => selected.id === element.id)),
    [categorySelected, elements]
  )
  const canShowNewElement = useMemo(
    () => elementsToShow.length > 0 && categorySelected.reduce((acc, o) => acc + o.quantity, 0) < ration,
    [categorySelected, ration, elementsToShow]
  )

  const isExceededFood = useMemo(
    () => categorySelected.reduce((acc, o) => acc + o.quantity, 0) > ration,
    [categorySelected, ration]
  )

  return (
    <div className='flex flex-col gap-5 p-5 border border-blue-400 border-dashed rounded'>
      {isExceededFood &&
        <div className='p-5 my-1 text-yellow-600 bg-yellow-100 rounded'>
          <BsExclamationTriangle className='block m-auto text-3xl' />
          Cuidado! has excedido el numero de alimentos por ración permitidas, reduciendo la cantidad de los alimentos o sube la cantidad de la ración
        </div>}

      {
      categorySelected.map(element =>
        <div className='p-5 border border-green-500 border-dashed rounded ' key={element.id}>
          <p>{element.name}</p>
          <p>{element.ration * (element.quantity)} g/ml</p>
          <div className='flex flex-row items-center justify-center gap-1'>
            <button className='p-2 text-3xl text-white bg-green-400 rounded' onClick={() => updateQuantity(element, element.quantity + 0.5)}>
              <BsPlus />
            </button>
            <button className='p-2 text-3xl text-white bg-green-400 rounded' onClick={() => updateQuantity(element, element.quantity - 0.5)}>
              <BsDash />
            </button>
          </div>
        </div>
      )
}
      {canShowNewElement &&
        <div className='p-5'>
          <label>Añadir nuevo alimento:  </label>
          <select onChange={(e) => addElement(e.target.value)}>
            <option />
            {elementsToShow.map((data) => <option key={data.id} value={data.id}>{data.name}</option>)}
          </select>
        </div>}

    </div>
  )
}
