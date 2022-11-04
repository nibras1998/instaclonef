import "./header.css"
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';
const Header= ()=> {
    return(
        <>
            <nav className="header">
                <section className="logo">
                <Link to={"/post"}>
                    <img src={require("../../images/header.png")} alt="logo"/>
                </Link>
                </section>
                <section className="camera-icon">
                <Link to={"/upload"}>
                         <img src={require("../../images/camera.png")} alt="camera"/>
                </Link>
                   
                </section>
            </nav>
        </>
    );
}
export default Header;