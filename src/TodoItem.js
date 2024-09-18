import {CompleteIcon} from './CompleteIcon.js'
import {DeleteIcon} from './DeleteIcon.js'
import './Todoitem.css'


function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <CompleteIcon />


        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
          {props.text}
          </p> 


        <DeleteIcon/>
      </li>
    );
  }
  

  export {TodoItem}