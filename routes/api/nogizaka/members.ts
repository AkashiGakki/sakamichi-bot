import { nMembers, getCacheNoGiMembers } from '@/utils/nogi'

export default eventHandler(async (event) => {

  // return getCacheNoGiMembers()
  return nMembers()
})
