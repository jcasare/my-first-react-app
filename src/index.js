import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        imgLink={collections.imgLinks[0]}
        author={collections.authors[0]}
        title={collections.titles[0]}
      />
      <Book
        imgLink={collections.imgLinks[1]}
        author={collections.authors[1]}
        title={collections.titles[1]}
      />
      <Book
        imgLink={collections.imgLinks[2]}
        author={collections.authors[2]}
        title={collections.titles[2]}
      />
      <Book
        imgLink={collections.imgLinks[3]}
        author={collections.authors[3]}
        title={collections.titles[3]}
      />
    </section>
  )
}
const collections = {
  titles: [
    "The Courage to Be Free: Florida's Blueprint for America's Revival",
    'Never Give an Inch: Fighting for the America I Love',
    'Start, Stay, or Leave: The Art of Decision Making',
    'Unified: How Our Unlikely Friendship Gives Us Hope for a Divided Country',
  ],
  authors: ['Ron DeSantis', 'Mike Pompeo', 'Trey Gowdy', 'Tim Scott'],

  imgLinks: [
    'https://m.media-amazon.com/images/I/41Pw77onK7L._SX329_BO1,204,203,200_.jpg',
    'https://m.media-amazon.com/images/I/41OxPE1ZMbL._SX329_BO1,204,203,200_.jpg',
    'https://m.media-amazon.com/images/I/41qGiu+6bpL._SX331_BO1,204,203,200_.jpg',
    'https://m.media-amazon.com/images/I/41EiN-1Bb9L._SX331_BO1,204,203,200_.jpg',
  ],
}
const Book = (props) => {
  console.log(props)
  return (
    <article className="single-book">
      <img src={props.imgLink} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
