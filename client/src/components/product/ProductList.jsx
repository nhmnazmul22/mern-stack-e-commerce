import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import ProductSkeleton from "./../../skeleton/ProductSkeleton";
import ProductStore from "./../../store/ProductStore";

const ProductList = () => {
  const [filter, setFilter] = useState({
    brandID: "",
    categoryID: "",
    maxPrice: "",
    minPrice: "",
  });
  const {
    ProductList,
    BrandList,
    BrandListRequest,
    CategoriesList,
    CategoriesListRequest,
    ListByKeywordRequest,
  } = ProductStore();

  const inputOnChange = (name, value) => {
    setFilter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    (async () => {
      BrandList === null ? await BrandListRequest() : null;
      CategoriesList === null ? await CategoriesListRequest() : null;

      const isEveryFieldEmpty = Object.values(filter).every(
        (value) => value === ""
      ); // Return true or false
      !isEveryFieldEmpty ? await ListByKeywordRequest(filter) : null;
    })();
  }, [filter]);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-3 p-2">
          <div className="card vh-100 p-3 shadow-sm">
            <label className="form-label mt-3" htmlFor="">
              Brands
            </label>
            <select
              value={filter.brandID}
              onChange={(e) => inputOnChange("brandID", e.target.value)}
              className="form-control form-select"
            >
              <option value="">Choose Brand</option>
              {BrandList !== null ? (
                BrandList.map((brand, i) => (
                  <option key={brand._id} value={brand._id}>
                    {brand.brandName}
                  </option>
                ))
              ) : (
                <option></option>
              )}
            </select>
            <label className="form-label mt-3" htmlFor="">
              Categories
            </label>
            <select
              value={filter.categoryID}
              onChange={(e) => inputOnChange("categoryID", e.target.value)}
              className="form-control form-select"
            >
              <option value="">Choose Category</option>
              {CategoriesList !== null ? (
                CategoriesList.map((category, i) => (
                  <option key={category._id} value={category._id}>
                    {category.categoryName}
                  </option>
                ))
              ) : (
                <option></option>
              )}
            </select>
            <label className="form-label mt-3" htmlFor="">
              Maximum Price ${filter.maxPrice}
            </label>
            <input
              min={0}
              max={1000000}
              step={1000}
              value={filter.maxPrice}
              onChange={(e) => inputOnChange("maxPrice", e.target.value)}
              type="range"
              className="form-range"
            />
            <label className="form-label mt-3" htmlFor="">
              Minimum Price ${filter.minPrice}
            </label>
            <input
              min={0}
              max={1000000}
              step={1000}
              value={filter.minPrice}
              onChange={(e) => inputOnChange("minPrice", e.target.value)}
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
                        to={`/product-details/${product._id}`}
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
                                  parseFloat(product.discountPrice)}
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
