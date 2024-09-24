import { Todotitulo } from './Todotitulo';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { ButtonCreate } from './ButtonCreate';
import { TodoItem } from './TodoItem';
import React from 'react';




function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;


  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');


  //Estado para el titulo de la parte de arriba, cuantos completados
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  //Estado para el filtro que utilizamos en el search
  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchValue);
  });

  //Logica para marcar como completado el TODO.

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  };


 const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos (newTodos);
 }

 //Logica para eliminar un TODO.
 const deleteTodo = (text) => {
  const newTodos = [...todos];
  const todoIndex = newTodos.findIndex(
    (todo) => todo.text == text
  );
  newTodos.splice(todoIndex, 1);
  saveTodos (newTodos);
}

  return (
    <>

      <Todotitulo completed={completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      
      />

      <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.text}  // a cada valor le debemos dar una llave diferente, en este caso es el texto como tal ya que es diferente en cada item
            text = {todo.text} //le decimos que el text en item va a ser igual a todo.text del array
            completed={todo.completed} // le damos el valor dentro del nuevo array sí está completado o no
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            /> 
        
          ))}
      </TodoList>

      <ButtonCreate />
      </>
  );
}



export default App;
