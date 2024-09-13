import React, { useState } from 'react';
import './TodoSearch.css'

function TodoSearch({
  searchValue,
  setSearchValue
}) {


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