document.addEventListener("DOMContentLoaded", () => {
    const books = [
        {
            title: "The Pit of Darkness",
            description: "Seventeen-year-old Oliver Cadwell is on the most dangerous quest of his life. With the help of his best friends, a son of Athena and a daughter of Aphrodite, Oliver must journey across the United States to save the world. Along the way, he must face a host.",
            cover: "https://github.com/DemonKingSwarn/book/raw/master/images/banner.webp",
            link: "/the-pit-of-darkness"
        },
        // Add more books here
    ];

    const bookList = document.getElementById("book-list");
    books.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");

        const bookLink = document.createElement("a");
        bookLink.href = book.link;
        bookLink.classList.add("book-button");
        bookLink.textContent = "Read More";

        const bookCover = document.createElement("img");
        bookCover.src = book.cover;
        bookCover.alt = `Cover of ${book.title}`;

        const bookTitle = document.createElement("h3");
        bookTitle.textContent = book.title;

        const bookDescription = document.createElement("p");
        bookDescription.textContent = book.description;

        bookItem.appendChild(bookCover);
        bookItem.appendChild(bookTitle);
        bookItem.appendChild(bookDescription);

        bookItem.appendChild(bookLink);
        bookList.appendChild(bookItem);
    });
});
