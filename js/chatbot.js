const userInput = document.querySelector('.chatbot-int');
const bot_reply = document.querySelector('.chatbot-body');
const btn = document.querySelector('.btn-send');

// send message 
document.addEventListener("DOMContentLoaded", () => {
btn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', function (ev) {
    if (ev.key === "Enter") {
        sendMessage();
    }
});


// send message
function sendMessage() {
    let userMessage = userInput.value.trim();
    if (userMessage === '') return;

    // display message
    appendMessage("user", userMessage);

    let bot_response = getBotRespond(userMessage);
    setTimeout(() => appendMessage("bot", bot_response), 500);
    userInput.value = "";
}


function appendMessage(sender, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    bot_reply.appendChild(messageDiv);

}

function getBotRespond(input) {
    input = input.toLowerCase();

    const responses = {
        "hello": "Hi there! How can I assist you?",
        "hi": "Hello! How can I help?",
        "how are you": "I'm just a bot, but I'm doing great! What about you?",
        "what is your name": "I'm your custom chatbot!",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[input] || "I'm not sure about that. Can you rephrase?";
}
});