const crypto = require('crypto')
const hash = crypto.createHash('md5')

/* 可任意多次调用update() */
hash.update('hello world')
hash.update('hello nodejs')
console.log(hash.digest('hex'));

/* Hmac */
const hmac = crypto.createHmac('sha256','secret-key')
hmac.update('hello world')
hmac.update('hello nodejs')
console.log(hmac.digest('hex'))