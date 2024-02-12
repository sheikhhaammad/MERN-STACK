// book object
function Book(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = false; 
  }
  // Library Array
  let library = [];
  // function to add books
  function addBook() {
    let id = document.getElementById("book-id").value;
    let title = document.getElementById("book-title").value;
    let author = document.getElementById("author-name").value;
  
    if (id && title && author) {
      let newBook = new Book(id, title, author);
      library.push(newBook);
      displayBooks();
      clearInputs();
    } else {
      alert("Please fill in all fields.");
    }
  }
  // function to display the books
  function displayBooks() {
    let bookList = document.getElementById("book-list-ul");
    bookList.innerHTML = "";
  
    library.forEach(book => {
      let li = document.createElement("li");
      li.textContent = `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}`;
      
      let button = document.createElement("button");
      button.textContent = book.isBorrowed ? "Return" : "Borrow";
      button.onclick = function() {
        toggleBorrowStatus(book);
        displayBooks();
      };
  
      li.appendChild(button);
      bookList.appendChild(li);
    });
  }
  
  function toggleBorrowStatus(book) {
    book.isBorrowed = !book.isBorrowed;
  }
  // searching function
  
  function searchBook() {
    let searchInput = document.getElementById("search-input").value.toLowerCase();
    let foundBooks = library.filter(book => book.title.toLowerCase().includes(searchInput));
  
    if (foundBooks.length > 0) {
      alert(`Found ${foundBooks.length} book(s) matching the search.`);
    } else {
      alert("No books found matching the search.");
    }
  }
  // clear input function
  function clearInputs() {
    document.getElementById("book-id").value = "";
    document.getElementById("book-title").value = "";
    document.getElementById("author-name").value = "";
  }
  // dummy books
  addBook(1, "The Great Gatsby", "F. Scott Fitzgerald");
  addBook(2, "To Kill a Mockingbird", "Harper Lee");
  addBook(3, "1984", "George Orwell");

  
  displayBooks();

  