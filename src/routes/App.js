import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoForm } from '../components/TodoForm';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../components/Modal';
import { ChangeAlert } from '../components/ChangeAlert';
import HomePage from '../routes/home/HomePage'
import NewTodoPage from '../routes/new/NewTodoPage'
import { EditTodoPage } from './edit/EditTodoPage';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <HashRouter> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<NewTodoPage />} />
          <Route path='/edit' element={<EditTodoPage />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
