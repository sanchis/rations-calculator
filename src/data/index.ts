// import cereal from './cereal.json'
// import dairy from './dairy.json'
// import drink from './drink.json'
// import fruit from './fruit.json'
// import nut from './nut.json'
// import other from './other.json'
// import vegetables from './vegetables.json'

import dairy from './_dairy.json'
import fat from './_fat.json'
import flour from './_flour.json'
import fruit from './_fruit.json'
import protein from './_protein.json'
import vegetables from './_vegetables.json'
export {
  fat,
  dairy,
  flour,
  fruit,
  protein,
  vegetables
}
export interface FoodCategory {
  id: string
  name: string
  ration: number
}

// export enum CategoryType {
//     CEREAL,
//     DAIRY,
//     DRINK,
//     FRUIT,
//     NUT,
//     VEGETABLES
// }
