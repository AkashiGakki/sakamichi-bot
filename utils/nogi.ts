import { $fetch } from 'ofetch'
import { getObjectField } from '@use-kit/functions'

import { defaultFields } from '.'
import jsonData from '../data/no-member.json'

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

const presetNoMembers = () => {
  const members = jsonData.data
    .filter((m: Record<string, unknown>) => m.code !== '10001')
    .map((m: Record<string, unknown>) => getObjectField(m, defaultFields))

  return members
}

// TODO: preset + wiki
export const nMembers = () => {
  return presetNoMembers()
}

export const cachedNoMemberInfo = cachedFunction(async () => {
  // TODO: get wiki data
  const data = $fetch('')

  return data
}, {
  maxAge: 60 * 60 * 12 * 7, // one week cached
  name: 'noMemberInfo'
})
