import {
  faCalendarAlt,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "react-loader-spinner";
import { useHistory, useParams } from "react-router";
import useAuth from "../Context/useAuth";
import "./BookingConfirm.css";

const BookingConfirm = () => {
  const { user } = useAuth();

  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`https://polar-basin-99537.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);
 
  const { name, price, photo, duration, location, description } = service;

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.photo = photo;
    data.price = price;
    data.totlPrice = parseInt(price)*data.person;
    data.duration = duration;
    data.status = "Pending";
  
console.log(data)
    axios
      .post("https://polar-basin-99537.herokuapp.com/confirmBooking", { data })
      .then((res) => {
        if (res.data.insertedId) {
          alert("Booking Successfully");
          reset();
        } else {
          alert("Booking Faield");
        }
      });
  };

  if (!service.name) {
    return (
      <div className="mt-5 p-5" >
        <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="bookingConfirm">
      <h1> Confirm Your Booking </h1>
      <hr />
      <div className="row py-5">
        <div className="col-12 col-lg-7 mb-4 text-start">
          <h1 className="fw-bolder">{name}</h1>
          <p>
            <FontAwesomeIcon icon={faMapMarkedAlt} /> {location}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} /> {duration}
          </p>
          <p>
            <h5> BDT {price}</h5>
          </p>
          <h5>
            <b>Tour Details:</b>
          </h5>

          <p>{description}</p>
        </div>
        {/* react hook forom use by making confirm order  forom..  */}
        <div className="col-12  col-lg-5 ">
          <h3>Please Fill And Confirm Booking.</h3>
          <hr />
          <form className="confirmForom" onSubmit={handleSubmit(onSubmit)}>
            <input
              value={user.displayName || ""}
              {...register("fullName", { required: true })}
            />
            <input
              value={user.email || ""}
              {...register("email", { required: true })}
            />
            <input
              type="number"
              placeholder="How many people visite?"
              {...register("person", { required: true, min: 1})}
            />
            <input
              value={name || ""}
              {...register("serviceName", { required: true })}
            />
            <input type="date" {...register("date", { required: true })} />

            <input
              placeholder="Phone Number"
              {...register("phone", { required: true })}
            />
            <input
              placeholder="Current Address"
              {...register("address", { required: true })}
            />

            <input className="bg-warning " type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirm;
