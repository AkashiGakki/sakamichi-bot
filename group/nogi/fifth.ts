import { getAge } from '@use-kit/functions'
import fifth from './fifth.json'

export const fifthOsu = [
  'nagi', 'teresa', 'satsuki', 'sakura', 'aruno', 'naonao',
  'miku', 'mao', 'iroha', 'aya', 'hina',
]

export const fifthMember = [{
  ...fifth['inoue nagi'],
  age: getAge(fifth['inoue nagi'].birth),
}, {
  ...fifth['ikeda teresa'],
  age: getAge(fifth['ikeda teresa'].birth),
}, {
  ...fifth["sugawara satsuki"],
  age: getAge(fifth['sugawara satsuki'].birth),
}, {
  ...fifth['kawasaki sakura'],
  age: getAge(fifth['kawasaki sakura'].birth),
}, {
  ...fifth['nakanishi aruno'],
  age: getAge(fifth['nakanishi aruno'].birth),
}, {
  ...fifth['tomisato nao'],
  age: getAge(fifth['tomisato nao'].birth),
}, {
  ...fifth['ichinose miku'],
  age: getAge(fifth['ichinose miku'].birth),
}, {
  ...fifth['ioki mao'],
  age: getAge(fifth['ioki mao'].birth),
}, {
  ...fifth['okuda iroha'],
  age: getAge(fifth['okuda iroha'].birth),
}, {
  ...fifth['ogawa aya'],
  age: getAge(fifth['ogawa aya'].birth),
}, {
  ...fifth['okamoto hina'],
  age: getAge(fifth['okamoto hina'].birth),
}]

export const fifthGraduated = []

export const cateFifth = fifthMember.concat(fifthGraduated)
