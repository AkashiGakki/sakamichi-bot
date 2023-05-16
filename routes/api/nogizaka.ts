import { getObjectField } from '@use-kit/functions'
import jsonData from '../../data/no-member.json'

export default eventHandler(async (event) => {

  // return members
  return {
    'nogizaka': true
  }
})
