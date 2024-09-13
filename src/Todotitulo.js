import './Todotitulo.css';

function Todotitulo({total, completed}) {
    return (
      <h1 className='titulo'>
        Has completado <span> {completed} </span> de <span>{total}</span> TODOS
      </h1>
    );
  }

  export {Todotitulo}