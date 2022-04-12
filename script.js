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

let btnAddbook = document.getElementById("btn-add-book");
let cardContainer = document.querySelector(".container-cards");

// Library Array
let myLibrary = [];

// Book Constructor
function Book(Author, Title, Pages, isRead) {
  this.Author = Author;
  this.Title = Title;
  this.Pages = Pages;
  //this.isRead =
  if (isRead == true) {
    this.isRead = "Already Read";
  } else {
    this.isRead = "Not Read Yet";
  }
  this.info = () => {
    return `Author: ${Author} Title: ${Title} Nr of Pages: ${Pages} Status: ${this.isRead}!`;
  };
}

// Function for adding Book to Library Array
function addBook(Author, Title, Pages, isRead = false) {
  const newBook = new Book(Author, Title, Pages, isRead);
  createCard(newBook.Author, newBook.Title, newBook.Pages, newBook.isRead); // Wrong place
  myLibrary.push(newBook);
}

function showBooks() {
  myLibrary.forEach((book) => {
    //Function call to build Card
    //createCard(book);
  });
}

// Function for generating a book Card
// Adds book object as param. book.author etc
function createCard(Author, Title, Pages, isRead) {
  let cardDiv = document.createElement("div");
  let cardDivUpper = document.createElement("div");
  let cardDivLower = document.createElement("div");
  //let span = document.createElement("span");

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

  // let newTextNode = document.createTextNode();

  // let spanAuthor = (span.innerHTML = `Author: ${Author}`);
  // let spanTitle = (span.innerHTML = `Title: ${Title}`);
  // let spanPages = (span.innerHTML = `Pages: ${Pages}`);
  // let spanIsRead = (span.innerHTML = `Read: ${isRead}`);

  // let nodeAuthor = document.createTextNode(`Author: ${Author}`);
  // let spanAuthor = span;
  // spanAuthor.appendChild(nodeAuthor);

  // let nodeTitle = document.createTextNode(`Title: ${Title}`);
  // let spanTitle = span;
  // spanTitle.appendChild(nodeTitle);

  // let nodePages = document.createTextNode(`Pages: ${Pages}`);
  // let spanPages = span;
  // spanPages.appendChild(nodePages);

  // let nodeIsRead = document.createTextNode(`Read: ${isRead}`);
  // let spanIsRead = span;
  // spanIsRead.appendChild(nodeIsRead);

  // let spanToggle = (span.textContent = "Toggle Soon");

  // let nodeToggle = document.createTextNode(`Toggle Soon`);
  // let spanToggle = span;
  // spanToggle.appendChild(nodeToggle);
  // Toggle button / or similar

  // cardDivUpper.appendChild(spanAuthor);
  // cardDivUpper.appendChild(spanTitle);
  // cardDivUpper.appendChild(spanPages);
  // cardDivUpper.appendChild(spanIsRead);
  // cardDiv.appendChild(cardDivUpper);

  // cardDivLower.appendChild(spanToggle);
  // cardDiv.appendChild(cardDivLower);
  cardDiv.append(cardDivUpper, cardDivLower);
  cardContainer.appendChild(cardDiv);
}

/*
  <div class="card-book">
    <div class="card-inner-top">
      <span>Title</span>
      <span>Author</span>
      <span>Pages</span>
      <span>Status</span>
    </div>
    <div class="card-inner-bottom">
      <span>Toggle-bar</span>
    </div>
  </div>
*/
