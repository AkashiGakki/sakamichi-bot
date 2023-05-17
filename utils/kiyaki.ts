export const cachedKiMemberInfo = cachedFunction(() => {
  // fetch kiyaki data
}, {
  maxAge: 60 * 60 * 12 * 7,
  name: 'KiMemberInfo'
})
