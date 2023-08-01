import { getAge, getConstellation } from '@use-kit/functions'
import third from './json/third.json'

export const thirdMember = [{
  ...third['odakura_reina'],
  age: getAge(third['odakura_reina'].birth),
  constellation: getConstellation(third['odakura_reina'].birth, 'ja')
}, {
  ...third['murayama_miu'],
  age: getAge(third['murayama_miu'].birth),
  constellation: getConstellation(third['murayama_miu'].birth, 'ja')
}]

export const thirdGraduated = []

export const cateThird = thirdMember.concat(thirdGraduated)
