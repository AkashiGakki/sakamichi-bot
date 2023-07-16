import { getAge, getConstellation } from '@use-kit/functions'
import third from './third.json'

export const thirdOsu = [
  'shiori', 'yama', 'ume', 'yoda', 'momoko', 'renka',
  'riria', 'tamami', 'reno',
  'hazuki', 'den', 'yoshita',
]

export const thirdMember = [{
  ...third['kubo_shiori'],
  age: getAge(third['kubo_shiori'].birth),
  constellation: getConstellation(third['kubo_shiori'].birth, 'ja')
}, {
  ...third['yamashita_mizuki'],
  age: getAge(third['yamashita_mizuki'].birth),
  constellation: getConstellation(third['yamashita_mizuki'].birth, 'ja')
}, {
  ...third['umezawa_minami'],
  age: getAge(third['umezawa_minami'].birth),
  constellation: getConstellation(third['umezawa_minami'].birth, 'ja')
}, {
  ...third['yoda_yuuki'],
  age: getAge(third['yoda_yuuki'].birth),
  constellation: getConstellation(third['yoda_yuuki'].birth, 'ja')
}, {
  ...third['iwamoto_renka'],
  age: getAge(third['iwamoto_renka'].birth),
  constellation: getConstellation(third['iwamoto_renka'].birth, 'ja')
}, {
  ...third['itou_riria'],
  age: getAge(third['itou_riria'].birth),
  constellation: getConstellation(third['itou_riria'].birth, 'ja')
}, {
  ...third['sakaguchi_tamami'],
  age: getAge(third['sakaguchi_tamami'].birth),
  constellation: getConstellation(third['sakaguchi_tamami'].birth, 'ja')
}, {
  ...third['nakamura_reno'],
  age: getAge(third['nakamura_reno'].birth),
  constellation: getConstellation(third['nakamura_reno'].birth, 'ja')
}, {
  ...third['mukai_hazuki'],
  age: getAge(third['mukai_hazuki'].birth),
  constellation: getConstellation(third['mukai_hazuki'].birth, 'ja')
}, {
  ...third['sato_kaede'],
  age: getAge(third['sato_kaede'].birth),
  constellation: getConstellation(third['sato_kaede'].birth, 'ja')
}, {
  ...third['yoshida_ayanochristie'],
  age: getAge(third['yoshida_ayanochristie'].birth),
  constellation: getConstellation(third['yoshida_ayanochristie'].birth, 'ja')
},]

export const thirdGraduated = [{
  ...third['oozono_momoko'],
  age: getAge(third['oozono_momoko'].birth),
  constellation: getConstellation(third['oozono_momoko'].birth, 'ja')
}]

export const cateThird = thirdMember.concat(thirdGraduated)
