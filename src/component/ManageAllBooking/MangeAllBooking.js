import React, { useEffect, useState } from 'react';
import "./ManageAllBooking.css"
import Singlebooking from './Singlebooking';

const MangeAllBooking = () => {
    
     const [allBooking, setAllBooking] = useState([]);
     useEffect(() => {
       fetch("https://polar-basin-99537.herokuapp.com/allBooking")
         .then((res) => res.json())
         .then((data) => setAllBooking(data));
     }, []);

  
   

    return (
      <div className="row mx-2 mx-md-5 bookings">
        <h1>Manage All Booking</h1>
        <div>
          <h5 className="totalBookin">
            <b>Total Active Booking:</b>
            {allBooking.length}
          </h5>
          <hr className="w-75 mx-auto" />
        </div>
        {allBooking.length ? (
          allBooking.map((booking) => (
            <Singlebooking
              key={booking._id}
              booking={booking}
              allBooking={allBooking}
              setAllBooking={setAllBooking}
            ></Singlebooking>
          ))
        ) : (
          <h3 className="totalBookin my-5" >Currently No Booking</h3>
        )}
      </div>
    );
};

export default MangeAllBooking;