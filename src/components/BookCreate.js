import { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleCreate = (event) => {
    event.preventDefault();
    onCreate(title)
    setTitle('')
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleCreate}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button" >Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
