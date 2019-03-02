import io from "socket.io-client"

export default () => {
  const socket = io("http://localhost:3001")

  socket.on("connect", () => console.log("connect"))
  socket.on("event", () => console.log("connect"))
  socket.on("disconnect", () => console.log("connect"))

  return socket
}
