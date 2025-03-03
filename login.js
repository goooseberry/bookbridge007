import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD6LJHW63vlK6vNQOFt_-QGn8jWIvzCRWg",
  authDomain: "book--bridge.firebaseapp.com",
  projectId: "book--bridge",
  storageBucket: "book--bridge.appspot.com",
  messagingSenderId: "52786369950",
  appId: "1:52786369950:web:19cb39b9db1ac82af7b28f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is already logged in
onAuthStateChanged(auth, (user) => {
  if (user && user.emailVerified) {
    window.location.href = "home.html";
  }
});

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified) {
        window.location.href = "home.html";
      } else {
        alert("Please verify your email before logging in. Check your inbox for the verification email.");
        document.getElementById('resendVerification').style.display = 'block';
        document.getElementById('signupPrompt').style.display = 'none';
        // auth.signOut(); // Optional: Comment out for testing
      }
    })
    .catch((error) => {
      alert("Error: " + error.message);
    });
});

const resendVerificationLink = document.getElementById('resendVerificationLink');
resendVerificationLink.addEventListener("click", function (event) {
  event.preventDefault();

  const user = auth.currentUser;
  console.log("Current user:", user);

  if (user) {
    sendEmailVerification(user)
      .then(() => {
        alert("Verification email has been resent. Please check your inbox.");
      })
      .catch((error) => {
        console.error("Error resending verification email:", error);
        alert("Error resending verification email. Error code: " + error.code + ", Message: " + error.message);
      });
  } else {
    alert("No user is currently signed in.");
  }
});

// Forgot Password Feature
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
forgotPasswordLink.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  } else {
    alert("Please enter your email address to reset your password.");
  }
});