import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BookTable from './components/BookTable';
import DisplayBoard from './components/DisplayBoard';
import CreateBook from './components/CreateBook';
import { getAllBooks, createBook } from './services/BookService';
import Footer from './components/Footer';

import CreateTodo from './components/CreateTodo';
import DisplayTodos from './components/DisplayTodos';
import TodoTable from './components/TodoTable';
import { getAllTodos, createTodo } from './services/TodoService';

function App () {

  const [bookShelf, setBookShelf] = useState({});
  const [books, setBooks] = useState([]);
  const [numberOfBooks, setNumberBooks] = useState(0);

  const [todoShelf, setTodoShelf] = useState({});
  const [todos, setTodos] = useState([]);
  const [numberOfTodos, setNumberTodos] = useState(0);

  const bookHandleSubmit = () => {
      createBook(bookShelf)
        .then(() => {
          setNumberBooks(numberOfBooks+1);
      });
  }

  const todoHandleSubmit = () => {
    console.log(todoShelf)
    createTodo(todoShelf)
      .then(() => {
        setNumberTodos(numberOfTodos+1);
    });
  }

  const getAllBook = () => {
    getAllBooks()
      .then(data => {
        setBooks(data);
        setNumberBooks(data.length);
      });
  }

  const bookOnChangeForm = (e) => {
      let inputData = bookShelf;
      if (e.target.name === 'book') {
        bookShelf.book = e.target.value;
      } else if (e.target.name === 'category') {
        bookShelf.category = e.target.value;
      } else if (e.target.name === 'author') {
        bookShelf.author = e.target.value;
      }
      setBookShelf(inputData);
  }

  const getAllTodo = () => {
    getAllTodos()
      .then(data => {
        setTodos(data);
        setNumberTodos(data.length);
      });
  }

  const todoOnChangeForm = (e) => {
      let inputData = todoShelf;
      if (e.target.name === 'todo') {
        todoShelf.todo = e.target.value;
      } else if (e.target.name === 'category') {
        todoShelf.category = e.target.value;
      } else if (e.target.name === 'isComplete') {
        todoShelf.isComplete = e.target.checked;
      }
      setTodoShelf(inputData);
      console.log(todoShelf)
  }

  
  return (
    <div className="main-wrapper">
      <div className="main">
        <Header />
        <CreateBook 
          bookShelf={bookShelf}
          bookOnChangeForm={bookOnChangeForm}
          bookHandleSubmit={bookHandleSubmit}
        />
        <DisplayBoard 
          numberOfBooks={numberOfBooks} 
          getAllBook={getAllBook} 
        />
        <BookTable books={books} />
        <CreateTodo
          todoShelf={todoShelf}
          todoOnChangeForm={todoOnChangeForm}
          todoHandleSubmit={todoHandleSubmit}
        />
        <DisplayTodos 
          numberOfTodos={numberOfTodos} 
          getAllTodo={getAllTodo} 
        />
        <TodoTable todos={todos} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
