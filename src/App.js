import { Todotitulo } from './Todotitulo';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { ButtonCreate } from './ButtonCreate';
import { TodoItem } from './TodoItem';
import React from 'react';


function useLocalStorage(itemName, initialValue) {
    


    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;


  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {



  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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
