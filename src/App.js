import React, { useState } from "react";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const [nuevoColaborador, setNuevoColaborador] = useState('');
  const [emailColaborador, setEmailColaborador] = useState('');

  const [buscar, setBuscar] = useState(''); // estado para el buscador

  const enviarFormulario = (e) => {
    e.preventDefault() 
    //detiene ejecución de los eventos al usar submit, ya que debería enviar la info a un servidor, si esto no está no se verían los cambios
    console.log('enviando formulario');
    setColaboradores([...colaboradores, {nombre:nuevoColaborador, correo:emailColaborador}]); 
    //con [...colaboradores] se hace una copia de ese arreglo para agregarle el nuevo objeto con sus porpiedades
    
    setNuevoColaborador(''); 
    // limpia el input de nuevo colaborador
    
    setEmailColaborador(''); 
    // limpia el input del email del colaborador
  }

  const capturaInput = (e) => {
    setNuevoColaborador(e.target.value);
    console.log(nuevoColaborador);
  }
  
  const capturaInput2 = (e) => {
    setEmailColaborador(e.target.value);
    console.log(emailColaborador);
  }

  const filtrar = (e) => {
    setBuscar(e.target.value);
    console.log(buscar);
  }

  return (
    <div className="container">
      
      <header>
        <h2>Buscador de Colaboradores</h2>
        <input onChange={filtrar} value={buscar} className="form-control" type="text" placeholder="Busca un colaborador"/>
      </header>
      
      <main>
        <form onSubmit={enviarFormulario}>
          <div className="mb-3">
            <label className="form-label">Nombre del colaborador</label>
            <input onChange={capturaInput} value={nuevoColaborador} className="form-control" type="text" placeholder="Ingresa el nombre del colaborador"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Correo del colaborador</label>
            <input onChange={capturaInput2} value={emailColaborador} type="email" className="form-control" placeholder="Ingresa correo del colaborador"/>
          </div>
          <button type="submit" className="btn btn-primary">Agregar colaborador</button>
        </form>  
      </main>

      <div className="tablaListado">
        <h1>Listado de colaboradores</h1>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.filter((e) => {
              if(buscar == '') {
                return e;
              } else if (e.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
              ) {
                return e;
              }
              }).map( c => <tr key={c.nombre}><td>{c.nombre}</td><td>{c.correo}</td></tr> )}
          </tbody>
        </table>
        
      </div>

    </div>
  );
}

export default App;
