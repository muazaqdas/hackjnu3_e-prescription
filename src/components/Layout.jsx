import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar"


const Layout = ()=>{
    const location = useLocation();
    return(
        <>
            <Navbar isAbout={location.pathname==="/about"?true:false} />
                <div className="min-h-screen">
                    <Outlet/>
                </div>
            <Footer/>
        </>
    )
}

export default Layout;