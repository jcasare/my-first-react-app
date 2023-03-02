import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

const bookCollection = [
  {
    title: "The Courage to Be Free: Florida's Blueprint for America's Revival",
    imgLink:
      'https://m.media-amazon.com/images/I/41Pw77onK7L._SX329_BO1,204,203,200_.jpg',
    author: 'Ron DeSantis',
    id: 1,
  },
  {
    title: 'Never Give an Inch: Fighting for the America I Love',
    imgLink:
      'https://m.media-amazon.com/images/I/41OxPE1ZMbL._SX329_BO1,204,203,200_.jpg',
    author: 'Mike Pompeo',
    id: 2,
  },
  {
    title: 'Start, Stay, or Leave: The Art of Decision Making',
    imgLink:
      'https://m.media-amazon.com/images/I/41qGiu+6bpL._SX331_BO1,204,203,200_.jpg',
    author: 'Trey Gowdy',
    id: 3,
  },
  {
    title:
      'Unified: How Our Unlikely Friendship Gives Us Hope for a Divided Country',
    imgLink:
      'https://m.media-amazon.com/images/I/41EiN-1Bb9L._SX331_BO1,204,203,200_.jpg',
    author: 'Tim Scott',
    id: 4,
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {bookCollection.map((book) => {
        const { id } = book
        return <Book {...book} key={id} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { imgLink, title, author } = props
  return (
    <article className="single-book">
      <img src={imgLink} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
