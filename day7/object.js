
//object
 
let BookDetail = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    pages: 272,
    read: false,
    getBookDetail: function(){
     console.log(`title: ${this.title}`);
     console.log(`Author: ${this.author}`);
    }

}

// console.log(BookDetail);
// console.log(BookDetail.author);
// console.log(BookDetail.title);

const getbookdetail = function(BookDetail) {
    console.log(`title: ${BookDetail.title}`);
    console.log(`Author: ${BookDetail.author}`);
 }

 const updateBookDetail = function(BookDetail ,year){
    BookDetail.publicationYear = year;
    console.log(BookDetail);
 }


getbookdetail(BookDetail);

updateBookDetail(BookDetail , 2018);


const library = {
    name: "City Library",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
      },
      {
        title: "1984",
        author: "George Orwell"
      }
    ]
  };

console.log(library);
console.log(library.name);
// Access all book titles
const bookTitles = library.books.map(book => book.title);

// Log the array of book titles
console.log(bookTitles);

BookDetail.getBookDetail();

for (const key in BookDetail) {
    console.log(`${key}: ${BookDetail[key]}`);
}

let key = Object.keys(BookDetail)
let value = Object.values(BookDetail)

console.log(key);
console.log(value);


