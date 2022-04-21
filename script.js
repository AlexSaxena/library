console.log("Greeting, General Kenobi!");

/* 
Psudo
    A Simple library Application (Book Saving)

    Goal :  In this App you should be able to view and fill in books that you have
            either read or not yet read.
            To do this there should be a *Form to fill in about Book details
            A button to display this form
            A "Card" div representing every added book
            This Card - Should show all data about book
                        Should be able to delete book
                        Should be able to change Read Status
    
    Code : Using HTML & CSS
           Structure the page in minimum 2 parts
           Header Section & Content / Card Section

           JS - Using Objects
           Book Object and Constructor for creating a Book
           All books will be stored in an Array
           Will need a Function to add book to array

           Will need a function that loops through Array and displays books in cards
           Will need Button(OnClick) to show Add book Form
           Will need Button on Card that changes Read Status
           Will need Button on Card to remove said Book/Card (Need to associate with correct card <-> Book)
                      
*/

let btnFormAddBook = document.querySelector(".add-book-btn");
let cardContainer = document.querySelector(".container-cards");
let btnAddBook = document.getElementById("btn-add-book");
let btnCloseForm = document.getElementById("btn-close-form");

// Library Array
let myLibrary = [];

// Book Constructor
function Book(Author, Title, Pages, isRead) {
  this.Author = Author;
  this.Title = Title;
  this.Pages = Pages;
  if (isRead == "true") {
    this.isRead = "Already Read";
  } else {
    this.isRead = "Not Read Yet";
  }
  this.info = () => {
    return `Author: ${Author} Title: ${Title} Nr of Pages: ${Pages} Status: ${this.isRead}!`;
  };
}

// Function for adding Book to Library Array
function addBook(Author, Title, Pages, isRead = "true") {
  const newBook = new Book(Author, Title, Pages, isRead);
  // console.log("addBook func ->" + isRead);
  //createCard(newBook.Author, newBook.Title, newBook.Pages, newBook.isRead); // Wrong place
  myLibrary.push(newBook);
  showBooks();
}

function showBooks() {
  clearBookContainer();

  myLibrary.forEach((book) => {
    //Function call to build Card
    createCard(book.Author, book.Title, book.Pages, book.isRead);
  });
}

function clearBookContainer() {
  let bookContainer = document.querySelector(".container-cards");
  while (bookContainer.firstChild) {
    bookContainer.removeChild(bookContainer.firstChild);
  }
}

function openForm() {
  document.getElementById("newBookForm").style.display = "block";
}
function closeForm() {
  document.getElementById("newBookForm").style.display = "none";
  clearForm();
}
function clearForm() {
  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("pages").value = 0;
  document.querySelector('input[name="status"]:checked').checked = false;
}

btnAddBook.addEventListener("click", openForm);
btnCloseForm.addEventListener("click", closeForm);

btnFormAddBook.addEventListener("click", () => {
  let formAuthor = document.getElementById("author").value;
  let formTitle = document.getElementById("title").value;
  let formPages = document.getElementById("pages").value;
  let formStatus = document.querySelector('input[name="status"]:checked').value;

  addBook(formAuthor, formTitle, formPages, formStatus);
  clearForm();
});

// Function for generating a book Card
// Adds book object as param. book.author etc
function createCard(Author, Title, Pages, isRead) {
  let cardDiv = document.createElement("div");
  let cardDivUpper = document.createElement("div");
  let cardDivLower = document.createElement("div");

  cardDiv.classList.add("card-book");
  cardDivUpper.classList.add("card-inner-top");
  cardDivLower.classList.add("card-inner-bottom");

  let authorSpan = document.createElement("span");
  authorSpan.textContent = `Author: ${Author}`;

  let titleSpan = document.createElement("span");
  titleSpan.textContent = `Title: ${Title}`;

  let pagesSpan = document.createElement("span");
  pagesSpan.textContent = `Pages: ${Pages}`;

  let isReadSpan = document.createElement("span");
  isReadSpan.textContent = `Status: ${isRead}`;

  let toggleSpan = document.createElement("span");
  toggleSpan.textContent = "Toggle Soon";

  cardDivUpper.append(authorSpan, titleSpan, pagesSpan, isReadSpan);
  cardDivLower.append(toggleSpan);
  cardDiv.append(cardDivUpper, cardDivLower);
  cardContainer.appendChild(cardDiv);
}
