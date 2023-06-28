import { getAge, getConstellation } from '@use-kit/functions'
import fifth from './fifth.json'

export const fifthOsu = [
  'nagi', 'teresa', 'satsuki', 'sakura', 'aruno', 'naonao',
  'miku', 'mao', 'iroha', 'aya', 'hina',
]

export const fifthMember = [{
  ...fifth['inoue nagi'],
  age: getAge(fifth['inoue nagi'].birth),
  constellation: getConstellation(fifth['inoue nagi'].birth, 'ja'),
}, {
  ...fifth['ikeda teresa'],
  age: getAge(fifth['ikeda teresa'].birth),
  constellation: getConstellation(fifth['ikeda teresa'].birth, 'ja'),
}, {
  ...fifth["sugawara satsuki"],
  age: getAge(fifth['sugawara satsuki'].birth),
  constellation: getConstellation(fifth['sugawara satsuki'].birth, 'ja'),
}, {
  ...fifth['kawasaki sakura'],
  age: getAge(fifth['kawasaki sakura'].birth),
  constellation: getConstellation(fifth['kawasaki sakura'].birth, 'ja'),
}, {
  ...fifth['nakanishi aruno'],
  age: getAge(fifth['nakanishi aruno'].birth),
  constellation: getConstellation(fifth['nakanishi aruno'].birth, 'ja'),
}, {
  ...fifth['tomisato nao'],
  age: getAge(fifth['tomisato nao'].birth),
  constellation: getConstellation(fifth['tomisato nao'].birth, 'ja'),
}, {
  ...fifth['ichinose miku'],
  age: getAge(fifth['ichinose miku'].birth),
  constellation: getConstellation(fifth['ichinose miku'].birth, 'ja'),
}, {
  ...fifth['ioki mao'],
  age: getAge(fifth['ioki mao'].birth),
  constellation: getConstellation(fifth['ioki mao'].birth, 'ja'),
}, {
  ...fifth['okuda iroha'],
  age: getAge(fifth['okuda iroha'].birth),
  constellation: getConstellation(fifth['okuda iroha'].birth, 'ja'),
}, {
  ...fifth['ogawa aya'],
  age: getAge(fifth['ogawa aya'].birth),
  constellation: getConstellation(fifth['ogawa aya'].birth, 'ja'),
}, {
  ...fifth['okamoto hina'],
  age: getAge(fifth['okamoto hina'].birth),
  constellation: getConstellation(fifth['okamoto hina'].birth, 'ja'),
}]

export const fifthGraduated = []

export const cateFifth = fifthMember.concat(fifthGraduated)
