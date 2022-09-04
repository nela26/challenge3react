import Swal from 'sweetalert2'
import { useState } from "react";

const Formulario = ({list,setList}) => {
  
    const initialState = {
        inputName:'',
        inputEmail: ''
    }

    const [todos, setTodos] = useState(initialState)
        const {inputName, inputEmail}= todos
    //console.log(lista)
    const handleSubmit = (e) => {
        e.preventDefault();
    
        //validacion de campos
        if (inputName === '') {
            console.log('no dejes campos vacios');
                e.target[0].focus();

          // alert validacion
            Swal.fire({
                title: 'Error!',
                text: 'No Deje Campos Nombre Vacios',
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        if (inputEmail === '') {
            console.log('no dejes campos correo vacios');
            e.target[1].focus();

            Swal.fire({
                title: 'Error!',
                text: 'No Deje Campos Correo Vacios',
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        Swal.fire({
            title: 'Éxito!',
            text: 'Colaborador Agregado',
            icon: 'success',
            confirmButtonText: 'ok'
        });

        if (!inputName || !inputEmail) 
            return;

        setList([...list, {id: new Date().getTime(), nombre: todos.inputName, correo: todos.inputEmail}])
       
        console.log('nueva lista' + ' '+ todos.inputName + ' ' + todos.inputEmail)
           
        // console.log(setTodos(initialState))
         setTodos('')

    };

    const handleChange = (e) => {
        
        setTodos({
            ...todos, [e.target.name] : e.target.value
        })
       console.log(e.target.value)
    }

    return (
        <>
            <form className='form animate__animated animate__slideInLeft' onSubmit={handleSubmit}>
               
                <label htmlFor="nombre" className='label'>Nombre del colaborador:</label>
                <input
                    type="text"
                    placeholder="Ingresa el nombre del colaborador"
                    name="inputName"
                    className="form-control"
                    //value={inputName}
                    onChange={handleChange}
                />

                <label htmlFor="nombre" className='label'>Correo del colaborador:</label>
                <input
                    type="email"
                    placeholder="Ingresa el correo del colaborador"
                    name="inputEmail"
                    className="form-control"
                    //value={inputEmail}
                    onChange={handleChange}
                />

                <button className="btnAgregar">Agregar Colaborador</button>
            </form>
        </>
    )
}

export default Formulario