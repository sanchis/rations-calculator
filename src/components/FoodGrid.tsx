import type { ReactElement } from 'react'
import { dairy, fat, flour, fruit, protein, vegetables } from '../data'
import { Ration } from '../components/Ration'
import { Header } from './Header'
export const FoodGrid = (): ReactElement => {
  const columnStyles = ' w-full text-center p-5'
  const subColumnsStyles = 'flex flex-col gap-y-2'
  const categories = ['Desayuno', 'Almuerzo', 'Comida', 'Merienda', 'Cena']
  return (
    <div
      className='flex flex-row justify-between bg-white divide-x rounded shadow-lg divide-slate-100'
    >
      {
      categories.map((cat) => (
        <div key={cat} className={columnStyles}>
          <Header as='h1'>{cat}</Header>
          <div className={subColumnsStyles}>
            <Ration title='Lacteos' elements={dairy} />
            <Ration title='Frutas' elements={fruit} />
            <Ration title='Verduras' elements={vegetables} />
            <Ration title='Harinas' elements={flour} />
            <Ration title='Proteinas' elements={protein} />
            <Ration title='Grasas' elements={fat} />
          </div>
        </div>
      ))
    }
    </div>
  )
}
