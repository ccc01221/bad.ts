type Book = {
    title: string;
    author: string;
    pageCount: number;
}

const books : Book[] = [
    {
        title: 'How To Be Awesome',
        author: 'Louis',
        pageCount: 69
    },
    {
        title: 'For Loops Are Bad',
        author: 'Louis',
        pageCount: 12
    }
];

/* 
the following code is bad.
what should I have written instead?
*/

let booksWithLessThan50Pages : Book[] = [];

for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book.pageCount < 50) {
        booksWithLessThan50Pages.push(book);
    }
}
