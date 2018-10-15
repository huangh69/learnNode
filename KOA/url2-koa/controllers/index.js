const fn_index = async (ctx,next) => {
  ctx.response.body = `<h2>i am index</h2>
  <form action='/signin' method='post'>
    <p>name : <input name='name' value='huanghao'></p>
    <p>password : <input name='password' type='password' ></p>
    <p><input type='submit' value='Submit' ></p>
`
}

const fn_signin = async (ctx,next) => {
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
}

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
}