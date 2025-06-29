

// ██████████████████████████████████████████████████████████████████
// // █                                                               
// // █   🚀 TOPIC       : React Bootstrap Single Page                       
// // █   📘 DESCRIPTION : this is code for React bootstrap single page      
// // █                                                               
//  ██████████████████████████████████████████████████████████████████



// ╭════════════════════════════════════════════════════════════╮
// │ 🚀 SECTION : [Redux Toolkit day 2]                       │
// │ 📝 DESCRIPTION : [Day 2 task 1 ]   Namechange           │
// ╰════════════════════════════════════════════════════════════╯

import img6 from "./Image/ph6.jpg";

import img8 from "./Image/ph8.jpg";
import img9 from "./Image/ph9.jpg";

import img11 from "./Image/ph11.jpg";

import img12 from "./Image/ph12.png";
import img13 from "./Image/ph13.png";
import img14 from "./Image/ph14.png";
import img15 from "./Image/ph15.png";
import img16 from "./Image/ph16.jpg";

import img17 from "./Image/g1.jpg";
import img18 from "./Image/g2.jpg";
import img19 from "./Image/g3.jpg";
import img20 from "./Image/g4.jpg";
import img21 from "./Image/g5.jpg";
import img22 from "./Image/g6.jpg";


import img23 from "./Image/g7.jpg";
import img24 from "./Image/g8.jpg";
import img25 from "./Image/g9.jpg";
import img26 from "./Image/g10.jpg";
import img27 from "./Image/g11.jpg";
import img28 from "./Image/g12.jpg";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Carousel from 'react-bootstrap/Carousel';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const App =() => {
    return(
      <>
     
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FoodFusion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Menu</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">Contact US</Nav.Link>
            <Nav.Link href="#pricing">About US</Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      
      

<Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={img9} width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>Taste Of Tradition</h3>
          <p>Experience Royal Indian Flavours</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img8} width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>Bold Rich Flavours</h3>
          <p>Spices That tell stories</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img6} width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>Celebrate With Flavor</h3>
          <p>
            Where Every Meal is Celebration
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img11} width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>Taste Of Tradition</h3>
          <p>
          Experience Royal Indian Flavours
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    

    </Carousel>
   
    <br />

    {['Menu', 'Price', 'Review', 'Info',].map(
        (variant) => (
          <DropdownButton
            as={ButtonGroup}
            key={variant}
            id={`dropdown-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownButton>
        ),
      )}


    <br /><br />

    <h1 id="menu">MENU</h1>
     <div id="title" >
    <Card style={{ width: '18rem' }}>
    <img src={img12} width="100%" ></img>
      <Card.Body>
        <Card.Title>Noodles</Card.Title>
        <Card.Text>
          Price:70 RS per Plate
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src={img13} width="100%" height="70%" ></img>
      <Card.Body>
        <Card.Title>Butter Paneer</Card.Title>
        <Card.Text>
        Price:100 RS per Plate
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
    <img src={img14} width="100%" ></img>
      <Card.Body>
        <Card.Title>COMBO PACK</Card.Title>
        <Card.Text>
        Price:300 RS per Plate
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src={img15} width="100%" ></img>
      <Card.Body>
        <Card.Title>PIZZA</Card.Title>
        <Card.Text>
        Price:100 RS 
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>

    </div>

    <div id="title" >
    <Card style={{ width: '18rem' }}>
    <img src={img12} width="100%" ></img>
      <Card.Body>
        <Card.Title>Noodles</Card.Title>
        <Card.Text>
          Price:70 RS per Plate
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src={img13} width="100%" height="70%" ></img>
      <Card.Body>
        <Card.Title>Butter Paneer</Card.Title>
        <Card.Text>
        Price:100 RS per Plate
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
    <img src={img14} width="100%" ></img>
      <Card.Body>
        <Card.Title>COMBO PACK</Card.Title>
        <Card.Text>
        Price:300 RS per Plate
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
    <img src={img15} width="100%" ></img>
      <Card.Body>
        <Card.Title>PIZZA</Card.Title>
        <Card.Text>
        Price:100 RS 
        </Card.Text>
        <Button variant="primary">ORDER NOW</Button>
      </Card.Body>
    </Card>

    </div>
<br /> <br />


<h1 id="gallary">Restaurant Gallary</h1>

<div className="restaurant-photo-gallery">
  <div className="photo-card"> <img src={img17}  ></img></div>
  <div className="photo-card"> <img src={img18}  ></img></div>
  <div className="photo-card"> <img src={img19}  ></img></div>
  <div className="photo-card"> <img src={img20}  ></img></div>
  <div className="photo-card"> <img src={img21}  ></img></div>
  <div className="photo-card"> <img src={img22}  ></img></div>
</div>

<br /><br />

<div className="restaurant-photo-gallery">
  <div className="photo-card"> <img src={img23}  ></img></div>
  <div className="photo-card"> <img src={img24}  ></img></div>
  <div className="photo-card"> <img src={img25}  ></img></div>
  <div className="photo-card"> <img src={img26}  ></img></div>
  <div className="photo-card"> <img src={img27}  ></img></div>
  <div className="photo-card"> <img src={img28}  ></img></div>
</div>

<br /><br />



<h1 id="review">Review Of OUR Customer in BLOG</h1>

    <Card className="bg-dark text-white">
      {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      <img src={img16} width="100%" height="600px" ></img>
      <Card.ImgOverlay>
        <Card.Title>Customer Review</Card.Title>
        <Card.Text>
          Here in Blog we Share our Customer Experiences
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>


    <br /><br />

    <h1 id="offer">Our Resataurant OFFER UPDATE</h1>
    <div class="promo-section">
        <div class="promo-item camera">
            
            <button>SEE MENU</button>
        </div>
        <div class="promo-item games">
            
            <button>SEE MENU</button>
        </div>
    </div>


    {/* card group */}

  

    <br />


    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <br /> 

    <div>
    

      <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We serve love <br />Taste meets tradition <br />Food Fusion Restaurant <br /> Also Home Delevery available</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing </a></li>
              <li><a href="#">About US </a></li>
              <li><a href="#">Contact US </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    </div>

      
      </>
    )  
    }
    export default App;




    