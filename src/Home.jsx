import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './1.png';
const Home = () => {
    return (
        <>
            <div className='container-fluid  '>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row d-flex flex-row justify-content-center'>
                            <div className='col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>Grow your business with  <br /> <strong className='brands'>Haider Tech</strong></h1>
                                <h2 className='sizep my-3'>
                                    We are the team of talented developers making websites
                                </h2>
                                <div className='mt-3'>
                                    <NavLink to='/Service' className='btn-style'>Get Started</NavLink>
                                </div>
                            </div>
                            <div className='text-right col-md-6 pt-5 images order-1 order-lg-1'>
                                <img src={logo} className='img-fluid' alt="Logo" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Home;