import { useState, useEffect } from 'react';
import axios from 'axios';
import BackEndURL from '../config/BackendUrl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Earphone=()=>{
    const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
   
    const loadData=async()=>{
      const response = await axios.get("http://localhost:3000/products/?category=earphone");
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
          <br /><br />
          <h1 > HeadPhones &Earphone</h1>
          <div className='homeProduct'>
          {ans}
          </div>
          
        </>
    )
}
export default Earphone;