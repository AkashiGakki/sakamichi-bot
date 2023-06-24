import fs from 'node:fs'
import { presetNoMembers } from '@/utils/nogi'
import jsonData from '@/data/no-member.json'

const members = presetNoMembers(jsonData.data)
const ret = members.map((member, index) => {
  return {
    id: String(index),
    code: member.code,
    romanized: member.english_name,
    nickname: member.name,
    birth: member.birthday,
  }
})

try {
  const data = JSON.stringify(ret, null, 2)
  fs.writeFileSync('./data/no-name.json', data, 'utf8')
  console.log('File is written successfully!')
} catch (error) {
  console.log(`Error writing file: ${error}`)
}
