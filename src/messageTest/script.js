let unreadMessages = 0;
let chatWindowVisible = false;

function toggleChatWindow() {
    const chatPopup = document.getElementById("chatPopup");
    if (chatWindowVisible) {
        chatPopup.style.bottom = "-400px";
        chatWindowVisible = false;
    } else {
        chatPopup.style.bottom = "20px";
        chatWindowVisible = true;
        resetNotification();
    }
}

function resetNotification() {
    unreadMessages = 0;
    document.getElementById("chatNotification").textContent = unreadMessages;
    document.getElementById("chatNotification").style.display = "none";
}

function sendMessage() {
    const chatInput = document.getElementById("chatInput");
    const message = chatInput.value.trim();

    if (message !== "") {
        const chatBody = document.getElementById("chatBody");
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatBody.appendChild(messageElement);
        chatInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Simulate receiving a message
function receiveMessage(message) {
    const chatBody = document.getElementById("chatBody");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);

    if (!chatWindowVisible) {
        unreadMessages++;
        document.getElementById("chatNotification").textContent =
            unreadMessages;
        document.getElementById("chatNotification").style.display = "flex";
    }
}

// Test receiving a message
setTimeout(() => {
    receiveMessage("Hello! You have a new message.");
}, 2000);

setTimeout(() => {
    receiveMessage("Hello! You have a new message.");
}, 4000);

setTimeout(() => {
    receiveMessage("Hello! You have a new message.");
}, 6000);
