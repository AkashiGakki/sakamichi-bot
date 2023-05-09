const dataCleaning = (str: string): Record<string, unknown> => {
  const data = str.slice(4, -2)
  return JSON.parse(data)
}

export const nMembers = async () => {
  const resp: string = await $fetch('https://www.nogizaka46.com/s/n46/api/list/member')

  if (resp) {
    const ret = dataCleaning(resp)
    return ret
  }
  return []
}
