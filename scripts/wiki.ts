import { $fetch } from 'ofetch'
import { chromium } from 'playwright'
import * as xpath from 'xpath'
import dom from 'xmldom'
import { Parser } from 'htmlparser2'
import fs from 'node:fs'

console.log('>looking for loading....')
console.log()

const browser = await chromium.launch()
const page = await browser.newPage()
// await page.goto('https://zh.wikipedia.org/wiki/斋藤飞鸟')
await page.goto('https://zh.wikipedia.org/wiki/西野七濑')

// await page.goto('https://www.bilibili.com')
// console.log(await page.innerHTML('body'))

const html = await page.innerHTML('body')
const doc = new dom.DOMParser().parseFromString(html)
const nodes = xpath.select('//*[@id="mw-content-text"]/div[1]/table[1]', doc)
const table = nodes[0].toString()

// const parser = new Parser({
//   ontext(text) {
//     console.log('->', text)
//   }
// })

// parser.write(table)
// parser.end()

try {
  fs.writeFileSync('../data/nanase.html', table, 'utf8')
  console.log('File is written successfully!')
}
catch (err) {
  console.log(`Error writing file: ${err}`)
}
