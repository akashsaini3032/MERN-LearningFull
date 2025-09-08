import Comp4 from "./Comp4";
import { useContext } from "react";
import { myContext } from "./App";
const Comp3=()=>{
    const {user}= useContext(myContext);
    
    return(
        <>
        <h1>Comp3</h1>
        <Comp4/>
        
        
        </>
    )
}
export default Comp3;
