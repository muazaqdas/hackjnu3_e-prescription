import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar"


const Layout = ()=>{
    const location = useLocation();
    return(
        <>
            <Navbar isLogin={location.pathname==="/login" || location.pathname==="/" || location.pathname==="/signup"?true:false} />
                <div className="min-h-screen">
                    <Outlet/>
                </div>
            <Footer/>
        </>
    )
}

export default Layout;