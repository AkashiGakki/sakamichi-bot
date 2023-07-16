import { getAge, getConstellation } from '@use-kit/functions'
import fifth from './fifth.json'

export const fifthOsu = [
  'nagi', 'teresa', 'satsuki', 'sakura', 'aruno', 'naonao',
  'miku', 'mao', 'iroha', 'aya', 'hina',
]

export const fifthMember = [{
  ...fifth['inoue_nagi'],
  age: getAge(fifth['inoue_nagi'].birth),
  constellation: getConstellation(fifth['inoue_nagi'].birth, 'ja'),
}, {
  ...fifth['ikeda_teresa'],
  age: getAge(fifth['ikeda_teresa'].birth),
  constellation: getConstellation(fifth['ikeda teresa'].birth, 'ja'),
}, {
  ...fifth["sugawara_satsuki"],
  age: getAge(fifth['sugawara_satsuki'].birth),
  constellation: getConstellation(fifth['sugawara_satsuki'].birth, 'ja'),
}, {
  ...fifth['kawasaki_sakura'],
  age: getAge(fifth['kawasaki_sakura'].birth),
  constellation: getConstellation(fifth['kawasaki_sakura'].birth, 'ja'),
}, {
  ...fifth['nakanishi_aruno'],
  age: getAge(fifth['nakanishi_aruno'].birth),
  constellation: getConstellation(fifth['nakanishi_aruno'].birth, 'ja'),
}, {
  ...fifth['tomisato_nao'],
  age: getAge(fifth['tomisato_nao'].birth),
  constellation: getConstellation(fifth['tomisato_nao'].birth, 'ja'),
}, {
  ...fifth['ichinose_miku'],
  age: getAge(fifth['ichinose_miku'].birth),
  constellation: getConstellation(fifth['ichinose_miku'].birth, 'ja'),
}, {
  ...fifth['ioki_mao'],
  age: getAge(fifth['ioki_mao'].birth),
  constellation: getConstellation(fifth['ioki_mao'].birth, 'ja'),
}, {
  ...fifth['okuda_iroha'],
  age: getAge(fifth['okuda_iroha'].birth),
  constellation: getConstellation(fifth['okuda_iroha'].birth, 'ja'),
}, {
  ...fifth['ogawa_aya'],
  age: getAge(fifth['ogawa_aya'].birth),
  constellation: getConstellation(fifth['ogawa_aya'].birth, 'ja'),
}, {
  ...fifth['okamoto_hina'],
  age: getAge(fifth['okamoto_hina'].birth),
  constellation: getConstellation(fifth['okamoto_hina'].birth, 'ja'),
}]

export const fifthGraduated = []

export const cateFifth = fifthMember.concat(fifthGraduated)
