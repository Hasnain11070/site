import React from 'react';

import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>

            <div class="container-fluid nav-bg ">
                <div className='row bar '>
                    <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light ">
                      <div className="container-fluid">
                        <NavLink className="xx navbar-brand" exact to="/"><strong className='xx'>Haider Tech</strong></NavLink>
                        <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className='xx'><i class="fa fa-bars"></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav neew   mb-2 mb-lg-0">
                            <li className="nav-item ">
                              <NavLink activeClassName='active-menu'  className="nav-link active " aria-current="page" exact to="/"><span className='xx'>Home</span></NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink activeClassName='active-menu' className="nav-link" exact to="/About"><span className='xx'>About</span></NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink activeClassName='active-menu' className="nav-link" exact to="/Service"><span className='xx'>Service</span></NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink activeClassName='active-menu' className="nav-link" exact to="/Contact"><span className='xx'>Contact</span></NavLink>
                            </li>
                            
                          </ul>
                          
                        </div>
                      </div>
                    </nav>
                </div>
              </div>
            </div>
         </>
    );
}
export default Navbar;