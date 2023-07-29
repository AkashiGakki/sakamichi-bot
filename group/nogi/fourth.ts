import { getAge, getConstellation } from '@use-kit/functions'
import fourth from './json/fourth.json'

export const fourthOsu = [
  'ayame', 'kaki', 'mayu', 'saku', 'nao',
  'yuri', 'saya', 'rika', 'hayashi',
  'seira', 'yuna', 'miyu', 'sayaka', 'mio', 'kuromi', 'rei',
]

export const fourthMember = [{
  ...fourth['tsutsui_ayame'],
  age: getAge(fourth['tsutsui_ayame'].birth),
  constellation: getConstellation(fourth['tsutsui_ayame'].birth, 'ja')
}, {
  ...fourth['kaki_haruka'],
  age: getAge(fourth['kaki_haruka'].birth),
  constellation: getConstellation(fourth['kaki_haruka'].birth, 'ja')
}, {
  ...fourth['tamura_mayu'],
  age: getAge(fourth['tamura_mayu'].birth),
  constellation: getConstellation(fourth['tamura_mayu'].birth, 'ja')
}, {
  ...fourth['endo_sakura'],
  age: getAge(fourth['endo_sakura'].birth),
  constellation: getConstellation(fourth['endo_sakura'].birth, 'ja')
}, {
  ...fourth['yumiki_nao'],
  age: getAge(fourth['yumiki_nao'].birth),
  constellation: getConstellation(fourth['yumiki_nao'].birth, 'ja')
}, {
  ...fourth['matsuo_miyu'],
  age: getAge(fourth['matsuo_miyu'].birth),
  constellation: getConstellation(fourth['matsuo_miyu'].birth, 'ja')
}, {
  ...fourth['kanagawa_saya'],
  age: getAge(fourth['kanagawa_saya'].birth),
  constellation: getConstellation(fourth['kanagawa_saya'].birth, 'ja')
}, {
  ...fourth['sato_rika'],
  age: getAge(fourth['sato_rika'].birth),
  constellation: getConstellation(fourth['sato_rika'].birth, 'ja')
}, {
  ...fourth['hayashi_runa'],
  age: getAge(fourth['hayashi_runa'].birth),
  constellation: getConstellation(fourth['hayashi_runa'].birth, 'ja')
}, {
  ...fourth['shibata_yuna'],
  age: getAge(fourth['shibata_yuna'].birth),
  constellation: getConstellation(fourth['shibata_yuna'].birth, 'ja')
}, {
  ...fourth['hayakawa_seira'],
  age: getAge(fourth['hayakawa_seira'].birth),
  constellation: getConstellation(fourth['hayakawa_seira'].birth, 'ja')
}, {
  ...fourth['kakehashi_sayaka'],
  age: getAge(fourth['kakehashi_sayaka'].birth),
  constellation: getConstellation(fourth['kakehashi_sayaka'].birth, 'ja')
}, {
  ...fourth['yakubo_mio'],
  age: getAge(fourth['yakubo_mio'].birth),
  constellation: getConstellation(fourth['yakubo_mio'].birth, 'ja')
}, {
  ...fourth['kuromi_haruka'],
  age: getAge(fourth['kuromi_haruka'].birth),
  constellation: getConstellation(fourth['kuromi_haruka'].birth, 'ja')
}, {
  ...fourth['seimiya_rei'],
  age: getAge(fourth['seimiya_rei'].birth),
  constellation: getConstellation(fourth['seimiya_rei'].birth, 'ja')
}]

export const fourthGraduated = [{
  ...fourth['kitagawa_yuri'],
  age: getAge(fourth['kitagawa_yuri'].birth),
  constellation: getConstellation(fourth['kitagawa_yuri'].birth, 'ja')
}, {
  ...fourth['hayakawa_seira'],
  age: getAge(fourth['hayakawa_seira'].birth),
  constellation: getConstellation(fourth['hayakawa_seira'].birth, 'ja')
}]

export const cateFourth = fourthMember.concat(fourthGraduated)

// console.log({ cateFourth })
