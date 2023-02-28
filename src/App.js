import axios from 'axios';
import {useState, useEffect} from 'react'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios.get('http://localhost:3001/books').then((res) => {
       setBooks(res.data)
    })
  }

  useEffect(() => {
    fetchBooks()
  }, [])


  const createBook = (title) => {
     axios.post('http://localhost:3001/books', {
      title
    }).then((res) => {
         const updatedBooks = [
      ...books,
      res.data,
    ];
    setBooks(updatedBooks);
    })
  };

  const deleteBookById = (id) => {

    axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks = books.filter((book) => {
      return book.id !== id
    })
    setBooks(updatedBooks)
  };

  const editBookById = (id,title) => {
    axios.put(`http://localhost:3001/books/${id}`, {
      title: title
    }).then((res) => {
      const updatedBooks = books.map((book) => {
        if(book.id === id) {
          return {...book, ...res.data}
        } else {
          return book
        }
      })
      setBooks(updatedBooks)
    })

  }

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
