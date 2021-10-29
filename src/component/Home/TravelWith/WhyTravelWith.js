import React from 'react';
import "./WhyTravelWith.css"

const WhyTravelWith = () => {
    return (
      <div className="whyTravel">
        <div>
          {" "}
          <h1>Why Travel with Travelia?</h1>
          <hr />
          <div className="row">
            <div className="col-12 pb-3 row col-lg-6 ">
              <div className="col-6">
                <div className="travelCart">
                  <img
                    className="w-50"
                    src="https://i.ibb.co/NS2rKKJ/guide.png"
                    alt=""
                  />
                  <h5>2000+ Our Worldwide Guide</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="travelCart">
                  <img
                    className="w-50"
                    src="https://i.ibb.co/z6JyVbJ/download-removebg-preview.png"
                    alt=""
                  />
                  <h5>100% Trusted Tour Agency</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="travelCart">
                  <img
                    className="w-50"
                    src="https://i.ibb.co/KXtzQJV/travel-time-hand-drawn-lettering-260nw-1159550923-removebg-preview.png"
                    alt=""
                  />
                  <h5>12+ Years of Travel Experience</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="travelCart">
                  <img
                    className="w-50"
                    src="https://i.ibb.co/jMznx2L/unnamed-removebg-preview.png"
                    alt=""
                  />
                  <h5>98% of Our Travelers are Happy</h5>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 ">
              <div>
                <h1 className="worldBesttext">World Best Travel Agency Company Since 2008.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyTravelWith;