import type { ReactElement } from 'react'
import { Header } from './Header'

export const Equivalence = (): ReactElement => {
  const itemStyles = 'p-4 last:border-none border-b'
  return (

    <div className='py-2 bg-white rounded shadow-lg'>
      <span className='text-center'><Header as='h1'>Tabla equivalencias</Header></span>
      <ul className='grid grid-cols-2 mt-2 border-t'>
        <li className={itemStyles}>1 cucharadita = 5 mililitros</li>
        <li className={itemStyles}>1 cucharada = 15 mililitros</li>
        <li className={itemStyles}>3 cucharaditas = 1 cucharada</li>
        <li className={itemStyles}>16 cucharadas de agua = 1 vaso de agua</li>
        <li className={itemStyles}>1 vaso de los de agua = 200 centímetros cúbicos</li>
        <li className={itemStyles}>1 vaso de los de agua = 2 vasos de los de vino</li>
        <li className={itemStyles}>1 vaso de vino 100 cc = 100 centímetros cúbicos</li>
        <li className={itemStyles}>1 taza de café = 250 centímetros cúbicos</li>
        <li className={itemStyles}>
          1 tazón o taza de desayuno = 250 mililitros=1/4 de litro =2 decilitros y
          1/2
        </li>
        <li className={itemStyles}>1 taza de las de té = 150 mililitros = 1 decilitro y 1/2</li>
        <li className={itemStyles}>1 taza de las de café = 100 mililitros = 1 decilitro</li>
        <li className={itemStyles}>1 vaso de los de agua = 200 mililitros = 2 decilitros</li>
        <li className={itemStyles}>1 vaso de los de vino = 100 mililitros = 1 decilitro</li>
        <li className={itemStyles}>8 cucharadas soperas = 100 mililitros = 1 decilitro</li>
        <li className={itemStyles}>
          1 copita o vaso de licor = 50 mililitros = 1/2 decilitro = 4 cucharadas
          soperas
        </li>
      </ul>
    </div>
  )
}
