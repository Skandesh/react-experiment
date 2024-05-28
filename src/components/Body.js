import RestaurantCard from './RestaurantCard';
import React, { useState, useEffect } from 'react';

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState();

  // useEffect(() => {
  //   fetchRestaurants();
  // }, [third]);

  const fetchRestaurants = async () => {
    const response = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING'
    );
    const data = await response.json();
    setListOfRestaurants(data);
  };
  return (
    <div className="body">
      <div className="body-search">
        <input type="text" placeholder="Search Restaurant" />
      </div>
      <div className="filter>">
        <button
          className="filter-btn"
          onClick={() => {
            alert('Hey');
          }}
        >
          Top rated
        </button>
      </div>
      <div className="res-container">
        {console.log('usestate', React.useState([23, 4]))}
        <RestaurantCard resName="Meghna Foods" cuisine="South Indian" />
        <RestaurantCard resName="Cool sips" cuisine="Asian" />
        <RestaurantCard resName="Burger King" cuisine="Pizza, Fast Food" />
        <RestaurantCard resName="Kwality Walls" cuisine="Ice cream" />
        <RestaurantCard resName="Kwality Walls" cuisine="Ice cream" />
      </div>
    </div>
  );
};
