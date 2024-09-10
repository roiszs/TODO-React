import React, { useState } from 'react';
import './TodoSearch.css'

function TodoSearch() {

  const [searchValue, setSearchValue] = React.useState('');


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