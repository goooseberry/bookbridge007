import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { 
  getAuth, signOut, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { 
  getFirestore, collection, getDocs, addDoc, query, where 
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

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
const db = getFirestore(app);

const logoutBtn = document.getElementById("logout");
const bookList = document.getElementById("bookList");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookType = document.getElementById("bookType");
const addBookBtn = document.getElementById("addBook");

// Check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

// Logout
logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

// Fetch Books
const fetchBooks = async () => {
  bookList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "books"));
  querySnapshot.forEach((doc) => {
    let li = document.createElement("li");
    li.textContent = `${doc.data().title} by ${doc.data().author} (${doc.data().type})`;
    bookList.appendChild(li);
  });
};

// Add Book
addBookBtn.addEventListener("click", async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("You need to log in first!");
    return;
  }

  if (bookTitle.value.trim() && bookAuthor.value.trim()) {
    await addDoc(collection(db, "books"), {
      title: bookTitle.value,
      author: bookAuthor.value,
      type: bookType.value,
      owner: user.email
    });
    bookTitle.value = "";
    bookAuthor.value = "";
    fetchBooks();
  }
});

// Search Books
document.getElementById("searchBtn").addEventListener("click", async () => {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  bookList.innerHTML = "";

  const q = query(collection(db, "books"), where("title", ">=", searchQuery));
  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach((doc) => {
    let li = document.createElement("li");
    li.textContent = `${doc.data().title} by ${doc.data().author}`;
    bookList.appendChild(li);
  });
});

fetchBooks();
