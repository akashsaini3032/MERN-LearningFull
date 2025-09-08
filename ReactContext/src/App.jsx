

import { useState, createContext } from "react";
import Comp1 from "./Comp1";
const myContext=createContext();


const App=()=>{
    const [user, setUser]= useState("Akash");
    return(
        <>
        <h1>Welcome {user} !!!</h1>
        <button onClick={()=>{setUser("Saini")}}>
            click here
        </button>
        <myContext.Provider value={{user,setUser}}>
            <Comp1 />
        </myContext.Provider>
      
        
        </>
    )
}
export default App;
export {myContext};
