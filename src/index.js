import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import { bookCollection } from './books'
import Book from './Book'

const BookList = () => {
  const getBook = (id) => {
    const book = bookCollection.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <>
      <h1 className="page-title">Amaazon Best Selling Books</h1>
      <section className="booklist">
        {bookCollection.map((book, index) => {
          const { id } = book
          return (
            <Book
              {...book}
              key={id}
              displayBook={() => {
                getBook(id)
              }}
              number={index}
            />
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
