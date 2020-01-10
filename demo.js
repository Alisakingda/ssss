async function recvData() {
  await new Promise(resolve => {
    socket.on("recvData", function(data) {
      console.log(data)
      resolve()
    })
  })
  doSomething()
}
