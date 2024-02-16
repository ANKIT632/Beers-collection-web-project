import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';  
import { useNavigate } from 'react-router-dom'; 
import '../css/navbar.css';

function NavBar() {

  const dispatch=useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const HandleSearcgData=(e)=>{
   console.log(e);
    navigate('/');
     dispatch({ type: 'IntializationSearchData', payload:searchTerm.trim()});
    
  }


  const handleSearchValue=(e)=>{
    e.preventDefault();
       setSearchTerm(e.target.value);

       if(e.target.value===''){
        dispatch({ type: 'IntializationData', payload:true});
       }
    
  }

  return (
    <>
      
        <Navbar key={'sm'} expand={'sm'} className="bg-body-tertiary mb-3">
          <Container fluid>
            <NavLink to="/" id='NavTitle'>Beers</NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e)=>handleSearchValue(e)}
                  />
                  <Button variant="outline-success" onClick={(e)=>HandleSearcgData(e)}>Search</Button>
                </Form>

                  <NavLink className='NavBarList' to="/">Home</NavLink>
                  <NavLink  className='NavBarList' to="/FavCollection">Favotite</NavLink>
              
              
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   
    </>
  );
}

export default NavBar;