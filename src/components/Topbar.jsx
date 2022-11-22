import React from 'react'
import '../custom.css'

const Topbar = () => {
  return (
    <>
        <section className='topbar_bg'>
          <div className="container-fluid">
            <div className="row">
              <div className="col d-flex text-decoration-underline text-secondary justify-content-center py-3 topbar_text text-center">
                Turo has launched in New York! Tap to explore cars.
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Topbar;
