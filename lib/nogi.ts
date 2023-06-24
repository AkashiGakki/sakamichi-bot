
import fs from 'node:fs'
import { load } from 'cheerio'

export const nMembers = () => {
  const url = `${process.cwd()}/data/nogi/ja-nogi.html`
  const ogUrl = `${process.cwd()}/data/nogi/ja-nogi-og.html`

  const table = fs.readFileSync(url)
  const ogTable = fs.readFileSync(ogUrl)

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
