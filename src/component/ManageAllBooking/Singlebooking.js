import React from "react";
import { useHistory } from "react-router";

const Singlebooking = ({ booking, allBooking, setAllBooking }) => {
  const history = useHistory();
  const {
    serviceName,
    date,
    photo,
    email,
    totlPrice,
    person,
    
phone,
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


  const clickChangeStatusBtn = id => {
  
history.push(`/allBooking/${id}`);
    
}







  return (
    <div className="col-12 my-3  col-lg-6">
      <div className="row">
        <div className="col-5 col-md-4 ">
          <img className="img-fluid rounded-3" src={photo} alt="" />
        </div>
        <div className="col-7 col-md-8 p-2 text-start ">
          <h5>
            <b>{serviceName.slice(0, 25)}</b>
          </h5>
          <h6>
            <b>Booking By:</b>
            {email}
          </h6>
          <h6>
            <b>Phone:</b>
            {phone}
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
          <p>
            <b>Booking Status:</b>{" "}
            <span className="bg-info rounded-3 py-1 px-2">{status}</span>
          </p>
          <div className="row">
            <div className="col-6 ">
              <button
                onClick={() => clickChangeStatusBtn(_id)}
                className="bg-success mt-3 p-1 text-light rounded-3"
              >
                {" "}
                Change Status
              </button>
            </div>
            <div className="col-6">
              <button
                onClick={() => clickDeleteBtn(_id)}
                className="bg-danger mt-3 p-1 text-light rounded-3"
              >
                {" "}
                Delete Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlebooking;
