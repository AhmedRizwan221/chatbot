import {auth} from "./firebaseconfig.js";
import {onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// Check if user is logged in or not
onAuthStateChanged(auth, (user) => {
    if (user) {
        // check user is login 
        if (window.location.pathname.includes("login.html")) {
            window.location.href = "index.html";
        }
    } else {
        if (!window.location.pathname.includes("login.html")) {
            window.location.href = "login.html";
        }
    }
});

// for logout 
const logout = document.getElementById("logout-btn");
logout.addEventListener("click", async () => {
    await signOut(auth);
    window.location.href = "login.html";
});



