import React from 'react';
import {TodoIcon} from './Todo.Icon';

function DeleteIcon ({ onDelete }) {
    return (
        <TodoIcon type='delete' color='gray' onClick={onDelete}/>
    );
}

export { DeleteIcon };