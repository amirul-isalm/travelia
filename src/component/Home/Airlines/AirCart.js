import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Airline.css"

const AirCart = ({airline}) => {
   
    return (
      <div className="col-12 my-3  col-md-6 col-lg-4">
        <div className="row mx-2 airCard">
          {" "}
          <div className="col-5 ">
            {" "}
            <img className="img-fluid" src={airline.photo} alt="" />{" "}
          </div>
          <div
            className="col-6 "
            style={{ display: "flex", alignItems: "center" }}
          >
            {" "}
            <h5> {airline.name} </h5>{" "}
          </div>
          <div
            className="col-1"
            style={{ display: "flex", alignItems: "center" }}
          >
            <FontAwesomeIcon icon={faGreaterThan} />{" "}
          </div>
        </div>
      </div>
    );
};

export default AirCart;