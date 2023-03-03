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
    <section className="booklist">
      {bookCollection.map((book) => {
        const { id } = book
        return (
          <Book
            {...book}
            key={id}
            displayBook={() => {
              getBook(id)
            }}
          />
        )
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
