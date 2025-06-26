// import { FaShoppingCart } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// const Header=()=>{
//   const navigate = useNavigate();
//   const cartData= useSelector(state=>state.mycart.cart);
//   console.log(cartData);
//   const cartLength=cartData.length;
//     return(
//         <>
//           <div id="header">
//             {cartLength}
//           <FaShoppingCart  onClick={()=>{navigate("/mycart")}} style={{cursor:"pointer"}}/>
//           </div>
        
//         </>
//     )
// }


// export default Header;



// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';


// import { FaCartArrowDown } from "react-icons/fa6";
// import { IoSettings } from "react-icons/io5";
// import { FaHeart } from "react-icons/fa";
// //Images:
// import logo from "../Images/logo.png"
// const Header=()=>{

  


//     return(
//         <>
// <Navbar expand="lg" className='myNav'>
//       <Container fluid>
//         <Navbar.Brand  href="#"><img src={logo} height="80" width="80" className='logoimg'/></Navbar.Brand>
//         <Navbar.Brand href="#" className="brand-text">Tech Nova</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0 navLink"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link as={Link} to="home">Home</Nav.Link>
//             <Nav.Link as={Link} to="laptop">Laptop</Nav.Link>
//             <Nav.Link as={Link} to="mobile">Mobile</Nav.Link>
//             <Nav.Link as={Link} to="earphone">Headphone</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#" disabled>
//               Link
//             </Nav.Link>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//             />
//           </Form>
          
//           <div className='navIcons'>
//           <FaCartArrowDown />
//           <IoSettings />
//           <FaHeart />
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//         </>
//     )
// }
// export default Header




import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa"; // replaced icon
import { IoSettings } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

import { useSelector } from "react-redux";

// search ke liye code
import { useState } from 'react';
// search ke liye code


// Images:
import logo from "../Images/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.mycart.cart);
  const cartLength = cartData.length;

    // yah hai search bar ke liye
  const [query, setQuery] = useState('');


  return (
    <>
      <Navbar expand="lg" className='myNav'>
        <Container fluid>
          <Navbar.Brand href="#"><img src={logo} height="80" width="80" className='logoimg' /></Navbar.Brand>
          <Navbar.Brand href="#" className="brand-text">Tech Nova</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navLink"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="home">Home</Nav.Link>
              <Nav.Link as={Link} to="laptop">Laptop</Nav.Link>
              <Nav.Link as={Link} to="mobile">Mobile</Nav.Link>
              <Nav.Link as={Link} to="earphone">Headphone</Nav.Link>
              <Nav.Link as={Link} to="speaker">Speaker</Nav.Link>
              <Nav.Link as={Link} to="mycart">Cart</Nav.Link>
              <Nav.Link as={Link} to="search">Search</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>Link</Nav.Link> */}
            </Nav>

               {/* search code update code */}

               <Form className="d-flex" onSubmit={(e) => {
  e.preventDefault();
  const page = query.trim().toLowerCase();
  switch (page) {
    case 'home':
      navigate('/home');
      break;
    case 'laptop':
      navigate('/laptop');
      break;
    case 'mobile':
      navigate('/mobile');
      break;
    case 'headphone':
      navigate('/earphone');
      break;
    case 'speaker':
      navigate('/speaker');
      break;
    case 'cart':
    case 'mycart':
      navigate('/mycart');
      break;
    default:
      alert('Page not found!');
  }
  setQuery('');
}}>
  <Form.Control
    type="search"
    placeholder="Search"
    className="me-2"
    aria-label="Search"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
</Form>


               {/* search code update code */}


            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form> */}

            <div className='navIcons' style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              {/* Updated Cart Icon with Count and Navigation */}
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => navigate("/mycart")}>
                <FaShoppingCart size={22} />
                {cartLength > 0 && (
                  <span style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    fontSize: "12px",
                    padding: "2px 6px"
                  }}>{cartLength}</span>
                )}
              </div>

              <IoSettings size={22} />
              <FaHeart size={22} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;




