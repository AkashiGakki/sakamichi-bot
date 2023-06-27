import { getAge, getConstellation } from '@use-kit/functions'
import fourth from './fourth.json'

export const fourthOsu = [
  'ayame', 'kaki', 'mayu', 'saku', 'nao',
  'yuri', 'saya', 'rika', 'hayashi',
  'seira', 'yuna', 'miyu', 'sayaka', 'mio', 'kuromi', 'rei',
]

export const fourthMember = [{
  ...fourth['tsutsui ayame'],
  age: getAge(fourth['tsutsui ayame'].birth),
  constellation: getConstellation(fourth['tsutsui ayame'].birth, 'ja')
}, {
  ...fourth['kaki haruka'],
  age: getAge(fourth['kaki haruka'].birth),
  constellation: getConstellation(fourth['kaki haruka'].birth, 'ja')
}, {
  ...fourth['tamura mayu'],
  age: getAge(fourth['tamura mayu'].birth),
  constellation: getConstellation(fourth['tamura mayu'].birth, 'ja')
}, {
  ...fourth['endo sakura'],
  age: getAge(fourth['endo sakura'].birth),
  constellation: getConstellation(fourth['endo sakura'].birth, 'ja')
}, {
  ...fourth['yumiki nao'],
  age: getAge(fourth['yumiki nao'].birth),
  constellation: getConstellation(fourth['yumiki nao'].birth, 'ja')
}, {
  ...fourth['matsuo miyu'],
  age: getAge(fourth['matsuo miyu'].birth),
  constellation: getConstellation(fourth['matsuo miyu'].birth, 'ja')
}, {
  ...fourth['kanagawa saya'],
  age: getAge(fourth['kanagawa saya'].birth),
  constellation: getConstellation(fourth['kanagawa saya'].birth, 'ja')
}, {
  ...fourth['sato rika'],
  age: getAge(fourth['sato rika'].birth),
  constellation: getConstellation(fourth['sato rika'].birth, 'ja')
}, {
  ...fourth['hayashi runa'],
  age: getAge(fourth['hayashi runa'].birth),
  constellation: getConstellation(fourth['hayashi runa'].birth, 'ja')
}, {
  ...fourth['shibata yuna'],
  age: getAge(fourth['shibata yuna'].birth),
  constellation: getConstellation(fourth['shibata yuna'].birth, 'ja')
}, {
  ...fourth['hayakawa seira'],
  age: getAge(fourth['hayakawa seira'].birth),
  constellation: getConstellation(fourth['hayakawa seira'].birth, 'ja')
}, {
  ...fourth['kakehashi sayaka'],
  age: getAge(fourth['kakehashi sayaka'].birth),
  constellation: getConstellation(fourth['kakehashi sayaka'].birth, 'ja')
}, {
  ...fourth['yakubo mio'],
  age: getAge(fourth['yakubo mio'].birth),
  constellation: getConstellation(fourth['yakubo mio'].birth, 'ja')
}, {
  ...fourth['kuromi haruka'],
  age: getAge(fourth['kuromi haruka'].birth),
  constellation: getConstellation(fourth['kuromi haruka'].birth, 'ja')
}, {
  ...fourth['seimiya rei'],
  age: getAge(fourth['seimiya rei'].birth),
  constellation: getConstellation(fourth['seimiya rei'].birth, 'ja')
}]

export const fourthGraduated = [{
  ...fourth['kitagawa yuri'],
  age: getAge(fourth['kitagawa yuri'].birth),
  constellation: getConstellation(fourth['kitagawa yuri'].birth, 'ja')
}, {
  ...fourth['hayakawa seira'],
  age: getAge(fourth['hayakawa seira'].birth),
  constellation: getConstellation(fourth['hayakawa seira'].birth, 'ja')
}]

export const cateFourth = fourthMember.concat(fourthGraduated)

console.log({ cateFourth })
