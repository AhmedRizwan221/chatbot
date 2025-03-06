import {auth} from "./firebaseconfig.js";
import {onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";


const auth = getAuth();

// Check if the user is logged in
export const isUserLoggedIn = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => resolve(!!user));
  });
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};





