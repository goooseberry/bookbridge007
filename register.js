// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// submit button 
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();
  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // sign up
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...")
      // ...
      window.location.href = "home.html";
    }) 
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Error")
      // ..
    });

})
