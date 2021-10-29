import {
  faFacebook,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationArrow,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="row py-5 footer ">
      <div className="col-12 pb-5 col-md-6 col-lg-4">
        <div className="w-75 mx-auto text-start ">
          {" "}
          <img
            className="w-75"
            src="https://i.ibb.co/NyvrdxM/cropped-Travel-logo-drk.png"
            alt=""
          />
          <p className=" my-5  fw-bold">
            Travelia Is a travel agancy and tour planer agancy. This is the best
            tour planer agancy in the bangladesh. Travelia provide best service
            their coustomer.
          </p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 pb-5">
        <div className="service text w-75 mx-auto ">
          <h3 className="text-primary mb-4">Services</h3>
          <Link to="/about">About Us </Link>
          <Link to="/work"> How It Works</Link>
          <Link to="/blog">Our Blog </Link>
          <Link to="/service"> Our Services</Link>
          <Link to="/contact"> Contact Us</Link>
        </div>
      </div>
      <div className="col-12 col-md-6 pb-5 col-lg-4">
        <div className="contact w-75 mx-auto">
          <h3 className="text-primary mb-4">Contacts</h3>
          <h6>
            <FontAwesomeIcon icon={faLocationArrow} /> Flat 20, Gulsan 2 ,
            Dhaka, Bangladesh
          </h6>
          <h6>
            <FontAwesomeIcon icon={faPhone} /> +8801796811953
          </h6>
          <h6>
            <FontAwesomeIcon icon={faEnvelope} /> airtran@gmail.com
          </h6>
          <div className="icon">
            <a href="https://www.facebook.com/shanto.1953/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/tweeter?lang=en">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://github.com/amirul-isalm">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/md-amirul-islam-shanto-9a99a321a/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <small> Travelia © 2021 All Right Reserved</small>
    </div>
  );
};

export default Footer;
