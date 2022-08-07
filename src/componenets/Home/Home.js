import React, { useState, useEffect } from "react";
import axios from "../../axios-base";
import Backdrop from "../Backdrop/Backdrop";
import Catalog from "../Catalog/Catalog";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";

const Home = () => {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState();
  const [categories, setCategories] = useState([]);
  const [showSideBar, setShowSideBar] = useState(false);
  const [favouritesCount, setFavouritesCount] = useState(0);
  const handleSideBar = (showSideBar) => {
    setShowSideBar(showSideBar);
  };
  const getCategories = (data) => {
    const categories = data && data.map((products) => products.category);

    setCategories([...new Set(categories)]);
  };
  const filterData = (category) => {
    setFilteredData(data.filter((product) => product.category === category));
    handleSideBar(false);
  };
  const getSearchedItems = (searchItems) => {
    setFilteredData(
      data.filter((product) =>
        product.title.toLowerCase().includes(searchItems)
      )
    );
  };
  const clearFilter = () => {
    setFilteredData(data);
    handleSideBar(false);
  };
  const incFavourites = () => {
    setFavouritesCount(favouritesCount + 1);
  };
  const decFavorites = () => {
    setFavouritesCount(favouritesCount - 1);
  };
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("products");
      setData(result.data["products"]);
      setFilteredData(result.data["products"]);
      getCategories(result.data["products"]);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar
        handleSideBar={handleSideBar}
        getSearchedItems={getSearchedItems}
      />
      <div className="flex flex-row justify-center">
        {filteredData && (
          <Catalog
            data={filteredData}
            incFavourites={incFavourites}
            decFavorites={decFavorites}
          />
        )}
      </div>
      {showSideBar && (
        <SideBar
          handleSideBar={handleSideBar}
          categories={categories}
          filterData={filterData}
          clearFilter={clearFilter}
          favouritesCount={favouritesCount}
        />
      )}
      {showSideBar && <Backdrop handleSideBar={handleSideBar} />}
    </div>
  );
};

export default Home;
