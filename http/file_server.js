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
        console.log(filePath)
        /* 获取文件状态 */
        fs.stat(filePath,(err,stats) => {
            if (!err && stats.isFile()) {
                console.log('200' + request.url)
                response.writeHead(200);
                fs.createReadStream(filePath).pipe(response)
            } else {
                // 出错了或者文件不存在:
                console.log('404 ' + request.url);
                // 发送404响应:
                response.writeHead(404);
                response.end('404 Not Found');
            }
        })
    })
    server.listen(8080)
    console.log('Server is running at http://127.0.0.1:8080/');
