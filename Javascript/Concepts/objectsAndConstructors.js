function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function () {
        console.log(name);
    };
}

const playerOne = new Player('Arjun', 'A');
// console.log(playerOne.name);

playerOne.sayName();

//Book exercise
console.log('-------------------------------------------');

const Book = function (title, author, numberOfPages) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.showDetails = function () {
        console.log(
            `title: ${title}, Author: ${author}, No.of.Pages: ${numberOfPages}`
        );
    };
};

const book1 = new Book('The Almanack of Naval Ravikant', 'Eric Johnson', 256);
book1.showDetails();
const book2 = new Book('Meditations', 'Marcus Arelius', 300);
book2.showDetails();
console.log(book2.author);

// Prototype demonstration

Book.prototype.publishedNumber = function () {};

// object.create()

const Book = {
    //     this.title = title;
    //     this.author = author;
    show: function () {
        console.log(`Author: ${this.author}`);
    },
};

const book3 = Object.create(Book);
book3.author = 'Eric Johnsonasds';

book3.show();
