import { Parser } from 'htmlparser2'
import { DomHandler } from 'domhandler'

const rawHtml = `<div class="content">
<div class="name">saito sauka</div>
<div class="age">24</div>
</div>`

const handler = new DomHandler((error, dom) => {
  if (error) {
    console.log('err', error)
  } else {
    console.log(dom)
  }
})

const parser = new Parser({
  ontext(text) {
    console.log('->', text)
  }
})

parser.write(rawHtml)
parser.end()
