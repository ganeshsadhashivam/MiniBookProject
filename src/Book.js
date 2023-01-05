import React from "react";

const Book = ({ books }) => {
  return (
    <>
      {books.map((books) => {
        const { id, title, image, author, price } = books;
        return (
          <article key={id} className="book">
            <img src={image} alt={title} className="photo" />
            <h2>{title}</h2>
            <h4 className="price">₹{price}</h4>
          </article>
        );
      })}
    </>
  );
};

export default Book;
