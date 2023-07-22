import { useCallback, useMemo, useState } from 'react'
import type { FoodCategory } from '../data'
import { BiPlus, BiMinus, BiError } from "react-icons/bi";

interface Props {
    elements: FoodCategory[]
}

interface FoodCategorySelected extends FoodCategory {
    quantity: number
}
export const TypeFood = ({ elements }: Props) => {
    const [categorySelected, setElements] = useState<FoodCategorySelected[]>([])
    const [ration, setRation] = useState(0)

    const addElement = (id: string) => {
        const elementFounded = elements.find(element => element.id === id)
        if (elementFounded) {
            setElements(currentElements => [...currentElements, { ...elementFounded, quantity: 1 }])
        }
    }

    const updateQuantity = (element: FoodCategorySelected, quantity: number) => {
        if (quantity === 0) {
            setElements(elements => elements.filter(elementFilter => elementFilter.id !== element.id))
            return
        }
        element.quantity = quantity
        setElements([...categorySelected])
    }
    const elementsToShow = useMemo(
        () => elements.filter(element => !categorySelected.some(selected => selected.id === element.id)),
        [categorySelected, elements],
    )
    const canShowNewElement = useMemo(
        () => elementsToShow.length > 0 && categorySelected.reduce((acc, o) => acc + o.quantity, 0) < ration,
        [categorySelected, ration, elementsToShow],
    )

    const isExceededFood = useMemo(
        () => categorySelected.reduce((acc, o) => acc + o.quantity, 0) > ration,
        [categorySelected, ration],
    )

    return (
        <div className='flex flex-col gap-5 p-5 border border-blue-400 border-dashed rounded'>
            {isExceededFood && <div className='p-5 my-2 text-yellow-600 bg-yellow-100 rounded'><BiError className='block m-auto text-3xl' ></BiError>Cuidado! has excedido el numero de alimentos por Ración permitidas, reduciendo la cantidad de los alimentos o sube la cantidad de la ración </div>}
            <div className='flex flex-row items-center justify-center space-x-2'>
                <label htmlFor="ration">
                    Ración:
                </label>
                <input type="number" name="ration" value={ration} className='w-20' onChange={(e) => setRation(Number(e.target.value))} />
            </div>

            {categorySelected.map(element => <div className='p-5 border border-green-500 border-dashed rounded ' key={element.id}>
                <p>{element.name}</p>
                <p>{element.ration * (element.quantity)} g/ml</p>
                <div className='flex flex-row items-center justify-center gap-1'>
                    <button className='p-2 text-3xl text-white bg-green-400 rounded' onClick={() => updateQuantity(element, element.quantity + 0.5)}><BiPlus></BiPlus></button><br></br>
                    <button className='p-2 text-3xl text-white bg-green-400 rounded' onClick={() => updateQuantity(element, element.quantity - 0.5)}><BiMinus /></button >
                </div>
            </div>)}
            {canShowNewElement && <div className='p-5'>
                <label>Añadir nuevo alimento:  </label>
                <select onChange={(e) => addElement(e.target.value)}>
                    <option ></option>
                    {elementsToShow.map((data) => <option key={data.id} value={data.id}>{data.name}</option>)}
                </select>
            </div>}

        </div>
    )
}



