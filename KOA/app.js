const Koa = require('koa')

const app = new Koa()

app.use(async (ctx,next) => {
  console.log('hello1')
  await next()
  console.log('hello2')
  ctx.response.type = 'text/html'
  ctx.response.body = '<h2>hello koa2</h2>'
})
app.use(async (ctx,next) => {
  console.log('hello3')
})
app.listen(3000)
console.log('app started at port 3000....')