import { Todotitulo } from './Todotitulo';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { ButtonCreate } from './ButtonCreate';
import { TodoItem } from './TodoItem';
import React from 'react';


const defaultTodos = [
  {text: 'Cortar cabello', completed: false},
  {text: 'Terminar los cursos', completed: false},
  {text: 'Sacar RFC', completed: true},
  {text: 'VENDR CAMIONETA', completed: false},
];

function App() {


  const [todos, setTodos] = React.useState(defaultTodos);
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

  console.log('Los usuarios escribieron lo siguiente: ' + searchValue);

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
            /> 
        
          ))}
      </TodoList>

      <ButtonCreate />
      </>
  );
}



export default App;
