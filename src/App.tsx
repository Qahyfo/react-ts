
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage';
import TodosPage from './components/TodosPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

function App() {



  return (
    <div>
      
      <BrowserRouter>
      <NavLink to="/users">Пользователи</NavLink>
      <NavLink to="/todos">Список дел</NavLink>
      <Routes>
        <Route path='/users'  element={<UserPage />}/>
        <Route path='/todos' element={<TodosPage />}/>
        <Route path='/users/:id' element={<UserItemPage />}/>
        <Route path='/todos/:id' element={<TodoItemPage />}/>
      </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
