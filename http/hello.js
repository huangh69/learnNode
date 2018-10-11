'use strict';
const http = require('http')
const url = require('url')
const path = require('path')
/* 创建 http server 并传入回调函数 */
const server = http.createServer ((request,response) => {
    const urlObject = url.parse(request.url)
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200, {'Content-Type': 'text/html'});
    if (urlObject.pathname === '/test') {
        response.end(`<h1>Hello test!${urlObject.query}</h1>`);
    } else {
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello world!</h1>');
    }

})
// 让服务器监听8080端口:
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));
/* 解析当前目录 */
const workDir = path.resolve('.')
console.log('当前目录' + workDir)
/* 组合完整的文件路径:当前目录+'pub'+'index.html' */
const filePath = path.join(workDir,'pub','index.html')
console.log('完整的文件路径' + filePath)