// GSAP Animations (Only for header and heading)
gsap.from("header", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from("h2", { duration: 1, x: -100, opacity: 0, delay: 0.5 });

// Dropdown Menu Functionality
const profileDropdown = document.getElementById('profile-dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');
let hideTimeout;

if (profileDropdown && dropdownMenu) {
  profileDropdown.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    dropdownMenu.style.display = 'block';
  });

  profileDropdown.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      dropdownMenu.style.display = 'none';
    }, 300);
  });

  dropdownMenu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
      dropdownMenu.style.display = 'none';
    }, 300);
  });
}

// Search Functionality
const searchInput = document.getElementById('search');
const exploreButton = document.getElementById('explore-btn');

if (searchInput && exploreButton) {
  exploreButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`); // Replace with actual search logic
    } else {
      alert('Please enter a search term.');
    }
  });
}

// Book List Loading
const bookList = document.getElementById('book-list');
const books = [
  { title: "Book 1", author: "Author 1", image: "https://via.placeholder.com/150" },
  { title: "Book 2", author: "Author 2", image: "https://via.placeholder.com/150" },
  { title: "Book 3", author: "Author 3", image: "https://via.placeholder.com/150" },
];

books.forEach(book => {
  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';
  bookCard.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>${book.author}</p>
  `;
  bookList.appendChild(bookCard);
});