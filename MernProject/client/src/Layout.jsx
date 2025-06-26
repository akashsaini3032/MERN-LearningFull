import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopMenu from "./components/TopMenu";

const Layout=()=>{
    return(
        <>
        <div className="headerPart">
        <Header/> 
        <TopMenu/>
        </div>
        
              <Outlet/>
            
          <Footer/>
        
        </>
    )
}

export default Layout;