import React from "react";

export const Section4 = () => {
  return (
    <>
      <section className="mt-5 pt-5 section4_section">
        <h1 className="text-center section4_heading mt-5">
          Fuel your daydreams
        </h1>
        <p className="text-center section4_para mt-2">
          Stoke your wanderlust with some dreamy photo chronicles of road trip
          adventures.
        </p>
        <div className="text-center mb-5">
          <button className="section4_btn">Explore Travelogues</button>
        </div>
        <div className="container section4_container">
          <div className="row">
            <div className="col">
              <div className="black4">
                <p className="featured_text">FEATURED TRAVELOGUE</p>
                <h2 className="fw-bold">
                  An Olympic experience <br /> in Washington
                </h2>
                <p>
                  Discover the epic waterfalls, moody <br /> weather, and lush
                  forests of coastal <br /> Washington.
                </p>
                <a href="home.js" className="text-underline">
                  Readmore
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
