import { chromium } from 'playwright'
import * as xpath from 'xpath'
import dom from 'xmldom'

export default eventHandler(async () => {

  console.log('>looking for loading....')
  console.log()

  const browser = await chromium.launch()
  const page = await browser.newPage()
  // await page.goto('https://zh.wikipedia.org/wiki/斋藤飞鸟')
  await page.goto('https://zh.wikipedia.org/wiki/西野七濑')

  const html = await page.innerHTML('body')
  const doc = new dom.DOMParser().parseFromString(html)
  const nodes = xpath.select('//*[@id="mw-content-text"]/div[1]/table[1]', doc)
  const table = nodes[0].toString()

  return {
    ret: table
  }
})
