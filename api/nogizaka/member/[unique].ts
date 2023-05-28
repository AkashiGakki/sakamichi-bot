import { nMembers } from '../../../utils/nogi'

export default eventHandler(async (event) => {
  const unique = event.context.params.unique
  const members = nMembers()

  return members.find(
    m => m.id === unique
      || m.name === unique
      || m.code === unique,
  )
})
