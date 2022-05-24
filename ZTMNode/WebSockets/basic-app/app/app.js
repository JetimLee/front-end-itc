const socket = new WebSocket("ws://localhost:8080");
//this triggers the hand shake to open the web socket connection

socket.onmessage = ({ data }) => {
  console.log("Message from server", data);
};

document.querySelector("button").onclick = () => {
  console.log("hello");
  socket.send("hello from client");
};
