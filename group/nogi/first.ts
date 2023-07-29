import { getAge, getConstellation } from '@use-kit/functions'
import first from './json/first.json'

export const firstOsu = [
  'asuka', 'nanase', 'nanami', 'shiraishi', 'erika', 'marika',
  'minami', 'misa', 'manatsu', 'sayuri', 'kazumi', 'sakurai', 'himeka', 'maimai',
  'inoue', 'yuuri', 'ikoma', 'noujou', 'waka',
  'mahiro', 'kawago', 'higuchi', 'maaya', 'seirari', 'chiharu',
]

export const firstMember = []

export const firstGraduated = [{
  ...first['saito_asuka'],
  age: getAge(first['saito_asuka'].birth),
  constellation: getConstellation(first['saito_asuka'].birth, 'ja')
}, {
  ...first['nishino_nanase'],
  age: getAge(first['nishino_nanase'].birth),
  constellation: getConstellation(first['nishino_nanase'].birth, 'ja')
}, {
  ...first['hashimoto_nanami'],
  age: getAge(first['hashimoto_nanami'].birth),
  constellation: getConstellation(first['hashimoto_nanami'].birth, 'ja')
}, {
  ...first['shiraishi_mai'],
  age: getAge(first['shiraishi_mai'].birth),
  constellation: getConstellation(first['shiraishi_mai'].birth, 'ja')
}, {
  ...first['ikuta_erika'],
  age: getAge(first['ikuta_erika'].birth),
  constellation: getConstellation(first['ikuta_erika'].birth, 'ja')
}, {
  ...first['itou_marika'],
  age: getAge(first['itou_marika'].birth),
  constellation: getConstellation(first['itou_marika'].birth, 'ja')
}, {
  ...first['hoshino_minami'],
  age: getAge(first['hoshino_minami'].birth),
  constellation: getConstellation(first['hoshino_minami'].birth, 'ja')
}, {
  ...first['etou_misa'],
  age: getAge(first['etou_misa'].birth),
  constellation: getConstellation(first['etou_misa'].birth, 'ja')
}, {
  ...first['akimoto_manatsu'],
  age: getAge(first['akimoto_manatsu'].birth),
  constellation: getConstellation(first['akimoto_manatsu'].birth, 'ja')
}, {
  ...first['matsumura_sayuri'],
  age: getAge(first['matsumura_sayuri'].birth),
  constellation: getConstellation(first['matsumura_sayuri'].birth, 'ja')
}, {
  ...first['takayama_kazumi'],
  age: getAge(first['takayama_kazumi'].birth),
  constellation: getConstellation(first['takayama_kazumi'].birth, 'ja')
}, {
  ...first['sakurai_reika'],
  age: getAge(first['sakurai_reika'].birth),
  constellation: getConstellation(first['sakurai_reika'].birth, 'ja')
}, {
  ...first['nakamoto_himeka'],
  age: getAge(first['nakamoto_himeka'].birth),
  constellation: getConstellation(first['nakamoto_himeka'].birth, 'ja')
}, {
  ...first['fukagawa_mai'],
  age: getAge(first['fukagawa_mai'].birth),
  constellation: getConstellation(first['fukagawa_mai'].birth, 'ja')
}, {
  ...first['inoue_sayuri'],
  age: getAge(first['inoue_sayuri'].birth),
  constellation: getConstellation(first['inoue_sayuri'].birth, 'ja')
}, {
  ...first['saitou_yuuri'],
  age: getAge(first['saitou_yuuri'].birth),
  constellation: getConstellation(first['saitou_yuuri'].birth, 'ja')
}, {
  ...first['ikoma_rina'],
  age: getAge(first['ikoma_rina'].birth),
  constellation: getConstellation(first['ikoma_rina'].birth, 'ja')
}, {
  ...first['noujou_ami'],
  age: getAge(first['noujou_ami'].birth),
  constellation: getConstellation(first['noujou_ami'].birth, 'ja')
}, {
  ...first['wakatsuki_yumi'],
  age: getAge(first['wakatsuki_yumi'].birth),
  constellation: getConstellation(first['wakatsuki_yumi'].birth, 'ja')
}, {
  ...first['kawamura_mahiro'],
  age: getAge(first['kawamura_mahiro'].birth),
  constellation: getConstellation(first['kawamura_mahiro'].birth, 'ja')
}, {
  ...first['kawago_hina'],
  age: getAge(first['kawago_hina'].birth),
  constellation: getConstellation(first['kawago_hina'].birth, 'ja')
}, {
  ...first['higuchi_hina'],
  age: getAge(first['higuchi_hina'].birth),
  constellation: getConstellation(first['higuchi_hina'].birth, 'ja')
}, {
  ...first['wada_maaya'],
  age: getAge(first['wada_maaya'].birth),
  constellation: getConstellation(first['wada_maaya'].birth, 'ja')
}, {
  ...first['nagashima_seira'],
  age: getAge(first['nagashima_seira'].birth),
  constellation: getConstellation(first['nagashima_seira'].birth, 'ja')
}, {
  ...first['saitou_chiharu'],
  age: getAge(first['saitou_chiharu'].birth),
  constellation: getConstellation(first['saitou_chiharu'].birth, 'ja')
}, {
  ...first['nakada_kana'],
  age: getAge(first['nakada_kana'].birth),
  constellation: getConstellation(first['nakada_kana'].birth, 'ja')
}, {
  ...first['itou_nene'],
  age: getAge(first['itou_nene'].birth),
  constellation: getConstellation(first['itou_nene'].birth, 'ja')
}, {
  ...first['ichiki_rena'],
  age: getAge(first['ichiki_rena'].birth),
  constellation: getConstellation(first['ichiki_rena'].birth, 'ja')
}, {
  ...first['kashiwa_yukina'],
  age: getAge(first['kashiwa_yukina'].birth),
  constellation: getConstellation(first['kashiwa_yukina'].birth, 'ja')
}, {
  ...first['iwase_yumiko'],
  age: getAge(first['iwase_yumiko'].birth),
  constellation: getConstellation(first['iwase_yumiko'].birth, 'ja')
}, {
  ...first['hatanaka_seira'],
  age: getAge(first['hatanaka_seira'].birth),
  constellation: getConstellation(first['hatanaka_seira'].birth, 'ja')
}, {
  ...first['miyazawa_seira'],
  age: getAge(first['miyazawa_seira'].birth),
  constellation: getConstellation(first['miyazawa_seira'].birth, 'ja')
}, {
  ...first['yamato_rina'],
  age: getAge(first['yamato_rina'].birth),
  constellation: getConstellation(first['yamato_rina'].birth, 'ja')
}]

export const cateFirst = firstMember.concat(firstGraduated)

// console.log({ cateFirst })
