import { useState } from "react";
import BookEdit from './BookEdit'
const BookShow = ({ book, onDelete,onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
      setShowEdit(!showEdit)
  }

  const handleSubmit = (id, title) => {
    onEdit(id, title)
    setShowEdit(false)
  }

  let content = <h3>{book.title}</h3>

  if(showEdit) {
    content = <BookEdit setShowEdit={setShowEdit} onSubmit={handleSubmit}book={book} />
  }
  return (
    <div className="book-show">
      <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`} />
      {content}
      <div className="actions">
        <button className="edit"  onClick={handleEditClick}>Edit</button>
        <button className="delete" onClick={() => onDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
