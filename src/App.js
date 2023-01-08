import React, { useState } from "react";
import "./styles.css";

var Books = {
  Romantic: [
    {
      name: "Pride and Prejudice",
      rating: "4.5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885._SY75_.jpg"
    },
    {
      name: "The Love Hypothesis",
      rating: "4.7/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449._SX50_.jpg"
    },
    {
      name: "The Fault in Our Stars",
      rating: "4.5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660273739l/11870085._SX318_.jpg"
    },
    {
      name: "Beach Read",
      rating: "4.1/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1589881197l/52867387._SY475_.jpg"
    },
    {
      name: "It ends with us",
      rating: "5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1470427482l/27362503._SY475_.jpg"
    }
  ],

  Fiction: [
    {
      name: "Alchemist",
      rating: "5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1654371463l/18144590._SY475_.jpg"
    },
    {
      name: "The DaVinci Code",
      rating: "4.5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403744290l/6372.jpg"
    },
    {
      name: "To Kill a Mocking Bird",
      rating: "4.3/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg"
    },
    {
      name: "The Kite Runner",
      rating: "4.2/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579036753l/77203._SY475_.jpg"
    },
    {
      name: "The catcher in the rye",
      rating: "3.9/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg"
    }
  ],

  Classics: [
    {
      name: "Country Place",
      rating: "4.5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1660589357l/60838172._SX98_.jpg"
    },
    {
      name: "A Man called Ove",
      rating: "4.3/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405259930i/18774964._UX75_.jpg"
    },
    {
      name: "Wuthering Heights",
      rating: "4.5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388212715l/6185._SY475_.jpg"
    },
    {
      name: "The Hopkins Manuscript",
      rating: "4.5/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1671658934l/61273333._SX98_.jpg"
    },
    {
      name: "Harry Potter",
      rating: "4.8/5",
      img:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193._SX318_SY475_.jpg"
    }
  ]
};

var genres = Object.keys(Books);

export default function App() {
  const [categoryList, setCategoryList] = useState("Fiction");
  function genreClickHandler(item) {
    setCategoryList(item);
  }

  return (
    <div className="App">
      <h1>Book Shelf</h1>
      <h2>
        Check out the top trending books of all time. Select a genre from below.
      </h2>
      {genres.map(function (item) {
        return (
          <button
            className="btn"
            onClick={() => genreClickHandler(item)}
            key={item}
          >
            {item}
          </button>
        );
      })}

      <div>
        <div className="list-container">
          {Books[categoryList].map(function (listitem) {
            return (
              <ul className=" ">
                <li className=" listitems" key={listitem.name}>
                  <div>
                    <img src={listitem.img} alt="book cover" />
                  </div>
                  <div class="book-name">{listitem.name}</div>
                  <div class="book-rating">
                    Rating: <span>{listitem.rating}</span>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
