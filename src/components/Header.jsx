import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';


const Header = ({ func, list}) => {
    
    const [seeker, setSeeker] = useState("");

    const searchCollaborator = (e) => {
      let search = e.target.value;
  
      setSeeker(e.target.value);
  
      let filterList = list.filter((item) => {
        return (
          item.nombre.toLowerCase().includes(search.toLowerCase()) ||
          item.correo.toLowerCase().includes(search.toLowerCase())
        );
      });
  
      if (search.length <= 1 || filterList <= 1) {
        filterList = list;
      }
      console.log("valor de filterList", filterList);
      
      func(filterList) // Regresa la info filtrada segun busqueda
    };
          
    return (
        <>
            <Navbar className='navBar'>
                <Container className='container-fluid animate__animated animate__fadeInDown'>
                    <div className='navBrand text-white'>
                       
                        Buscador De Colaboradores
                        <div>
                            <input
                                type="search"
                                placeholder="Busca un colaborador"
                                className="inputSearch"
                                value={seeker}
                                onChange={searchCollaborator}

                            />
                           
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
