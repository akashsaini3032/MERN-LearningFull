
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
const Header=()=>{
    return(
        <>
               <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="cart">Cart</Nav.Link>
            <Nav.Link as={Link} to="Profile">Profile</Nav.Link>
           
           
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}

export default Header;


