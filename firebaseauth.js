import {auth} from "./firebaseconfig.js";
import {onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Check if user is logged in or not
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is logged in, redirect to chatbot page
        if (window.location.pathname.includes("login.html")) {
            window.location.href = "index.html";
        }
    } else {
        // User is not logged in, redirect to login page
        if (!window.location.pathname.includes("login.html")) {
            window.location.href = "login.html";
        }
    }
});

// Logout function (Add this inside a logout button in index.html)
document.getElementById("logout-btn")?.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html"; // Redirect to login page
});



