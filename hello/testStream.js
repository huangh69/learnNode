'use strict';
var fs = require('fs')

/* 打开一个流 */
var rs =  fs.createReadStream('testFs1.txt','utf-8')

rs.on ('data',function (chunk) {
    console.log('DATA')
    console.log(chunk)
})

rs.on ('end',function (chunk) {
    console.log('结束啦')
})

rs.on('error', function (err) {
    console.log('出错啦: ' + err);
});

/* 以流的形式写入文件 */
var ws =  fs.createWriteStream('testFsStream.txt','utf-8')
ws.write('使用Stream写入文本数据1...\n')
ws.write('使用Stream写入文本数据2...\n')
ws.end()

/* 用pipe复制文件 */
var rs1 = fs.createReadStream('testFs1.txt')
var ws1 = fs.createWriteStream('testFsPipe.txt')
rs1.pipe(ws1)