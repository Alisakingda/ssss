# socket

## API 介绍

- 构造函数 WebSocket(url, protocols)：构造 WebSocket 对象，以及建立和服务器连接; protocols 可选字段，代表选择的子协议
- 状态变量 readyState: 代表当前连接的状态，短整型数据，取值为 CONNECTING(值为 0)， OPEN(值为 1), CLOSING(值为 2), CLOSED(值为 3)
- 方法变量 close(code, reason)： 关闭此 WebSocket 连接。
- 状态变量 bufferedAmount: send 函数调用后，被缓存并且未发送到网络上的数据长度
- 方法变量 send(data): 将数据 data 通过此 WebSocket 发送到对端
- 回调函数 onopen/onmessage/onerror/onclose: 当相应的事件发生时会触发此回调函数
