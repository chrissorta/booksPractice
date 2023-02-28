import {useState} from 'react'

const BookEdit = ({book, onSubmit, setShowEdit}) => {
  const [title, setTitle] = useState(book.title || '')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(book.id, title)

  }

  return (
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button">Save</button>
      </form>
  );
};

export default BookEdit;
