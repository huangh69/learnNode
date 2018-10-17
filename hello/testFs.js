'use strict'

var fs = require('fs')
/* 文本文件 */
fs.readFile('testFs.txt','utf-8',function (err,data) {
    if (err) {
        console.log('出错了:' + err)
    } else {
        console.log('文本文件是:' + data)
    }
})
/* 二进制文件 */
fs.readFile('testFs.jpg',function (err,data) {
    if (err) {
        console.log('出错了:' + err)
    } else {
        // console.log('文件是:' + data)
        console.log('读取图片成功')
        /* 把读出的图片复制一份 */
        fs.writeFile('anotherImg.jpg',data,function (err) {
            if (err) {
                console.log('出错了:' + err)
            } else {
                console.log('图片复印成功')
            }
        })
    }
})
/* 写文件 */
fs.writeFile('testFs1.txt','写文件aa写文件aa',function (err) {
    if (err) {
        console.log('出错了:' + err)
    }
})

/* 获取文件信息 */
fs.stat('testFs1.txt',function (err,stat) {
    if (err) {
        console.log('stat出错啦' + err)
    } else {
        /* 是否是文件 */
        console.log('isFile:' + stat.isFile())
        /* 是否是目录 */
        console.log('isDirectory:' + stat.isDirectory())
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
})