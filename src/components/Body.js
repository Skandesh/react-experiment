import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  return (
    <div className="body">
      <div className="body-search">
        <input type="text" placeholder="Search Restaurant" />
      </div>
      <div className="filter>">
        <button
          className="filter-btn"
          onClick={() => {
            alert("Hey");
          }}
        >
          Top rated
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard resName="Meghna Foods" cuisine="South Indian" />
        <RestaurantCard resName="Cool sips" cuisine="Asian" />
        <RestaurantCard resName="Burger King" cuisine="Pizza, Fast Food" />
        <RestaurantCard resName="Kwality Walls" cuisine="Ice cream" />
      </div>
    </div>
  );
};
