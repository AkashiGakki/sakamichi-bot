import { chromium } from 'playwright'
import { DOMParser, XMLSerializer } from '@xmldom/xmldom'
import dom from 'xmldom'
import * as xpath from 'xpath'

console.log('>waiting for loading....')
console.log()

const browser = await chromium.launch()
const page = await browser.newPage()

const pageList = [{
  site: 'https://zh.wikipedia.org/wiki/乃木坂46',
  active: '//*[@id="mw-content-text"]/div[1]/table[2]',
  og: '//*[@id="mw-content-text"]/div[1]/table[3]'
}, {
  site: 'https://zh.wikipedia.org/zh-hk/乃木坂46',
  active: '//*[@id="mw-content-text"]/div[1]/table[2]',
  og: '//*[@id="mw-content-text"]/div[1]/table[3]'
}, {
  site: 'https://en.wikipedia.org/wiki/Nogizaka46',
  active: '//*[@id="mw-content-text"]/div[1]/table[2]',
  og: '//*[@id="mw-content-text"]/div[1]/table[3]'
}, {
  site: 'https://ja.wikipedia.org/wiki/乃木坂46',
  active: '//*[@id="mw-content-text"]/div[1]/table[4]',
  og: '//*[@id="mw-content-text"]/div[1]/table[5]'
}]

for (const target of pageList) {
  await page.goto(target.site)

  const html = await page.innerHTML('body')

  // const doc = new DOMParser().parseFromString(html, 'text/xml')
  const doc = new dom.DOMParser().parseFromString(html)
  const nodes = xpath.select(target.active, doc)
  const ogNodes = xpath.select(target.og, doc)

  // const serialized = new XMLSerializer().serializeToString(doc)
  const table = nodes[0].toString()
  const ogTable = ogNodes[0].toString()
}
