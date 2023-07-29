import { getAge, getConstellation } from '@use-kit/functions'
import second from './json/second.json'

export const secondOsu = [
  'miona', 'kotoko', 'hinako', 'shinuchi', 'renze',
  'junna', 'yamazaki', 'miria', 'ayane',
  'rena', 'iori', 'karin', 'kyoka', 'risako',
]

export const secondMember = []

export const secondGraduated = [{
  ...second['hori_miona'],
  age: getAge(second['hori_miona'].birth),
  constellation: getConstellation(second['hori_miona'].birth, 'ja')
}, {
  ...second['sasaki_kotoko'],
  age: getAge(second['sasaki_kotoko'].birth),
  constellation: getConstellation(second['sasaki_kotoko'].birth, 'ja')
}, {
  ...second['kitano_hinako'],
  age: getAge(second['kitano_hinako'].birth),
  constellation: getConstellation(second['kitano_hinako'].birth, 'ja')
}, {
  ...second['shinuchi_mai'],
  age: getAge(second['shinuchi_mai'].birth),
  constellation: getConstellation(second['shinuchi_mai'].birth, 'ja')
}, {
  ...second['terada_ranze'],
  age: getAge(second['terada_ranze'].birth),
  constellation: getConstellation(second['terada_ranze'].birth, 'ja')
}, {
  ...second['itou_junna'],
  age: getAge(second['itou_junna'].birth),
  constellation: getConstellation(second['itou_junna'].birth, 'ja')
}, {
  ...second['yamazaki_rena'],
  age: getAge(second['yamazaki_rena'].birth),
  constellation: getConstellation(second['yamazaki_rena'].birth, 'ja')
}, {
  ...second['watanabe_miria'],
  age: getAge(second['watanabe_miria'].birth),
  constellation: getConstellation(second['watanabe_miria'].birth, 'ja')
}, {
  ...second['suzuki_ayane'],
  age: getAge(second['suzuki_ayane'].birth),
  constellation: getConstellation(second['suzuki_ayane'].birth, 'ja')
}, {
  ...second['matsui_rena'],
  age: getAge(second['matsui_rena'].birth),
  constellation: getConstellation(second['matsui_rena'].birth, 'ja')
}, {
  ...second['sagara_iori'],
  age: getAge(second['sagara_iori'].birth),
  constellation: getConstellation(second['sagara_iori'].birth, 'ja')
}, {
  ...second['itou_karin'],
  age: getAge(second['itou_karin'].birth),
  constellation: getConstellation(second['itou_karin'].birth, 'ja')
}, {
  ...second['yonetoku_kyoka'],
  age: getAge(second['yonetoku_kyoka'].birth),
  constellation: getConstellation(second['yonetoku_kyoka'].birth, 'ja')
}, {
  ...second['yada_risako'],
  age: getAge(second['yada_risako'].birth),
  constellation: getConstellation(second['yada_risako'].birth, 'ja')
}]

export const cateSecond = secondMember.concat(secondGraduated)

// console.log({ cateSecond })
