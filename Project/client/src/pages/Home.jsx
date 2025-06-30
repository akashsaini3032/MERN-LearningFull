
import Carousel from 'react-bootstrap/Carousel';
import b1 from "../Images/b1.jpg";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.jpg";

const Home=()=>{
    return(
        <>
          <h1> Welcome To Home Page</h1>
          <Carousel>
      <Carousel.Item>
        <img src={b1} width="100%" height="400" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} width="100%" height="350" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b3} width="100%" height="350" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br /> <br />

     <h1 id="gallary">Most Demanding Foods!!!</h1>

<div className="restaurant-photo-gallery">
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/01.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/02.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/03.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/04.jpg"  ></img></div>
  
</div>

<br /><br />

<div className="restaurant-photo-gallery">
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/09.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/10.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/11.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://george-fx.github.io/APIs/dinehub/assets/dishes/07.jpg"  ></img></div>
 
</div>

<br /><br />
        </>
    )
}

export default Home;