const fs = require('fs')

function addMapping(router,mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET')) {
      let path = url.substring(4)
      router.get(path,mapping[url])
    } else if (url.startsWith('POST')) {
      let path = url.substring(5)
      router.post(path,mapping[url])
    }
  }
}

function addControllers (router,dir) {
  /* 获取controllers中所有的文件 */
  const files = fs.readdirSync(__dirname + '/' +dir)
  /* 过滤出js文件 */
  const js_files = files.filter(f => f.endsWith('.js'))
  for (var f of js_files) {
    console.log(`preocess controllers: ${f}...`)
    let mapping = require(__dirname + '/' + dir + '/' + f)
    addMapping(router,mapping)
  }
}

module.exports = function (dir) {
  let controllers_dir = dir || 'controllers'
  let router =  require('koa-router')()
  addControllers(router,controllers_dir)
  return router.routes()
}