import { myContext } from "./App";
import { useContext } from "react";
const Comp5=()=>{
    const {user, setUser}= useContext(myContext);
    return(
        <>
        <h1>Comp5</h1>
        <h1>welcome {user}</h1>
        <button onClick={()=>{setUser("amaan")}}> click here</button>
        
        </>
    )
}
export default Comp5;
