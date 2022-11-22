import React from "react";
import logo from "../assets/images/logo.png";
import { FaBars, FaUserCircle, FaCar } from "react-icons/fa";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import { BiSupport } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineInsurance } from "react-icons/ai";
import { BsTools, BsFillCalculatorFill } from "react-icons/bs";
import { GiHouseKeys } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <section className="d-sm-block d-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center py-1">
              <div>
                <img width="100px" src={logo} alt="" />
              </div>
              <div className="d-flex">
                <div className="d-flex align-items-center">
                  <button className="host_btn">Become a host</button>
                </div>

                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" className="bg-secondary rounded">

                    <div className="head_user_bg">
                      <FaBars className="fs-5 text-secondary" /> &nbsp;
                      <FaUserCircle className="fs-5 text-secondary" />
                    </div>
                  </Dropdown.Toggle>

                  {/* DROPDOWN MENU */}

                  <Dropdown.Menu className="py-2 px-2">
                    <li href="#/action-1" className="drop_item">Login</li>
                    <li href="#/action-1" className="drop_item">Signup</li>
                    <div className="d-flex align-items-center mb-2 drop_item">
                    <FaCar className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Become a Host</Nav.Link>
                  </div>

                  <hr className="my-3" />

                  <div className="d-flex align-items-center mb-2 drop_item">
                    <GiHouseKeys className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; How Turo Works</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2 drop_item">
                    <BiSupport className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Contact Support</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2 drop_item">
                    <IoNewspaperOutline className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Legal</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2 drop_item">
                    <AiOutlineInsurance className="fs-5" />
                    <Nav.Link href="#action2">
                      &nbsp; Insurance and Protection
                    </Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2 drop_item">
                    <BsTools className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Host tools</Nav.Link>
                  </div>
                  <div className="d-flex align-items-center mb-2 drop_item">
                    <BsFillCalculatorFill className="fs-5" />
                    <Nav.Link href="#action2">&nbsp; Calculator</Nav.Link>
                  </div>

                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
