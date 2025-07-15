
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import "../css/Data.css";
const Data = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = async () => {
    const api = `${BackEndUrl}/product/homedisplay`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // return (
  //   <div className="fancy-section">
  //     <h1 className="fancy-title">🍽️ Our Signature Dishes</h1>
  //     <div className="fancy-grid">
  //       {mydata.map((item) => (
  //         <div className="fancy-card" key={item._id}>
  //           <div className="fancy-img-wrapper">
  //             <img src={item.defaultImage} alt={item.name} className="fancy-img" />
  //           </div>
  //           <div className="fancy-content">
  //             <h3 className="fancy-name">{item.name}</h3>
  //             <p className="fancy-desc">{item.description}</p>
  //             <span className="fancy-cat">{item.category}</span>
  //             <div className="fancy-footer">
  //               <span className="fancy-price">₹ {item.price}</span>
  //               <button
  //                 className="fancy-btn"
  //                 onClick={() =>
  //                   dispatch(
  //                     addtoCart({
  //                       id: item._id,
  //                       name: item.name,
  //                       description: item.description,
  //                       price: item.price,
  //                       category: item.category,
  //                       images: item.images,
  //                       defaultImage: item.defaultImage,
  //                       qnty: 1,
  //                     })
  //                   )
  //                 }
  //               >
  //                 Add to Cart 🛒
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );


//   const ans=mydata.map((key)=>{
//   return(
//     <>
//       <Card style={{ width: '18rem' }}>
    
//       <Card.Img variant="top" src={key.defaultImage} style={{height:"250px", cursor:"pointer"}} onClick={()=>{navigate(`/productdisplay/${key._id}`)}} />
//       <Card.Body>
//         <Card.Title>{key.name}</Card.Title>
//         <Card.Text>
//           Description : {key.description} for - {key.category}
//           <b> <h4> Price {key.price} </h4></b>
//         </Card.Text>
//         <Button variant="primary" onClick={()=>{dispatch(addtoCart({id:key._id, name:key.name, description:key.description, price:key.price, category:key.category, images:key.images, defaultImage:key.defaultImage, qnty:1 }))}}>Add to Cart</Button>
//       </Card.Body>
//     </Card>
    
//     </>
//   )
// });

//     return(
//         <>
//           <h1> Our PRemium Products</h1>
//           <div id="homedata">
//                {ans}
//           </div>
         
//         </>
//     )

return (
  <div className="fancy-section">
    <h1 className="fancy-title">🍽️ Our Signature Dishes</h1>
    <div className="fancy-grid">
      {mydata.map((item) => (
        <div className="fancy-card" key={item._id}>
          <div
            className="fancy-img-wrapper"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(`/productdisplay/${item._id}`)}
          >
            <img src={item.defaultImage} alt={item.name} className="fancy-img" />
          </div>
          <div className="fancy-content">
            <h3 className="fancy-name">{item.name}</h3>
            <p className="fancy-desc">{item.description}</p>
            <span className="fancy-cat">{item.category}</span>
            <div className="fancy-footer">
              <span className="fancy-price">₹ {item.price}</span>
              <button
                className="fancy-btn"
                onClick={() =>
                  dispatch(
                    addtoCart({
                      id: item._id,
                      name: item.name,
                      description: item.description,
                      price: item.price,
                      category: item.category,
                      images: item.images,
                      defaultImage: item.defaultImage,
                      qnty: 1,
                    })
                  )
                }
              >
                Add to Cart 🛒
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default Data;
