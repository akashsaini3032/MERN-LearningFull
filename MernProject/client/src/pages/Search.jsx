import { useState, useEffect } from 'react';
import axios from 'axios';
import BackEndURL from '../config/BackendUrl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../cartSlice';
import { useDispatch } from 'react-redux';

const Search=()=>{
    const [mydata, setMydata] = useState([]);
    const dispatch= useDispatch();
    const [pro, setPro]= useState("");
   
    const loadData=async()=>{
      const response = await axios.get(BackEndURL);
      console.log(response.data);
      setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, [])

      
    const handleInput=(e)=>{
       let proval= e.target.value;
       setPro(proval);
    }




    const ans= mydata.map((key)=>{
           let myval=pro.toLocaleLowerCase();
           let mystring= key.name.toLocaleLowerCase();
         const status= mystring.includes(myval);
         console.log(status)

       if (status)
       {
        
       

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
        }
    })


    return(
        <>
        
          <center>
          <h1> Our Latest Watch</h1>
          Enter Product name : <input type="text" value={pro} onChange={handleInput} />
           
          </center>
          <div className='homeProduct'>
          {ans}
          </div>
          
        </>
    )
}
export default Search;