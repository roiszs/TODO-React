import React, { useState } from 'react';
import './TodoSearch.css'

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuarios escribieron lo siguiente: ' + searchValue);


    return (
     <input className="todo-search
     "placeholder="Cortar Cabello"
      value={searchValue}
     onChange={(event) => {
      setSearchValue(event.target.value)
     }}/>
    );
  }

  export {TodoSearch}