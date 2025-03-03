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
