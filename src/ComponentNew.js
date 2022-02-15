// import { io } from "socket.io-client";

// const URL = "https://stg.clubdefy.io";
// const socket = io(URL, { autoConnect: false });
// socket.onAny((event, ...args) => {
//   console.log(event, args);
// });
// io.on("connection", (socket) => {
//   const users = [];
//   for (let [id, socket] of io.of("/").sockets) {
//     users.push({
//       userID: id,
//       username: socket.username,
//     });
//   }
//   socket.emit("users", users);
//   // ...
// });

// export default socket;