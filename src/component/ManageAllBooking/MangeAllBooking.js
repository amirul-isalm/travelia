import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import "./ManageAllBooking.css"
import Singlebooking from './Singlebooking';

const MangeAllBooking = () => {
    
     const [allBooking, setAllBooking] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/allBooking")
         .then((res) => res.json())
         .then((data) => setAllBooking(data));
     }, []);

  
     if (!allBooking.length) {
       return (
         <div className="mt-5 h-100 p-5">
           <div className="mt-5  p-5"> </div>
           <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
           <div className="mt-5  p-5"> </div>
         </div>
       );
     }

    return (
      <div className="row mx-2 mx-md-5 bookings">
        <h1>Manage All Booking</h1>
        <div>
          {" "}
          <hr className="w-75 mx-auto" />
        </div>
        {allBooking.map((booking) => (
          <Singlebooking key={booking._id} booking={booking} allBooking={allBooking} setAllBooking={setAllBooking}></Singlebooking>
        ))}
      </div>
    );
};

export default MangeAllBooking;