const msginput = document.getElementById("msg");
const socket = io();
const chatBox = document.getElementById("chat-box");

document.getElementsByTagName("form")[0].onsubmit = (e) => {
  e.preventDefault();
  socket.send(msginput.value);
  let msg = `<div class="sub1"><div class="sent">${msginput.value}</div></div>`;
  chatBox.innerHTML += msg;
  chatBox.scrollTop = chatBox.scrollHeight;
};
socket.on("message", (s) => {
  console.log(`msg`);
  chatBox.innerHTML += `<div class="sub2"><div class="received">${s}</div></div>`;
});
