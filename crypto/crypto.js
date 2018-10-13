const crypto = require('crypto')
const hash = crypto.createHash('md5')

/* 可任意多次调用update() */
hash.update('hello world')
hash.update('hello nodejs')
console.log(hash)