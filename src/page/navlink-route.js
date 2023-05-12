import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom'
import Home from './home'
import Product from './products'
import About from './about'



export default function NvaLinkRoute() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm bg-light navbar-light">
                    <div className="container-fluid">
                        <ul className="navbar-nav nav-pills">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link " >Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/products" className="nav-link" >Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/*" className="nav-link" >Link</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Product />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}



