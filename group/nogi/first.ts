import { getAge, getConstellation } from '@use-kit/functions'
import first from './first.json'

export const firstOsu = [
  'asuka', 'nanase', 'nanami', 'shiraishi', 'erika', 'marika',
  'minami', 'misa', 'manatsu', 'sayuri', 'kazumi', 'sakurai', 'himeka', 'maimai',
  'inoue', 'yuuri', 'ikoma', 'noujou', 'waka',
  'mahiro', 'kawago', 'higuchi', 'maaya', 'seirari', 'chiharu',
]

export const firstMember = []

export const firstGraduated = [{
  ...first['saito asuka'],
  age: getAge(first['saito asuka'].birth),
  constellation: getConstellation(first['saito asuka'].birth, 'ja')
},{
  ...first['nishino nanase'],
  age: getAge(first['nishino nanase'].birth),
  constellation: getConstellation(first['nishino nanase'].birth, 'ja')
},{
  ...first['hashimoto nanami'],
  age: getAge(first['hashimoto nanami'].birth),
  constellation: getConstellation(first['hashimoto nanami'].birth, 'ja')
},{
  ...first['shiraishi mai'],
  age: getAge(first['shiraishi mai'].birth),
  constellation: getConstellation(first['shiraishi mai'].birth, 'ja')
},{
  ...first['ikuta erika'],
  age: getAge(first['ikuta erika'].birth),
  constellation: getConstellation(first['ikuta erika'].birth, 'ja')
},{
  ...first['itou marika'],
  age: getAge(first['itou marika'].birth),
  constellation: getConstellation(first['itou marika'].birth, 'ja')
},{
  ...first['hoshino minami'],
  age: getAge(first['hoshino minami'].birth),
  constellation: getConstellation(first['hoshino minami'].birth, 'ja')
},{
  ...first['etou misa'],
  age: getAge(first['etou misa'].birth),
  constellation: getConstellation(first['etou misa'].birth, 'ja')
},{
  ...first['akimoto manatsu'],
  age: getAge(first['akimoto manatsu'].birth),
  constellation: getConstellation(first['akimoto manatsu'].birth, 'ja')
},{
  ...first['matsumura sayuri'],
  age: getAge(first['matsumura sayuri'].birth),
  constellation: getConstellation(first['matsumura sayuri'].birth, 'ja')
},{
  ...first['takayama kazumi'],
  age: getAge(first['takayama kazumi'].birth),
  constellation: getConstellation(first['takayama kazumi'].birth, 'ja')
},{
  ...first['sakurai reika'],
  age: getAge(first['sakurai reika'].birth),
  constellation: getConstellation(first['sakurai reika'].birth, 'ja')
},{
  ...first['nakamoto himeka'],
  age: getAge(first['nakamoto himeka'].birth),
  constellation: getConstellation(first['nakamoto himeka'].birth, 'ja')
},{
  ...first['fukagawa mai'],
  age: getAge(first['fukagawa mai'].birth),
  constellation: getConstellation(first['fukagawa mai'].birth, 'ja')
},{
  ...first['inoue sayuri'],
  age: getAge(first['inoue sayuri'].birth),
  constellation: getConstellation(first['inoue sayuri'].birth, 'ja')
},{
  ...first['saitou yuuri'],
  age: getAge(first['saitou yuuri'].birth),
  constellation: getConstellation(first['saitou yuuri'].birth, 'ja')
},{
  ...first['ikoma rina'],
  age: getAge(first['ikoma rina'].birth),
  constellation: getConstellation(first['ikoma rina'].birth, 'ja')
},{
  ...first['noujou ami'],
  age: getAge(first['noujou ami'].birth),
  constellation: getConstellation(first['noujou ami'].birth, 'ja')
},{
  ...first['wakatsuki yumi'],
  age: getAge(first['wakatsuki yumi'].birth),
  constellation: getConstellation(first['wakatsuki yumi'].birth, 'ja')
},{
  ...first['kawamura mahiro'],
  age: getAge(first['kawamura mahiro'].birth),
  constellation: getConstellation(first['kawamura mahiro'].birth, 'ja')
},{
  ...first['kawago hina'],
  age: getAge(first['kawago hina'].birth),
  constellation: getConstellation(first['kawago hina'].birth, 'ja')
},{
  ...first['higuchi hina'],
  age: getAge(first['higuchi hina'].birth),
  constellation: getConstellation(first['higuchi hina'].birth, 'ja')
},{
  ...first['wada maaya'],
  age: getAge(first['wada maaya'].birth),
  constellation: getConstellation(first['wada maaya'].birth, 'ja')
},{
  ...first['nagashima seira'],
  age: getAge(first['nagashima seira'].birth),
  constellation: getConstellation(first['nagashima seira'].birth, 'ja')
},{
  ...first['saitou chiharu'],
  age: getAge(first['saitou chiharu'].birth),
  constellation: getConstellation(first['saitou chiharu'].birth, 'ja')
},{
  ...first['nakada kana'],
  age: getAge(first['nakada kana'].birth),
  constellation: getConstellation(first['nakada kana'].birth, 'ja')
},{
  ...first['itou nene'],
  age: getAge(first['itou nene'].birth),
  constellation: getConstellation(first['itou nene'].birth, 'ja')
},{
  ...first['ichiki rena'],
  age: getAge(first['ichiki rena'].birth),
  constellation: getConstellation(first['ichiki rena'].birth, 'ja')
},{
  ...first['kashiwa yukina'],
  age: getAge(first['kashiwa yukina'].birth),
  constellation: getConstellation(first['kashiwa yukina'].birth, 'ja')
},{
  ...first['iwase yumiko'],
  age: getAge(first['iwase yumiko'].birth),
  constellation: getConstellation(first['iwase yumiko'].birth, 'ja')
},{
  ...first['hatanaka seira'],
  age: getAge(first['hatanaka seira'].birth),
  constellation: getConstellation(first['hatanaka seira'].birth, 'ja')
},{
  ...first['miyazawa seira'],
  age: getAge(first['miyazawa seira'].birth),
  constellation: getConstellation(first['miyazawa seira'].birth, 'ja')
},{
  ...first['yamato rina'],
  age: getAge(first['yamato rina'].birth),
  constellation: getConstellation(first['yamato rina'].birth, 'ja')
}]

export const cateFirst = firstMember.concat(firstGraduated)
