import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const TopMenu=()=>{
    return(
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">TechNova</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="laptop" >LAPTOP</Nav.Link>
            <Nav.Link as={Link} to="mobile" >MOBILE</Nav.Link>
            <Nav.Link as={Link} to="earphone" >Headphone&Earphones</Nav.Link>
             <Nav.Link as={Link} to="speaker" >SPEAKER</Nav.Link>
            <Nav.Link as={Link} to="mycart" >Cart </Nav.Link>
            <Nav.Link as={Link} to="search" >Search</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default TopMenu;



