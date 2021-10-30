import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import useAuth from "../Context/useAuth";
import MyBookingCard from "./MyBookingCard";
import "./MyBooking.css";

const MyBooking = () => {
  const { user } = useAuth();
  const [allBooking, setAllBooking] = useState([]);
  useEffect(() => {
    if (!user.email) {
      return (
        <div className="mt-5 h-100 p-5">
         
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        </div>
      );
    }
    fetch(`https://polar-basin-99537.herokuapp.com/allBooking/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAllBooking(data));
  }, [user]);



  return (
    <div className="myBooking m-3  mx-auto">
      <h1>My Booking</h1>
      <hr className="w-75  my-4 mx-auto" />
      <div className="row">
        {allBooking.length ? (
          allBooking.map((booking) => (
            <MyBookingCard key={booking._id} booking={booking} allBooking={allBooking} setAllBooking={setAllBooking} ></MyBookingCard>
          ))
        ) : (
          <h2>Currently You dont have any booking.</h2>
        )}
      </div>
    </div>
  );
};

export default MyBooking;
