


socket.on("user-joined",function(name){
//    <div class="chat join">harry joined the chat</div> 
let joinDiv = document.createElement("div")
joinDiv.classList.add("chat");
joinDiv.classList.add("join");
joinDiv.innerHTML = `${name} joined the chat`
chatBox.append(joinDiv)
})

socket.on("receive-chat",function(userObj){
 addChat("left",userObj)
})
socket.on("leave",function(name){
// console.log("leave ",name)

    let leaveDiv = document.createElement("div")
leaveDiv.classList.add("chat");
leaveDiv.classList.add("leave");
leaveDiv.innerHTML = `${name} left the chat`
chatBox.append(leaveDiv)
})
function addChat(sender,userObj)
{
    let chatDiv = document.createElement('div')
    chatDiv.classList.add('chat')
    chatDiv.classList.add(sender)
    let chatName = document.createElement('div')
    chatName.classList.add("name")
    chatName.innerHTML = userObj.user;
    let chatText = document.createElement('text')
    chatText.classList.add("text")
    chatText.innerHTML = userObj.chatMsg;
    chatDiv.append(chatName)
    chatDiv.append(chatText)
    chatBox.append(chatDiv)
}