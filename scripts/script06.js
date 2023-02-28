const books = [
    {
        id: 1,
        category: "Terror",
        title: "It",
    },
    {
        id: 2,
        category: "Terror",
        title: "O Exorcista",
    },
    {
        id: 3,
        category: "Terror",
        title: "Drácula",
    },
    {
        id: 4,
        category: "Romance",
        title: "O Morro dos Ventos Uivantes",
    },
    {
        id: 5,
        category: "Policial",
        title: "O Silêncio dos Inocentes",
    },
    {
        id: 6,
        category: "Suspense",
        title: "Boneco de Neve",
    },
    {
        id: 7,
        category: "Suspense",
        title: "Bird Box",
    },
    {
        id: 8,
        category: "Romance",
        title: "Orgulho e Preconceito",
    },
];

const booksTitle = books.map((book) => {
    return book.title;
});

const wantedCategory = "Terror";
const categoryBook = books.filter((book) => {
    if (book.category == wantedCategory) {
        return book;
    }
});

function displayBooksTitle(book) {
    console.log(`${book}, `);
}

function displayCategoryBooks(book) {
    console.log(`${book.title}, `);
}

console.log("\nO catálogo de livros da biblioteca é composto por:");
booksTitle.forEach(displayBooksTitle);

console.log(
    `\nOs livros da categoria de ${wantedCategory} da biblioteca, são: \n`
);
categoryBook.forEach(displayCategoryBooks);
