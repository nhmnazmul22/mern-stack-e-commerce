import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ProductStore from "../../store/ProductStore";

const ProductImages = () => {
  const { ProductDetails } = ProductStore();

  //   const images = [
  //     {
  //       original: ProductDetails[0].details.img1,
  //       thumbnail: ProductDetails[0].details.img1,
  //     },
  //     {
  //       original: ProductDetails[0].details.img2,
  //       thumbnail: ProductDetails[0].details.img2,
  //     },
  //     {
  //       original: ProductDetails[0].details.img3,
  //       thumbnail: ProductDetails[0].details.img3,
  //     },
  //     {
  //       original: ProductDetails[0].details.img4,
  //       thumbnail: ProductDetails[0].details.img4,
  //     },
  //     {
  //       original: ProductDetails[0].details.img5,
  //       thumbnail: ProductDetails[0].details.img5,
  //     },
  //     {
  //       original: ProductDetails[0].details.img6,
  //       thumbnail: ProductDetails[0].details.img6,
  //     },
  //     {
  //       original: ProductDetails[0].details.img7,
  //       thumbnail: ProductDetails[0].details.img7,
  //     },
  //     {
  //       original: ProductDetails[0].details.img8,
  //       thumbnail: ProductDetails[0].details.img8,
  //     },
  //   ];

  const images = [
    {
      original: "https://i.ibb.co.com/0Byx1z6/macbook.jpg",
      thumbnail: "https://i.ibb.co.com/0Byx1z6/macbook.jpg",
    },
    {
      original: "https://i.ibb.co.com/HdPjP53/iphone.png",
      thumbnail: "https://i.ibb.co.com/HdPjP53/iphone.png",
    },
  ];

  return <ImageGallery autoPlay={true} items={images} />;
};

export default ProductImages;
