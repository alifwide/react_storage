import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container">
                    <a class="navbar-brand text-white click1" href="#">ADIWIYATA</a>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item click">
                                <Link to="/gallery" className="nav-link text-white">Gallery</Link>
                            </li>
                            <li class="nav-item click">
                                <Link to="/kalender" className="nav-link text-white">Kalender</Link>
                            </li>
                            <li class="nav-item click">
                                <Link to="/olshop" className="nav-link text-white">Shop</Link>
                            </li>
                            <li class="nav-item click">
                                <Link to="/cart" className="nav-link text-white">Keranjang</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

//export
export default Navbar;