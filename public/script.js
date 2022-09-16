
var chat = document.querySelector('#text_input');
var send = document.querySelector('#send');
var chatBox = document.querySelector('.chat_box');
var userName = document.querySelector('#user_name');
var sendUserName = document.querySelector('#send_user_name');

var chatInput = document.querySelector('.chat_input');
var chatEntry = document.querySelector('.entry_input');
var user;
sendUserName.addEventListener("click",function(){
     user = userName.value;
    if(user)
    {
        socket.emit("join-chat",user)
        chatInput.classList.remove('hide')
        chatBox.classList.remove('hide')
        chatEntry.classList.add('hide')


    }

})
send.addEventListener("click", function () {
 
    var chatMsg = chat.value;
    if (chatMsg) {
        socket.emit("chat_msg",{user,chatMsg})
       addChat("right",{user,chatMsg})
        chatBox.scrollTop=chatBox.scrollHeight;
        chat.value='';
    }
})