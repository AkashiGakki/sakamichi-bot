import * as fs from 'node:fs'
import { fetchNoMembers } from '../utils'

try {
  const members = await fetchNoMembers()
  const data = JSON.stringify(members, null, 2)
  fs.writeFileSync('./data/no-member.json', data, 'utf8')
  console.log('File is written successfully!')
}
catch (err) {
  console.log(`Error writing file: ${err}`)
}
