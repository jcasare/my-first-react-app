import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className="single-book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51RljWNfhWL._SY346_.jpg"
    alt="A secret in the keys"
  />
)
const Author = () => <h4>Hope Holloway</h4>
const Title = () => <h2>A secret in the keys</h2>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
