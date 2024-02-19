import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';  
import '../css/navbar.css';
import { getData,getSearchData} from '../action/actions';

function NavBar() {



  const dispatch=useDispatch();
  

 

  const [searchValue, setSearchValue] = useState('');

  const HandleSearchData=()=>{

   if(searchValue.trim()){

     dispatch({ type: 'IntializationSearchData', payload:searchValue.trim()});
     dispatch(getSearchData(searchValue.trim(), 1));
   }
    
  }



  const handleSearchValue=(e)=>{
    e.preventDefault();
       setSearchValue(e.target.value);

       if(e.target.value===''){
        dispatch({ type: 'IntializationData', payload:true});
        dispatch(getData(1));
       }
    
  }

  return (
    <>
      
        <Navbar key={'sm'} expand={'sm'} className="bg-body-tertiary mb-3">
          <Container fluid>
            <NavLink to="/" id='NavTitle'>Beers</NavLink>
           { <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
              placement="end"
              
            >
           <Offcanvas.Header closeButton >
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
                    value={searchValue}
                    onChange={(e)=>handleSearchValue(e)}
                  />
                  <Button variant="outline-success" onClick={(e)=>HandleSearchData(e)}>Go</Button>
                </Form>

                  <NavLink className='NavBarList' to="/"  >Home</NavLink>
                  <NavLink  className='NavBarList' to="/FavCollection">Favourite Beers</NavLink>
              
              
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
   
    </>
  );
}

export default NavBar;