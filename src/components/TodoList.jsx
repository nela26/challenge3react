const TodoList = ({searchData, setSearchData, list, setList}) => {

    const eliminarTodo = (id) => {
        setList((old) => old.filter(item => item.id !== id))
        setSearchData((old) => old.filter(item => item.id !== id)) // se agrega para eliminar si uno busco la info y actualiza la informacion que se tiene en el padre
    }

    return (
        <>
            <h2 className="text-center animate__animated animate__fadeInRight">Listado de colaboradores</h2>
            <ol className="list-group mt-4 list-group-numbered animate__animated animate__fadeInRight">
                {/* condicion ternaria, se usa como filtro searchData (busqueda del header) si es mas de 1 se muestra toda la info */}
                { searchData.length > 1
                   ? list.map((item) => (
                        <li className="list-group-item d-flex justify-content-between align-items-start my-3 mx-4 p-3" key={item.id}>
                            {` ${item.nombre} - ${item.correo}`}

                            <div>
                                {/* en el onclick se debe hacer una funcion de flecha ya que si se le pasa el paramentro se activara de una vez*/}
                                 <button className='btn-eliminar me-2' onClick={() => eliminarTodo(item.id)}>Eliminar</button>
                               
                            </div>
                        </li>

                    ))
                    : searchData.map((item) => (
                        <li className="list-group-item d-flex justify-content-between align-items-start my-3 mx-4 p-3" key={item.id}>
                            {` ${item.nombre} - ${item.correo}`}

                            <div>
                                {/* en el onclick se debe hacer una funcion de flecha ya que si se le pasa el paramentro se activara de una vez*/}
                                 <button className='btn-eliminar me-2' onClick={() => eliminarTodo(item.id)}>Eliminar</button>
                              
                            </div>
                        </li>

                    ))
                }

            </ol>

        </>
    )
}

export default TodoList