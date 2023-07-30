import { nMembers, getCacheNoGiMembers } from '@/lib/nogi'

export default eventHandler(async (event) => {
  const unique = event.context.params.unique
  const members = await getCacheNoGiMembers()

  return members.find(
    m => m.id === unique
      || m.name === unique
      || m.code === unique,
  )
})
