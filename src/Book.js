const Book = (props) => {
  const { imgLink, title, author, number } = props

  return (
    <article className="single-book">
      <img src={imgLink} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <span className="book-number">#{number + 1}</span>
    </article>
  )
}

export default Book
