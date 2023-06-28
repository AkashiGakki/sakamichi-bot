import { getAge, getConstellation } from '@use-kit/functions'
import second from './second.json'

export const secondOsu = [
  'miona', 'kotoko', 'hinako', 'shinuchi', 'renze',
  'junna', 'yamazaki', 'miria', 'ayane',
  'rena', 'iori', 'karin', 'kyoka', 'risako',
]

export const secondMember = []

export const secondGraduated = [{
  ...second['hori miona'],
  age: getAge(second['hori miona'].birth),
  constellation: getConstellation(second['hori miona'].birth, 'ja')
}, {
  ...second['sasaki kotoko'],
  age: getAge(second['sasaki kotoko'].birth),
  constellation: getConstellation(second['sasaki kotoko'].birth, 'ja')
}, {
  ...second['kitano hinako'],
  age: getAge(second['kitano hinako'].birth),
  constellation: getConstellation(second['kitano hinako'].birth, 'ja')
}, {
  ...second['shinuchi mai'],
  age: getAge(second['shinuchi mai'].birth),
  constellation: getConstellation(second['shinuchi mai'].birth, 'ja')
}, {
  ...second['terada ranze'],
  age: getAge(second['terada ranze'].birth),
  constellation: getConstellation(second['terada ranze'].birth, 'ja')
}, {
  ...second['itou junna'],
  age: getAge(second['itou junna'].birth),
  constellation: getConstellation(second['itou junna'].birth, 'ja')
}, {
  ...second['yamazaki rena'],
  age: getAge(second['yamazaki rena'].birth),
  constellation: getConstellation(second['yamazaki rena'].birth, 'ja')
}, {
  ...second['watanabe miria'],
  age: getAge(second['watanabe miria'].birth),
  constellation: getConstellation(second['watanabe miria'].birth, 'ja')
}, {
  ...second['suzuki ayane'],
  age: getAge(second['suzuki ayane'].birth),
  constellation: getConstellation(second['suzuki ayane'].birth, 'ja')
}, {
  ...second['matsui rena'],
  age: getAge(second['matsui rena'].birth),
  constellation: getConstellation(second['matsui rena'].birth, 'ja')
}, {
  ...second['sagara iori'],
  age: getAge(second['sagara iori'].birth),
  constellation: getConstellation(second['sagara iori'].birth, 'ja')
}, {
  ...second['itou karin'],
  age: getAge(second['itou karin'].birth),
  constellation: getConstellation(second['itou karin'].birth, 'ja')
}, {
  ...second['yonetoku kyoka'],
  age: getAge(second['yonetoku kyoka'].birth),
  constellation: getConstellation(second['yonetoku kyoka'].birth, 'ja')
}, {
  ...second['yada risako'],
  age: getAge(second['yada risako'].birth),
  constellation: getConstellation(second['yada risako'].birth, 'ja')
}]

export const cateSecond = secondMember.concat(secondGraduated)
