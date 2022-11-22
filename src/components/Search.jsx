import React from 'react'
import "../custom.css";
import { HiOutlineSearch } from "react-icons/hi";

export const Search = () => {
  return (
    <>
        <section>
            <div className="container search_container mx-auto mt-4">
                <div className="row search_row py-1 ps-1">
                    <div className="col-lg-4 search_first">
                        <div className='border-right border-dark'>
                            <label htmlFor="search">Where</label> <br />
                            <input className='w-100 pb-lg-0 pb-2' type="search" placeholder='City, airport, address or hotel'/>
                        </div>
                    </div>
                    <div className="col-lg-3 search_second">
                    <div className='border-right border-dark'>
                            <label htmlFor="search">From</label> <br />
                            <div className='d-flex '>
                              <input className='w-100 pb-lg-0 pb-2' type="date" placeholder='City, airport, address or hotel'/>&nbsp;&nbsp;
                              <input className='w-100 pb-lg-0 pb-2' type="time" placeholder='City, airport, address or hotel'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 search_third ">
                    <label htmlFor="search">Until</label> <br />
                            <div className='d-flex '>
                              <input className='w-100 pb-lg-0 pb-2' type="date" placeholder='City, airport, address or hotel'/>&nbsp;&nbsp;
                              <input className='w-100 pb-lg-0 pb-2' type="time" placeholder='City, airport, address or hotel'/>
                            </div>
                    </div>
                    <div className='col-lg-1'>
                      <div className='search_icon_div d-lg-flex align-items-center justify-content-center'>
                              <HiOutlineSearch  className='text-light search_icon'/>
                      </div>
                      <div className='d-lg-none d-block'>
                          <button className='w-100 search_car_btn rounded'>Search For Cars</button>
                      </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}


export default Search;