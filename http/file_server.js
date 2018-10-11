'use strict';
const
    fs = require('fs'),
    url = require('url'),
    path
    = require('path'),
    http = require('http')
    /* 从命令行参数获取root目录，默认是当前目录 */
    const root = path.resolve(process.argv[2] || '.')
    console.log('Static root dir: ' + root);

    /* 创建服务器 */

    const server = http.createServer((request,response) => {
        const pathName = url.parse(request.url).pathname
        const filePath = path.join(root,pathName)
    })