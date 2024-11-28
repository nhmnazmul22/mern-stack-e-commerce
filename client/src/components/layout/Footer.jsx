import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/payment.png";

const Footer = () => {
  return (
    <div>
      <div className="section-bottom shadow-sm bg-white">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h1 className="bodyMedium">Legals</h1>
              <p className="my-2">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/refund-policy">
                  Refund Policy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/terms">
                  Terms
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/privacy-policy">
                  Privacy & Policy
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="bodyMedium">Information</h1>
              <p className="my-2">
                <Link className="nav-link" to="/how-to-bye">
                  How to buy
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </p>
              <p className="my-2">
                <Link className="nav-link" to="/complain">
                  Complain
                </Link>
              </p>
            </div>
            <div className="col-md-4">
              <h1 className="bodyMedium">About</h1>
              <p>
                <strong>Welcome to BuyToday</strong>, your one-stop destination
                for quality products and exceptional service!
              </p>
              <img className="w-75" src={Logo} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-3 text-center">
        <p className="text-white bodySmal">All Rights Reserved </p>
      </div>
    </div>
  );
};

export default Footer;
