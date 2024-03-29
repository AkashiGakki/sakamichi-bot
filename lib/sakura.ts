import fs from 'node:fs'
import { load } from 'cheerio'

const url = `${process.cwd()}/data/saku/ja-saku.html`
const ogUrl = `${process.cwd()}/data/saku/ja-saku-og.html`

const table = fs.readFileSync(url)
const ogTable = fs.readFileSync(ogUrl)

export const sMember = () => {
  const $ = load(table)
  const items = $('tbody tr').toArray().map((member) => {
    const content = load(member)

    return {
      name: content('td:nth-child(1)').text(),
      kana: content('td:nth-child(2)').text(),
      cate: content('td:nth-child(7)').text(),
      birthday: content('td:nth-child(3) span').text().split('_')[0].split(' ')[0],
      birthplace: content('td:nth-child(4)').text().trim(),
      blood: content('td:nth-child(5)').text(),
      height: content('td:nth-child(6)').text().split('cm')[0],
    }
  })

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
      height: content('td:nth-child(6)').text().trim().split('cm')[0],
    }
  }).slice(12).reverse()

  return items.concat(ogItems)
}
