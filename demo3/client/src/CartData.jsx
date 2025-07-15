// import { useSelector, useDispatch } from "react-redux";
// import Table from 'react-bootstrap/Table';
// import { FaPlusCircle } from "react-icons/fa";
// import { FaMinusCircle } from "react-icons/fa";
// import { dataIncrease, dataDecrease,itemRemove } from "./cartSlice";

// import { MdPriceChange } from "react-icons/md";
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";







// const CartData=()=>{
//     const cartData= useSelector(state=>state.mycart.cart);
//     const dispatch= useDispatch();
//     const navigate= useNavigate();

//      let totalAmount=0;
//      const ans= cartData.map((key)=>{
//       totalAmount+=key.price*key.qnty;
//         return(
//             <>
//              <tr>
//                 <td> <img src={key.defaultImage} width="100" height="100" /></td>
//                 <td>{key.name}</td>
//                  <td>{key.description}</td>
//                   <td>{key.category}</td>
//                   <td>{key.price}</td>
//                   <td>
//                    <FaPlusCircle onClick={()=>{dispatch(dataIncrease({id:key.id}))}} />
//                     {key.qnty}   
//                     <FaMinusCircle onClick={()=>{dispatch(dataDecrease({id:key.id}))}} />
//                    </td>
//                   <td> {key.qnty * key.price} </td>
//                   <td>
//                     <button onClick={()=>{dispatch(itemRemove({id:key.id}))}}> Remove </button>
//                   </td>
                  
//              </tr>
//             </>
//         )
//      })
//     return(
//         <>
//           <h1> Our Cart Data</h1>
//            <h3 align="center" style={{color:"blue"}}><MdPriceChange /> {totalAmount}
//           <Button variant="warning" onClick={()=>{navigate("/checkout")}} style={{marginLeft:"30px"}}>Check Out</Button>
//           </h3>

//            <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Product Name</th>
//           <th>Description</th>
//            <th>Category</th>
//           <th>Price</th>
//           <th> Quantity</th>
//           <th> Total Price</th>
         
//         </tr>
//       </thead>
//       <tbody>
//          {ans}
//          <tr>
//            <th colspan="6">
//             <b>Total Price :</b>
//            </th>
//            <th>{totalAmount}</th>
//            <th> </th>
//          </tr>
//       </tbody>
//       </Table>
//         </>
//     )
// }

// export default CartData;



import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { dataIncrease, dataDecrease, itemRemove } from "./cartSlice";
import { MdPriceChange } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const CartData = () => {
    const cartData = useSelector(state => state.mycart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totalAmount = 0;
    const ans = cartData.map((key, index) => {
        totalAmount += key.price * key.qnty;
        return (
            <tr key={key.id} style={{
                backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F9F9F9',
                transition: "0.3s"
            }}>
                <td><img src={key.defaultImage} width="80" height="80" style={{
                    borderRadius: "12px",
                    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s",
                }} onMouseOver={e => e.target.style.transform = "scale(1.05)"} onMouseOut={e => e.target.style.transform = "scale(1)"} /></td>

                <td style={{ color: "#333333", fontWeight: "600", fontSize: "16px" }}>{key.name}</td>
                <td style={{ color: "#555", fontSize: "14px" }}>{key.description}</td>
                <td style={{ color: "#00BFA6", fontWeight: "500" }}>{key.category}</td>
                <td style={{ color: "#FF6F61", fontWeight: "600" }}>₹ {key.price}</td>
                <td>
                    <FaPlusCircle
                        onClick={() => { dispatch(dataIncrease({ id: key.id })) }}
                        style={{ color: "#00BFA6", fontSize: "22px", cursor: "pointer", marginRight: "8px" }}
                    />
                    <span style={{ margin: "0 8px", fontWeight: "600", color: "#333333" }}>{key.qnty}</span>
                    <FaMinusCircle
                        onClick={() => { dispatch(dataDecrease({ id: key.id })) }}
                        style={{ color: "#FF6F61", fontSize: "22px", cursor: "pointer", marginLeft: "8px" }}
                    />
                </td>
                <td style={{ color: "#FFC75F", fontWeight: "700" }}>₹ {key.qnty * key.price}</td>
                <td>
                    <button
                        onClick={() => { dispatch(itemRemove({ id: key.id })) }}
                        style={{
                            backgroundColor: "#FFC75F",
                            border: "none",
                            borderRadius: "10px",
                            padding: "8px 14px",
                            color: "#333333",
                            fontWeight: "600",
                            cursor: "pointer",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                            transition: "0.3s"
                        }}
                        onMouseOver={e => e.target.style.backgroundColor = "#E65C50"}
                        onMouseOut={e => e.target.style.backgroundColor = "#FFC75F"}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <div style={{
            padding: "25px",
            backgroundColor: "#F4F4F4",
            minHeight: "100vh",
            fontFamily: "'Segoe UI', sans-serif"
        }}>
            <h1 style={{
                textAlign: "center",
                color: "#FF6F61",
                marginBottom: "25px",
                fontSize: "34px",
                fontWeight: "700",
                letterSpacing: "1px"
            }}>
                🛒 Your Cart
            </h1>

            <h3 style={{
                textAlign: "center",
                color: "#00BFA6",
                marginBottom: "30px",
                fontSize: "24px"
            }}>
                <MdPriceChange style={{ fontSize: "30px", verticalAlign: "middle" }} /> ₹ {totalAmount}
                <Button
                    variant="warning"
                    onClick={() => { navigate("/checkout") }}
                    style={{
                        marginLeft: "20px",
                        backgroundColor: "#FF6F61",
                        border: "none",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        fontWeight: "600",
                        color: "#fff",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        transition: "0.3s"
                    }}
                    onMouseOver={e => e.target.style.backgroundColor = "#E65C50"}
                    onMouseOut={e => e.target.style.backgroundColor = "#FF6F61"}
                >
                    Proceed to Checkout
                </Button>
            </h3>

            <Table bordered hover responsive style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)"
            }}>
                <thead style={{
                    backgroundColor: "#FF6F61",
                    color: "#fff",
                    fontSize: "16px",
                    letterSpacing: "0.5px"
                }}>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {ans}
                    <tr style={{ backgroundColor: "#FFF1E6", fontWeight: "700" }}>
                        <td colSpan="6" style={{ textAlign: "right", color: "#333333" }}>
                            Grand Total:
                        </td>
                        <td style={{ color: "#00BFA6", fontSize: "18px" }}>₹ {totalAmount}</td>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default CartData;
