import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBorPxjKK-CX3pWZsvuFgyJ4TQyqDyqq84",
    authDomain: "chatbot-a6790.firebaseapp.com",
    projectId: "chatbot-a6790",
    storageBucket: "chatbot-a6790.firebasestorage.app",
    messagingSenderId: "775020800913",
    appId: "1:775020800913:web:c65ba873c8963ede95c830",
    measurementId: "G-5R06MRYLY0"
};

// initialize firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// export data
export {app, auth, db};