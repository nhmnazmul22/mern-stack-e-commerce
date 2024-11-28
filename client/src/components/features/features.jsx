import React from "react";
import FeatureStore from "../../store/FeaturesStore";
import FeaturesSkeleton from "./../../skeleton/FeaturesSkeleton";

const Features = () => {
  const { FeatureList } = FeatureStore();

  if (FeatureList === null) {
    return <FeaturesSkeleton />;
  } else {
    return (
      <div className="container section">
        <div className="row">
          {FeatureList.map((features, i) => (
            <div
              key={features._id}
              className="col-6 p-2 col-md-3 col-lg-3 col-sm-6"
            >
              <div className="card shadow-sm">
                <div className="card-body">
                  <div className="row">
                    <div className="col-3">
                      <img className="w-100" src={features.img} />
                    </div>
                    <div className="col-9">
                      <h3 className="bodyXLarge">{features.name}</h3>
                      <span className="bodySmal">{features.description}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Features;
