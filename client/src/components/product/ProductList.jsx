import React from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ProductSkeleton from "./../../skeleton/ProductSkeleton";
import ProductStore from "./../../store/ProductStore";

const ProductList = () => {
  const { ProductList } = ProductStore();

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3 p-2">
          <div className="card vh-100 p-3 shadow-sm">
            <label className="form-label mt-3" htmlFor="">
              Brands
            </label>
            <select className="form-control form-select">
              <option value="">Choose Brand</option>
            </select>
            <label className="form-label mt-3" htmlFor="">
              Categories
            </label>
            <select className="form-control form-select">
              <option value="">Choose Category</option>
            </select>
            <label className="form-label mt-3" htmlFor="">
              Maximum Price ${}
            </label>
            <input
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range"
            />
            <label className="form-label mt-3" htmlFor="">
              Minimum Price ${}
            </label>
            <input
              min={0}
              max={1000000}
              step={1000}
              type="range"
              className="form-range"
            />
          </div>
        </div>
        <div className="col-md-9 p-2">
          {ProductList === null ? (
            <ProductSkeleton />
          ) : (
            <div className="container">
              <div className="row">
                {ProductList.length === 0 ? (
                  <div className="alert alert-light text-center" role="alert">
                    No products found.
                  </div>
                ) : (
                  ProductList.map((product) => (
                    <div
                      key={product._id}
                      className="col-md-3 p-2 col-lg-3 col-sm-6 col-12"
                    >
                      <Link
                        to={`product-details/${product._id}`}
                        className="card shadow-sm h-100 rounded-3 bg-white"
                      >
                        <img className="w-100 rounded-top-2" src="" />
                        <div className="card-body">
                          <p className="bodySmall text-secondary my-1">
                            {product.title}
                          </p>
                          <p className="bodyMedium text-dark my-1">
                            Price:{" "}
                            <span
                              className={
                                product.discount
                                  ? "text-decoration-line-through"
                                  : ""
                              }
                            >
                              ${product.price}
                            </span>{" "}
                            {product.discount && (
                              <span>
                                $
                                {parseFloat(product.price) -
                                  Number(product.discountPrice)}
                              </span>
                            )}
                          </p>
                          <StarRatings
                            rating={parseFloat(product.star)}
                            starRatedColor="red"
                            starDimension="15px"
                            starSpacing="2px"
                          />
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
