import React from "react";

import { createRoot } from "react-dom/client";
//css
import "./index.css";
//bookList
import books from "./data";

import Book from "./Book";

//stateless function component always return JSX
function BookList() {
  return (
    <section className="booklist">
      <Book books={books} />
    </section>
  );
}

// const Book = () => {
//   return (
//     <article className="book">
//       <Image books={books} />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = (books) => {
//   <img src="https://m.media-amazon.com/images/I/41ENWT6nb3L.jpg" alt="Emdedded systems" />;
// };

// const Title = () => <h1>Embedded systems</h1>;

// const Author = () => <h4>Raj Kamal</h4>;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
