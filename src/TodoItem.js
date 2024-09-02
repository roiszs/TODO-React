import './Todoitem.css'


function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <span className='Icon Icon-check Icon-check--active'>

          ✅ 
          {props.completed}

        </span>


        <p className='TodoItem-p TodoItem-p--complete'>
          {props.text}
          </p> 


        <span className='Icon Icon-delete'>
          ❌
          </span>
      </li>
    );
  }
  

  export {TodoItem}