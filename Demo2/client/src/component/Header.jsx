
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// import "../css/Header.css";
// const Header=()=>{
// const cartData= useSelector(state=>state.mycart.cart);
// const cartLength= cartData.length;
// const navigate = useNavigate();
//     return(
//         <>
//                <Navbar bg="primary" data-bs-theme="dark">
//         <Container>
//           <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="menu">Menu</Nav.Link>
//             <Nav.Link as={Link} to="offers">Offers</Nav.Link>
//             <Nav.Link as={Link} to="cartdata">Cart</Nav.Link>
//             <Nav.Link as={Link} to="Profile">Profile</Nav.Link>
           
           
//           </Nav>
//            <span style={{cursor:"pointer"}} onClick={()=>{navigate("/login")}}> Login </span>
//           <span className='itemcount'> {cartLength} </span> 

//           <FaShoppingCart className='carticon'
//           onClick={()=>{navigate("/cartdata")}} style={{cursor:"pointer"}} /> 
        
//         </Container>
//       </Navbar>

//         </>
//     )
// }

// export default Header;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../pages/userSlice'; // ✅ Make sure path is correct
import '../css/Header.css';

const Header = () => {
  const cartData = useSelector((state) => state.mycart.cart);
  const cartLength = cartData.length;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/offers">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/cartdata">
              Cart
            </Nav.Link>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav>

          {currentUser ? (
            <>
              <span style={{ color: 'white', marginRight: '10px' }}>
                Hi, {currentUser.name || 'User'}
              </span>
              <span
                style={{ cursor: 'pointer', color: 'orange', fontWeight: 'bold', marginRight: '20px' }}
                onClick={handleLogout}
              >
                Logout
              </span>
            </>
          ) : (
            <span
              style={{ cursor: 'pointer', color: 'white', fontWeight: 'bold', marginRight: '20px' }}
              onClick={() => {
                navigate('/login');
              }}
            >
              Login
            </span>
          )}

          <span className="itemcount">{cartLength}</span>
          <FaShoppingCart
            className="carticon"
            onClick={() => {
              navigate('/cartdata');
            }}
            style={{ cursor: 'pointer' }}
          />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
