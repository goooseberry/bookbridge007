
  // Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyD6LJHW63vlK6vNQOFt_-QGn8jWIvzCRWg",
  authDomain: "book--bridge.firebaseapp.com",
  projectId: "book--bridge",
  storageBucket: "book--bridge.firebasestorage.app",
  messagingSenderId: "52786369950",
  appId: "1:52786369950:web:19cb39b9db1ac82af7b28f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Check if user is logged in
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is logged in, redirect to home page if not already there
    if (window.location.pathname !== "/home.html") {
      window.location.href = "home.html";
    }
  } else {
    // User is not logged in, redirect to login page if not already there
    if (window.location.pathname !== "/login.html" && window.location.pathname !== "/register.html") {
      window.location.href = "login.html";
    }
  }
});
