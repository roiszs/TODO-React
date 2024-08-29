import { Todotitulo } from './Todotitulo';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { ButtonCreate } from './ButtonCreate';
import { TodoItem } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">

      <Todotitulo />
      <TodoSearch />

      <TodoList>
          <TodoItem />
          <TodoItem />
          <TodoItem />
      </TodoList>

      <ButtonCreate />
    </div>
  );
}



export default App;
