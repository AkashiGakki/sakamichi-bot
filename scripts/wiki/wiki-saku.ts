import { chromium } from 'playwright'
import { DOMParser, XMLSerializer } from '@xmldom/xmldom'
import dom from 'xmldom'
import * as xpath from 'xpath'
import fs from 'node:fs'

console.log('>waiting for loading....')
console.log()

const browser = await chromium.launch()
const page = await browser.newPage()

const pageList = [{
  site: 'https://zh.wikipedia.org/wiki/櫻坂46',
  active: '//*[@id="mw-content-text"]/div[1]/table[2]',
  new: '//*[@id="mw-content-text"]/div[1]/table[3]',
  og: '//*[@id="mw-content-text"]/div[1]/table[4]',
  folder: 'saku',
  name: ['zh-saku', 'zh-saku-og']
}, {
  site: 'https://zh.wikipedia.org/zh-hk/櫻坂46',
  active: '//*[@id="mw-content-text"]/div[1]/table[2]',
  new: '//*[@id="mw-content-text"]/div[1]/table[3]',
  og: '//*[@id="mw-content-text"]/div[1]/table[4]',
  folder: 'saku',
  name: ['zh-hk-saku', 'zh-hk-saku-og']
}, {
  site: 'https://en.wikipedia.org/wiki/Sakurazaka46',
  active: '//*[@id="mw-content-text"]/div[1]/table[2]',
  og: '//*[@id="mw-content-text"]/div[1]/table[3]',
  folder: 'saku',
  name: ['en-saku', 'en-saku-og']
}, {
  site: 'https://ja.wikipedia.org/wiki/櫻坂46',
  active: '//*[@id="mw-content-text"]/div[1]/table[4]',
  og: '//*[@id="mw-content-text"]/div[1]/table[5]',
  folder: 'saku',
  name: ['ja-saku', 'ja-saku-og']
}]

for (const target of pageList) {
  await page.goto(target.site)

  const html = await page.innerHTML('body')

  const doc = new dom.DOMParser().parseFromString(html)
  const nodes = xpath.select(target.active, doc)
  const newNodes = xpath.select(target?.new, doc)
  const ogNodes = xpath.select(target.og, doc)

  const table = nodes[0].toString()
  const newTable = newNodes.length && newNodes[0].toString()
  const ogTable = ogNodes[0].toString()

  try {
    fs.writeFileSync(`./data/saku/${target.name[0]}.html`, table, 'utf8')
    newTable && fs.writeFileSync(`./data/saku/${target.name[0]}-new.html`, newTable, 'utf8')
    fs.writeFileSync(`./data/saku/${target.name[1]}.html`, ogTable, 'utf8')
    console.log('File is written successfully!')
  }
  catch (err) {
    console.log(`Error writing file: ${err}`)
  }
}

await browser.close()
