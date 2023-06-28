import { $fetch } from 'ofetch'
import { getObjectField } from '@use-kit/functions'

import { defaultFields } from '@/utils'
import jsonData from '@/data/no-member.json'

const dataCleaning = (str: string): Record<string, unknown> => {
  const data = str.slice(4, -2)
  return JSON.parse(data)
}

export const fetchNoMembers = async () => {
  const resp: string = await $fetch('https://www.nogizaka46.com/s/n46/api/list/member')

  if (resp) {
    const ret = dataCleaning(resp)
    return ret
  }
  return []
}

export const presetNoMembers = (json: Record<string, unknown>[]) => {
  const members = json
    .filter((m: Record<string, unknown>) => m.code !== '10001')
    .map((m: Record<string, unknown>) => getObjectField(m, defaultFields))

  return members
}
