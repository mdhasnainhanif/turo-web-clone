import React from 'react'
import logo from '../assets/images/logo.png';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <>
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center">
                        <div>
                            <img width='100px' src={logo} alt="" />
                        </div>
                        <div className='d-flex '>
                            <div>
                              <button className='host_btn'>Become a host</button>
                            </div>
                            <div>
                              <FaBars className='fs-5' /> &nbsp;
                              <FaUserCircle className='fs-5'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default Header;