const Koa = require('koa')

const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')

const app = new Koa()

app.use(async (ctx,next) => {
  console.log(`process ${ctx.request.method} ${ctx.request.url}...`)
  await next()
})

router.get('/hello',async (ctx,next) => {
  ctx.response.body = `<h2>是不是忘了带上名字了哦</h2>`
})

router.get('/hello/:name',async (ctx,next) => {
  const name = ctx.params.name
  ctx.response.body = `<h2>hello ${name}!</h2>`
})

router.get('/',async (ctx,next) => {
  ctx.response.body = `<h2>i am index</h2>
    <form action='/signin' method='post'>
      <p>name : <input name='name' value='huanghao'></p>
      <p>password : <input name='password' type='password' ></p>
      <p><input type='submit' value='Submit' ></p>
  `
})

router.post('/signin',async (ctx,next) => {
  const
    name = ctx.request.body.name || '',
    password = ctx.request.body.password || ''
    console.log('name is ' + name)
    console.log('password is ' + password)
    if (name === 'huanghao' && password === '1111') {
      ctx.response.body = `<h2>你好啊 ${name}!</h2>`
    } else {
      ctx.response.body = `<h2>登陆失败啦</h2>
        <p><a href='/'>请重试咯！</a></p>
      `
    }
})


app.use(bodyParser())
app.use(router.routes())

app.listen(3000)
console.log('app started at port 3000....')