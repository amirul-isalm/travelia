import React from "react";

const MyBookingCard = ({ booking, setAllBooking, allBooking }) => {
  const {
    serviceName,
    date,
    photo,
    person,
    totlPrice,

    fullName,

    status,
    _id,
  } = booking;

  const clickDeleteBtn = (id) => {
    const isConfirm = window.confirm("Are you sure  to delete this booking ?");
    if (isConfirm) {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Delete Successfully");
            const remainBooking = allBooking.filter((book) => book._id !== id);
            setAllBooking(remainBooking);
          }
        });
    }
  };

  return (
    <div className="col-12 my-3 col-lg-6">
      <div className="row">
        <div className="col-5 col-md-3 ">
          <img className="img-fluid rounded-3" src={photo} alt="" />
        </div>
        <div className="col-7 col-md-9 p-2 text-start ">
          <h5>
            <b>{serviceName.slice(0, 25)}</b>
          </h5>
          <h6>
            <b>Booking By:</b>
            {fullName}
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
            <div className="col-12 col-md-5 ">
              <button
                onClick={() => clickDeleteBtn(_id)}
                className="bg-danger text-light rounded-3"
              >
                {" "}
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
