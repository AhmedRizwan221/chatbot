import {auth, db} from "../firebaseconfig";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js"
import {collection, addDoc} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// DOM element selection
const btn = document.querySelector('#submit-btn');

// add event listener on that btn
btn.addEventListener('click', async function () {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    try {
        // sign up for new user 
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(" User Sign up ", userCredential);

        // add users email in firebase 
        await addDoc(collection(db, "users"), {
            email: email,
            createdAt: new Date()
        });

        window.location.href = "index.html";

    } catch (err) {
        console.error(err.message);
    }
});
