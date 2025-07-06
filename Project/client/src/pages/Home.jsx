
import Carousel from 'react-bootstrap/Carousel';
import b1 from "../Images/b1.jpg";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.jpg";





import Carouse from './Carouse';
import Dishes from '../component/Dishes';
import ChefSection from '../component/ChefSection';
import MenuSection from '../component/MenuSection';
import Gallary from '../component/Gallary';

const Home=()=>{
    return(
        <>
          <h1> Welcome To Home Page</h1>
          <Carousel>
      <Carousel.Item>
        <img src={b1} width="100%" height="400" />
        <Carousel.Caption>
         Akash Saini
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
  

  
<Gallary />
<MenuSection />
<Carouse />
<Dishes />
<ChefSection />
        </>
    )
}

export default Home;