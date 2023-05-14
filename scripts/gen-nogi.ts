import * as fs from 'node:fs'
import { nMembers } from '../utils'

try {
  const members = await nMembers()
  const data = JSON.stringify(members, null, 2)
  fs.writeFileSync('./data/no-member.json', data, 'utf8')
  console.log('File is written successfully!')
}
catch (err) {
  console.log(`Error writing file: ${err}`)
}
