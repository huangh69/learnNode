const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
  port: 3000
})

wss.on('connection',(ws) => {
  console.log(`[server] connection()`)
  ws.on('message',(msg) => {
    console.log(`接受的是： ${msg}`)
    ws.send(`echo: ${msg}`,(err) => {
      if (err) {
        console.log('出错啦' + err)
      }
    })
  }
)
})