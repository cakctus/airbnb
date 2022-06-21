import react from "react";
import logo from '../images/airbnb.svg'
import Grid from "./Grid";


function Navbar() {
    return (
        <>

        <nav className="nav">
            <img className="nav-logo" src={logo} alt="" />
        </nav>
        <Grid />

        </>
    )
}

export default Navbar;