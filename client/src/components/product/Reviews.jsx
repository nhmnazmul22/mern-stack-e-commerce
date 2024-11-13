import React from "react";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ProductStore from "../../store/ProductStore";

const Reviews = () => {
  const { ReviewList } = ProductStore();
  return (
    <ul className="list-group list-group-flush mt-4">
      {ReviewList !== null ? (
        ReviewList.map((item, i) => (
          <li
            key={item._id}
            class="list-group-item shadow-sm mb-3 rounded p-md-3"
          >
            <h6>
              <i class="bi bi-person-circle me-2"></i>
              {item.profile.cus_name}
            </h6>
            <p>{item.des}</p>
            <StarRatings
              rating={parseFloat(item.rating)}
              starRatedColor="red"
              starDimension="15px"
              starSpacing="2px"
            />
          </li>
        ))
      ) : (
        <li className="list-group-item shadow-sm mb-3 rounded p-md-3">
          No reviews yet.
        </li>
      )}
    </ul>
  );
};

export default Reviews;
