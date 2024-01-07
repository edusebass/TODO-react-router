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
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../routes/home/HomePage'

function App() {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/new' element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
