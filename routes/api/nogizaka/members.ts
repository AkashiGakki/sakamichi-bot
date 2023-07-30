import { nMembers, getCacheNoGiMembers } from '@/lib/nogi'

export default eventHandler(async (event) => {

  return await getCacheNoGiMembers()
  // return nMembers()
})
