// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6LJHW63vlK6vNQOFt_-QGn8jWIvzCRWg",
  authDomain: "book--bridge.firebaseapp.com",
  projectId: "book--bridge",
  storageBucket: "book--bridge.firebasestorage.app",
  messagingSenderId: "52786369950",
  appId: "1:52786369950:web:19cb39b9db1ac82af7b28f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Sign up
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      // Send verification email
      sendEmailVerification(user)
        .then(() => {
          alert("A verification email has been sent to your email address. Please verify your email to log in.");
          window.location.href = "login.html"; // Redirect to login page
        })
        .catch((error) => {
          console.error("Error sending verification email:", error);
          alert("Error sending verification email. Please try again.");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
});