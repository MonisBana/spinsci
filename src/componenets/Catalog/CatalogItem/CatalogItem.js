import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Fade } from "react-reveal";

const CatalogItem = ({ product, incFavourites, decFavorites }) => {
  const [toggleFav, setToggleFav] = useState(false);
  const handleFav = () => {
    if (toggleFav) {
      decFavorites();
      setToggleFav(false);
    } else {
      incFavourites();
      setToggleFav(true);
    }
  };
  return (
    <Fade>
      <div className="flex flex-col text-center m-4 shadow-lg rounded-xl px-1 py-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          height="300"
          width="250"
          className="h-48 m-auto mt-2"
        />
        <h3 className="font-bold text-xl dark-violet mt-1">{product.title}</h3>
        <div className="flex flex-col lg:flex-row justify-around  mx-4 lg:mx-12 items-center">
          <p>
            <span className="lg:text-2xl text-md text-gray-600 line-through ml-2">
              ₹{" "}
              {Math.round(
                product.price * (100 / (100 - product.discountPercentage))
              )}
            </span>
            <span className="lg:text-2xl text-md text-red-800 font-bold ml-2">
              ₹ {product.price}
            </span>
          </p>
          <p className="my-auto">
            <span className="lg:text-xl text-sm mr-1 font-semibold">
              {Math.round(product.rating * 10) / 10}
            </span>
            <span>
              <AiFillStar className="inline fill-yellow-500 w-6 h-6 mb-1" />
            </span>
            {toggleFav && (
              <BsHeartFill
                className="inline fill-red-500 lg:w-6 lg:h-6 w-5 h-5 mb-1 ml-2"
                onClick={() => handleFav()}
              />
            )}
            {!toggleFav && (
              <BsHeart
                className="inline lg:w-6 lg:h-6 w-5 h-5 mb-1 ml-3"
                onClick={() => handleFav()}
              />
            )}
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default CatalogItem;
