import { db } from "../firebaseconfig.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Get userId from localStorage
const userId = localStorage.getItem("userId");
const userName = localStorage.getItem("userName");
const userEmail = localStorage.getItem("userEmail");

// Select message input and submit button
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM fully loaded ');
    const messageInput = document.querySelector("#chatbot-field");
    const sendMessageBtn = document.querySelector("#send-btn");

    sendMessageBtn.addEventListener("click", async function (e) {
        e.preventDefault();

        const message = messageInput.value;
        if (!message) {
            alert("Please enter a message.");
            return;
        }

        try {
            // ✅ Save message to Firestore
            await setDoc(doc(db, "users", userId), {
                name: userName,
                email: userEmail,
                message: message,
                createdAt: new Date()
            });

            console.log("Message stored in Firestore!");
            alert("Message saved!");

            // Clear input field after saving
            messageInput.value = "";
        } catch (err) {
            console.error("Error:", err.message);
            alert(`Error: ${err.message}`);
        }
    });
});
