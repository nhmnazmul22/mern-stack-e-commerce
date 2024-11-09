import Lottie from "lottie-react";
import React from "react";
import Skeleton from "react-loading-skeleton";
import imagePlaceholder from "../assets/images/image.json";

const SliderSkeleton = () => {
  return (
    <div className="container-fluid hero-bg">
      <div className="row">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
            <Skeleton count={7} />
            <br />
            <Skeleton count={7} />
          </div>
          <div className="col-12 col-lg-5 col-sm-12 col-md-5 ">
            <Lottie
              className="w-75 m-auto"
              animationData={imagePlaceholder}
              loop={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSkeleton;
