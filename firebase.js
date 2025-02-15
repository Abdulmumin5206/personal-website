// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your Firebase configuration (replace with your actual Firebase details)
const firebaseConfig = {
    apiKey: "AIzaSyCCDXgKPW1qSGurW7puAqkTD7pKECprHM4",
    authDomain: "abdulmumin-blog-3b139.firebaseapp.com",
    projectId: "abdulmumin-blog-3b139",
    storageBucket: "abdulmumin-blog-3b139.firebasestorage.app",
    messagingSenderId: "947327456398",
    appId: "1:947327456398:web:6eb25d8cd40eaa1a7965df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export database
export { db };
