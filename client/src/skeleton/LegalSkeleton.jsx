import React from "react";
import Skeleton from "react-loading-skeleton";

const LegalSkeleton = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5">
          <Skeleton count={32} />
        </div>
      </div>
    </div>
  );
};

export default LegalSkeleton;
