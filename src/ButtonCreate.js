import './Button.css';

function ButtonCreate() {
    return (
      <button className="Boton" 
      onClick={(event) => {
      console.log('Le diste click')
      console.log(event)
      console.log(event.target)
      }
      }>
        +
      </button>
    );
  }

  export {ButtonCreate}