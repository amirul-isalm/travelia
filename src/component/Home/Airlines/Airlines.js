import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import AirCart from './AirCart';
import "./Airline.css"

const Airlines = () => {
    const [airlines, setAirlines] = useState({})
    useEffect(() => {
        fetch("https://polar-basin-99537.herokuapp.com/airlines")
          .then((res) => res.json())
          .then((data) => setAirlines(data));
    }, [])
    
    if (!airlines.length) {
      return (
        <div className="mt-5 p-5">
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
    
    return (
        <div className="airlines">
            <h1> Our Airlines</h1>
            <hr className="w-75 mx-auto" />
        <div className="w-75  mx-auto pb-5 row">
          {airlines.map((airline) => (
            <AirCart key={airline._id} airline={airline}></AirCart>
          ))}
        </div>
      </div>
    );
};

export default Airlines;