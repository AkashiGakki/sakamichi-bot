import { $fetch } from 'ofetch'
import { getObjectField } from '@use-kit/functions'
import fs from 'node:fs'
import { load } from 'cheerio'

import { defaultFields } from '.'
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

const presetNoMembers = () => {
  const members = jsonData.data
    .filter((m: Record<string, unknown>) => m.code !== '10001')
    .map((m: Record<string, unknown>) => getObjectField(m, defaultFields))

  return members
}

const url = `${process.cwd()}/data/nogi/ja-nogi.html`
const ogUrl = `${process.cwd()}/data/nogi/ja-nogi-og.html`

const table = fs.readFileSync(url)
const ogTable = fs.readFileSync(ogUrl)

export const nMembers = () => {
  const $ = load(table)
  const items = $('tbody tr').toArray().map((member) => {
    const content = load(member)

    return {
      name: content('td:nth-child(1)').text(),
      kana: content('td:nth-child(2)').text(),
      cate: content('td:nth-child(7)').text(),
      birthday: content('td:nth-child(3)').text().split('_')[0],
      birthplace: content('td:nth-child(4)').text(),
      blood: content('td:nth-child(5)').text(),
      height: content('td:nth-child(6)').text().split('&')[0],
    }
  }).filter(Boolean)

  const og = load(ogTable)
  const ogItems = og('tbody tr').toArray().map((member) => {
    const content  = load(member)

    return {
      name: content('td:nth-child(1)').text(),
      kana: content('td:nth-child(2)').text(),
      cate: content('td:nth-child(7)').text(),
      birthday: content('td:nth-child(3)').text().split('_')[0],
      birthplace: content('td:nth-child(4)').text(),
      blood: content('td:nth-child(5)').text().trim(),
      height: content('td:nth-child(6)').text().trim().split('&')[0],
    }
  }).reverse()

  return items.concat(ogItems)
}

export const getCacheNoGiMembers = cachedFunction(async () => {
  // TODO: get wiki data
  const data = nMembers()

  return data
}, {
  maxAge: 60 * 60 * 12 * 7, // one week cached
  name: 'noMemberInfo'
})
