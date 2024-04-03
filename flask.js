const socket = new WebSocket("ws://localhost:8765");

socket.onopen = function(event) {
    console.log("Connected to WebSocket server");
};

socket.onmessage = function(event) {
    console.log("Message received:", event.data);
    const messages = document.getElementById("messages");
    const div = document.createElement("div");
    div.textContent = event.data;
    div.classList.add("message", "received");
    messages.appendChild(div);

    // İlk mesajda kullanıcı adını ayarla
    if (messages.children.length === 1) {
        const usernameHeader = document.querySelector("#chatbox #chatHeader h3.username");
        if (usernameHeader) {
            const senderUsername = event.data.split(":")[0]; // İlk mesajın göndereni
            console.log("Kullanıcı adı değişti:", senderUsername); // Kontrol amaçlı konsola yazdırma
            usernameHeader.textContent = senderUsername;
        } else {
            console.log("Kullanıcı adı değiştirilemedi: h3.username bulunamadı."); // Hata mesajı konsola yazdırma
        }
    }
};

function sendMessage() {
    const input = document.getElementById("messageInput");
    const message = input.value;
    socket.send(message);
    const messages = document.getElementById("messages");
    const div = document.createElement("div");
    div.textContent = message;
    div.classList.add("message", "sent");
    messages.appendChild(div);
    input.value = "";
}

function handleKeyPress(event) {
    if (event.keyCode === 13) { // Enter tuşuna basıldığında
        sendMessage(); // Mesajı gönder
    }
}
