import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b2.avif";
import b3 from "../images/b3.avif";

import { useState, useEffect } from 'react';
import axios from 'axios';
import BackEndURL from '../config/BackendUrl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Home=()=>{
    const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
   
    const loadData=async()=>{
      const response = await axios.get(BackEndURL);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

    const ans= mydata.map((key)=>{
        return(
            <>
                 <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
        </Card.Text>
        <h3> Price : {key.price}</h3>
        <Button variant="primary"
        onClick={()=>{dispatch(addToCart({id:key.id, name:key.name, description:key.description,category:key.category, image:key.image, qnty:1, price:key.price }))}}>Add To Cart</Button>
      </Card.Body>
    </Card>
            
            </>
        )
    })


    return(
        <>
         <Carousel>
      <Carousel.Item>
        <img src={b1} width="100%" height="350" />
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

    <h1 id="gallary">Launching SOON!!!</h1>

<div className="restaurant-photo-gallery">
  <div className="photo-card"> <img src="https://hammeronline.in/cdn/shop/articles/corporate_gift_for_festive_season.jpg?v=1606798707&width=540"  ></img></div>
  <div className="photo-card"> <img src="https://hammeronline.in/cdn/shop/articles/Solo-Pro-LAUNCH-new.jpg?v=1626262213&width=540"  ></img></div>
  <div className="photo-card"> <img src="https://hammeronline.in/cdn/shop/articles/03.jpg?v=1645515279&width=540"  ></img></div>
  <div className="photo-card"> <img src="https://hammeronline.in/cdn/shop/articles/Wireless_earphones_and_smartwatch.jpg?v=1713766026&width=540"  ></img></div>
  
</div>

<br /><br />

<div className="restaurant-photo-gallery">
  <div className="photo-card"> <img src="https://hammeronline.in/cdn/shop/articles/impedance_in_headphones.jpg?v=1609219513&width=540"  ></img></div>
  <div className="photo-card"> <img src="https://hammeronline.in/cdn/shop/articles/HeadPhone_1_1.png?v=1744714311&width=540"  ></img></div>
  <div className="photo-card"> <img src="https://m.media-amazon.com/images/I/81NZl5AXsiL._AC_UL480_QL65_.jpg"  ></img></div>
  <div className="photo-card"> <img src="https://m.media-amazon.com/images/I/41jwNIIB3LL._SX300_SY300_QL70_FMwebp_.jpg"  ></img></div>
 
</div>

<br /><br />


          
          <h1> Latest GADGETS By TECH NOVA</h1>
          <div className='homeProduct'>
          {ans}
          </div>
          
        </>
    )
}
export default Home;