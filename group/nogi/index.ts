export * from './first'
export * from './second'
export * from './third'
export * from './fourth'
export * from './fifth'

import { cateFirst } from './first'
import { cateSecond } from './second'
import { cateThird } from './third'
import { cateFourth } from './fourth'
import { cateFifth } from './fifth'

export const groupNoGiMembers = cateFirst.concat(cateSecond, cateThird, cateFourth, cateFifth)
