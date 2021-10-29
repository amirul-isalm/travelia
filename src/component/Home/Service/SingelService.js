import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router";
import "./Service.css";

const SingelService = ({ service }) => {
  const { name, price, photo, duration, location,_id } = service;

  const history = useHistory();
  const handelClickBookinButton = (id) => {
    history.push(`/service/${id}`);
  };

  return (
    <div className="col-12 my-3 serviceCart col-md-4 text-start  col-lg-3">
      <div>
        <div className="cartImg">
          <img className="w-100 rounded-3" src={photo} alt="" />
        </div>
        <div className="text-start p-2">
          <h5 className="fw-bold">{name.slice(0, 25)}....</h5>
          <div>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} /> {duration}
            </span>{" "}
            <span className="ms-3">
              <FontAwesomeIcon icon={faMapMarkedAlt} /> {location.slice(0, 15)}
              ....
            </span>{" "}
          </div>
          <div className="my-3">
            <span className="fw-bolder ">BDT {price} /</span>person{" "}
            <button onClick={()=>handelClickBookinButton(_id)}>Book Trip</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelService;
