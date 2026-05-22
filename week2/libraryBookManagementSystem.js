// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:
class Book{
    title;
    author;
    pages;
    isAvailable=true;

    constructor(title,author,pages){
        this.author=author
        this.title=title
        this.pages=pages
    }
//   Methods:
//borrow() - Marks the book as not available
borrow(){
    if(this.isAvailable){
        this.isAvailable=false
        return 'Book borrowed'
    }
    return 'Book not available'
}
//returnBook() - Marks the book as available
returnBook(){
    if(!this.isAvailable){
        this.isAvailable=true
        return "book returned"
    }
}
//getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
getInfo(){
    console.log(`${this.title} by ${this.author} (${this.pages} pages)`)
}
//isLongBook() - Returns true if pages > 300, false otherwise
isLongBook(){
    if(this.pages>300){
        return true
    }
    return false
}
}



//1. Create at least 5 book objects using the class:
//Example: "Harry Potter", "1984", "The Hobbit", etc.
b1=new Book('Harry Potter','don',369)
b2=new Book('The hobby','james',1334)
b3=new Book('xyz','zyx',62)
//2. Perform the following operations:

//i. Display info of all books
console.log(b1)
console.log(b2)
console.log(b3)

//ii. Borrow 2 books and show their availability status
console.log(b2.borrow())
console.log(b2.borrow())

//b1.

//iii. Return 1 book and show updated status
console.log(b2.returnBook())