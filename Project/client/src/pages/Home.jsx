import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";





import Carousel from 'react-bootstrap/Carousel';
import b1 from "../Images/b1.jpg";
import b2 from "../Images/b2.jpg";
import b3 from "../Images/b3.jpg";

import b4 from "../Images/b4.jpg";

import Carouse from './Carouse';
import Dishes from '../component/Dishes';
import ChefSection from '../component/ChefSection';
import MenuSection from '../component/MenuSection';
import Gallary from '../component/Gallary';

const Home=()=>{
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData=async()=>{
      let api=`${BackEndUrl}/product/homedisplay`;
      try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
      } catch (error) {
          console.log(error);
      }
  }

useEffect(()=>{
  loadData();
}, []);


const ans=mydata.map((key)=>{
  return(
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.defaultImage} style={{height:"250px"}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          Description : {key.description} for - {key.category}
          <b> <h4> Price {key.price} </h4></b>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addtoCart({id:key._id, name:key.name, description:key.description, price:key.price, category:key.category, images:key.images, defaultImage:key.defaultImage, qnty:1 }))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )
});
    return(
        <>
          
          <Carousel>
      <Carousel.Item>
        <img src={b1} width="100%" height="400" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b4} width="100%" height="400" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={b2} width="100%" height="400" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
     
      <Carousel.Item>
      <img src={b3} width="100%" height="400" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


     <h1> Our PRemium Products</h1>
          <div id="homedata">
               {ans}
          </div>
  

  
<Gallary />
<MenuSection />
<Carouse />
<Dishes />
<ChefSection />
        </>
    )
}

export default Home;