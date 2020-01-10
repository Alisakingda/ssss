//作为get获取数据的回调对象存储
this.messageList = {}
//自定义Ws消息接收函数：服务器向前端推送消息时触发
this.onmessage = e => {
  //处理各种推送消息
  const message = JSON.parse(e.data)
  const eventName = message.action.splice("Rsp", "")
  //执行回调
  this.messageList[eventName](message)
}

//发送消息后回调
WBT.prototype.sendMsg = function(obj, callback) {
  const name = obj.action.replace("Req", "")
  //存储事件
  this.messageList[name] = callback
  this.socket.send(JSON.stringify(obj))
}
