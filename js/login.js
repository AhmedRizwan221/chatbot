import { auth, db } from "../firebaseconfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { collection, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// DOM element selection
const btn = document.querySelector('#submit-btn');
// const error_messgae = document.querySelector('#err_message');

// const renderError = function(msg) {
//     error_messgae.textContent = msg;
// }


// add event listener on that btn
document.addEventListener("DOMContentLoaded", () => {
btn.addEventListener('click', async function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // error_messgae.textContent = "";

    // Password validation
    // if (password.length < 6) {
    //     renderError("Password must be at least 6 characters long.");
    //     return; // Stop execution but do NOT throw an error
    // }
    try {
        // sign up for new user 
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(" User Sign up ", userCredential);

        // create a user id 
        const userId = userCredential.user.uid;

        // store in loal storage 
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userId", userId);

        // add users email in firebase 
        await setDoc(doc(db, "users", userId), {
            name:name,
            email: email,
            createdAt: new Date()
        });

        window.location.href = "index.html";

    } catch (err) {
        console.error(err.message);
        alert(`${err.message}`);
        // renderError(err.message);
    }
});
});