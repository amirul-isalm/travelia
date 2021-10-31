import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useHistory, useParams } from "react-router";
import "./ManageAllBooking.css";

const ChangeBookingStatus = () => {
  const { id } = useParams();
  const history = useHistory();
  const [booking, setBooking] = useState({});
  useEffect(() => {
    fetch(`https://polar-basin-99537.herokuapp.com/booking/${id}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [id]);

  const {
    serviceName,
    date,
    photo,
    person,
    totlPrice,
    email,
    fullName,
    address,

      status,
    phone,
    
  } = booking;

  if (!serviceName) {
    return (
      <div className="mt-5 p-5">
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }
  // update status function
  const changeStatus = (changed) => {
    booking.status = changed;
    console.log(booking.status);

    const confirm = window.confirm(
      `Are You Sure,  Want To  ${changed} This Order`
    );

    if (confirm) {
      fetch(`https://polar-basin-99537.herokuapp.com/booking/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            alert(`Order Successfullu ${changed}`);
          } else {
            alert(`Hey! This Order Already ${changed}`);
          }
          history.push("/manageAllBooking");
        });
    }
  };
  return (
    <div className="bookings ">
      <h1>Change Booking Status.</h1>
      <hr className="w-75 mx-auto" />

      <div className="row my-5 ">
        <div className="col-12 col-md-8">
          <div className="row">
            <div className="col-5 col-md-3 ">
              <img className="img-fluid rounded-3" src={photo} alt="" />
            </div>
            <div className="col-7 col-md-9 p-2 text-start ">
              <h5>
                <b>{serviceName}</b>
              </h5>
              <h6>
                <b>Booking By:</b>
                {fullName}
              </h6>
              <h6>
                <b>Booking Email:</b>
                {email}
              </h6>
              <h6>
                <b>Phone:</b>
                {phone}
              </h6>
              <h6>
                <b>Address:</b>
                {address}
              </h6>
              <h6>
                <b>Person: </b>
                {person}
              </h6>
              <h6>
                <b>Total Cost: </b>
                {totlPrice}
              </h6>
              <h6>
                <b>Date: </b>
                {date}
              </h6>
              <div className="row">
                <p className="col-12 col-md-7">
                  <b>Booking Status:</b>{" "}
                  <span className="bg-info rounded-3 py-1 px-2">{status}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <h2>
            {" "}
            <b>Change Status</b>
          </h2>
          <hr />

          <div className="row ">
            <button
              onClick={() => changeStatus("Approved")}
              className="col-5 py-1 fw-bolder bg-success my-3 mx-auto rounded-3 text-light "
            >
              Approved
            </button>
            <button
              onClick={() => changeStatus("Processing")}
              className="col-5 py-1 fw-bolder bg-primary my-3 mx-auto rounded-3 text-light "
            >
              Processing
            </button>
            <button
              onClick={() => changeStatus("Runnig")}
              className="col-5 py-1 fw-bolder bg-secondary my-3 mx-auto rounded-3 text-light "
            >
              Running
            </button>
            <button
              onClick={() => changeStatus("End")}
              className="col-5 py-1 fw-bolder bg-danger my-3 mx-auto rounded-3 text-light "
            >
              End
            </button>
            <button
              onClick={() => changeStatus("Rejected")}
              className="col-5 py-1 fw-bolder bg-dark my-3 mx-auto rounded-3 text-light "
            >
              Rejected
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeBookingStatus;
