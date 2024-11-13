import parse from "html-react-parser";
import React, { useState } from "react";
import ProductStore from "../../store/ProductStore";
import DetailsSkeleton from "./../../skeleton/DetailsSkeleton";
import ProductImages from "./ProductImages";
import Reviews from "./Reviews";
const Details = () => {
  const { ProductDetails, ReviewList } = ProductStore();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  if (ProductDetails === null) {
    return <DetailsSkeleton />;
  } else {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-7 p-3">
            <ProductImages />
          </div>
          <div className="col-md-5 p-3">
            <h4>{ProductDetails[0].title}</h4>
            <p className="text-muted bodySmall my-1">
              Category: {ProductDetails[0].category.categoryName}
            </p>
            <p className="text-muted bodySmall my-1">
              Brand: {ProductDetails[0].brand.brandName}
            </p>
            <p className="bodySmall mb-2 mt-1">{ProductDetails[0].shortDes}</p>
            <p className="text-secondary bodyXLarge">
              Price:{" "}
              {ProductDetails[0].discount ? (
                <>
                  <strike>${ProductDetails[0].price}</strike>
                  <span className="text-dark fw-medium ms-1">
                    $
                    {parseFloat(ProductDetails[0].price) -
                      parseFloat(ProductDetails[0].discountPrice)}
                  </span>
                </>
              ) : (
                <span>${ProductDetails[0].price}</span>
              )}
            </p>
            <div className="row">
              <div className="col-4 p-2">
                <label className="bodySmall">Size</label>
                <select className="form-control my-2 form-select">
                  <option value="">Size</option>
                  {ProductDetails[0].details.size.split(",").map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4 p-2">
                <label className="bodySmall">Color</label>
                <select className="form-control my-2 form-select">
                  <option value="">Color</option>
                  {ProductDetails[0].details.color.split(",").map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-4 p-2">
                <label className="bodySmall">Quantity</label>
                <div className="input-group my-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={decrementQuantity}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    className="form-control bg-light text-center"
                    value={quantity}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={incrementQuantity}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="col-4 p-2">
                <button className="btn w-100 btn-success">Add to Cart</button>
              </div>
              <div className="col-4 p-2">
                <button className="btn w-100 btn-success">Add to Wish</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="Speci-tab"
                data-bs-toggle="tab"
                data-bs-target="#Speci-tab-pane"
                type="button"
                role="tab"
                aria-controls="Speci-tab-pane"
                aria-selected="true"
              >
                Specifications
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="Review-tab"
                data-bs-toggle="tab"
                data-bs-target="#Review-tab-pane"
                type="button"
                role="tab"
                aria-controls="Review-tab-pane"
                aria-selected="false"
              >
                Review
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="Speci-tab-pane"
              role="tabpanel"
              aria-labelledby="Specitab"
              tabIndex="0"
            >
              {parse(ProductDetails[0].details.des)}
            </div>
            <div
              className="tab-pane fade"
              id="Review-tab-pane"
              role="tabpanel"
              aria-labelledby="Review-tab"
              tabIndex="0"
            >
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Details;
