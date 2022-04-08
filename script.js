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
function createCard() {
  let newDiv = document.createElement("div");
  newDiv.classList.add("card-book");
  newDiv.innerText = "test";

  cardContainer.appendChild(newDiv);
}
