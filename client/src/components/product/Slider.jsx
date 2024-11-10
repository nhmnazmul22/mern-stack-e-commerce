import React from "react";
import { Link } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import SliderSkeleton from "./../../skeleton/SliderSkeleton";

const Slider = () => {
  const { SliderList } = ProductStore();

  if (SliderList === null) {
    return <SliderSkeleton />;
  } else {
    return (
      <div>
        <div
          id="carouselExampleDark"
          className="carousel hero-bg carousel-dark slide"
        >
          <div className="carousel-indicators">
            {SliderList.map((slider, i) => (
              <button
                key={slider._id}
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to={i} // Updated to use index `i`
                className={i === 0 ? "active" : ""}
                aria-current={i === 0 ? "true" : "false"}
                aria-label={`Slide ${i + 1}`} // Dynamically set aria-label
              ></button>
            ))}
          </div>
          <div className="carousel-inner py-5">
            {SliderList.map((slider, i) => {
              const activeClass =
                i === 0 ? "carousel-item active" : "carousel-item";
              return (
                <div
                  key={slider._id}
                  className={activeClass}
                  data-bs-interval="10000"
                >
                  <div className="container ">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                        <h1 className="headline-1">{slider.title}</h1>
                        <p>{slider.des}</p>
                        <Link to="" className="btn text-white btn-success px-5">
                          Buy Now
                        </Link>
                      </div>
                      <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                        <img src="" className="w-100" alt="..." />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="carousel-control-prev btn rounded-5"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next btn"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
};

export default Slider;
