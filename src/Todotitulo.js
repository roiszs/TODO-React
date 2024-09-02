import './Todotitulo.css';

function Todotitulo({total, completed}) {
    return (
      <h1 className='titulo'>
        Has completado <span> {total} </span> de <span>{completed}</span> TODOS
      </h1>
    );
  }

  export {Todotitulo}