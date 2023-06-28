import { getAge, getConstellation } from '@use-kit/functions'
import third from './third.json'

export const thirdOsu = [
  'shiori', 'yama', 'ume', 'yoda', 'momoko', 'renka',
  'riria', 'tamami', 'reno',
  'hazuki', 'den', 'yoshita',
]

export const thirdMember = [{
  ...third['kubo shiori'],
  age: getAge(third['kubo shiori'].birth),
  constellation: getConstellation(third['kubo shiori'].birth, 'ja')
}, {
  ...third['yamashita mizuki'],
  age: getAge(third['yamashita mizuki'].birth),
  constellation: getConstellation(third['yamashita mizuki'].birth, 'ja')
}, {
  ...third['umezawa minami'],
  age: getAge(third['umezawa minami'].birth),
  constellation: getConstellation(third['umezawa minami'].birth, 'ja')
}, {
  ...third['yoda yuuki'],
  age: getAge(third['yoda yuuki'].birth),
  constellation: getConstellation(third['yoda yuuki'].birth, 'ja')
}, {
  ...third['iwamoto renka'],
  age: getAge(third['iwamoto renka'].birth),
  constellation: getConstellation(third['iwamoto renka'].birth, 'ja')
}, {
  ...third['itou riria'],
  age: getAge(third['itou riria'].birth),
  constellation: getConstellation(third['itou riria'].birth, 'ja')
}, {
  ...third['sakaguchi tamami'],
  age: getAge(third['sakaguchi tamami'].birth),
  constellation: getConstellation(third['sakaguchi tamami'].birth, 'ja')
}, {
  ...third['nakamura reno'],
  age: getAge(third['nakamura reno'].birth),
  constellation: getConstellation(third['nakamura reno'].birth, 'ja')
}, {
  ...third['mukai hazuki'],
  age: getAge(third['mukai hazuki'].birth),
  constellation: getConstellation(third['mukai hazuki'].birth, 'ja')
}, {
  ...third['sato kaede'],
  age: getAge(third['sato kaede'].birth),
  constellation: getConstellation(third['sato kaede'].birth, 'ja')
}, {
  ...third['yoshida ayanochristie'],
  age: getAge(third['yoshida ayanochristie'].birth),
  constellation: getConstellation(third['yoshida ayanochristie'].birth, 'ja')
},]

export const thirdGraduated = [{
  ...third['oozono momoko'],
  age: getAge(third['oozono momoko'].birth),
  constellation: getConstellation(third['oozono momoko'].birth, 'ja')
}]

export const cateThird = thirdMember.concat(thirdGraduated)
