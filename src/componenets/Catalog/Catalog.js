import React from "react";
import CatalogItem from "./CatalogItem/CatalogItem";

const Catalog = ({ data, incFavourites, decFavorites }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      {data.map((product) => (
        <CatalogItem
          product={product}
          key={product.id}
          incFavourites={incFavourites}
          decFavorites={decFavorites}
        />
      ))}
    </div>
  );
};

export default Catalog;
