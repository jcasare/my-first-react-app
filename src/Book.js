const Book = (props) => {
  const { imgLink, title, author, displayBook } = props

  return (
    <article className="single-book">
      <img src={imgLink} alt={title} />
      <h2>{title}</h2>
      <button onClick={displayBook}>Click me</button>
      <h4>{author}</h4>
    </article>
  )
}

export default Book
