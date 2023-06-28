import { nMembers, getCacheNoGiMembers } from '@/lib/nogi'

export default eventHandler(async (event) => {

  // return getCacheNoGiMembers()
  return nMembers()
})
