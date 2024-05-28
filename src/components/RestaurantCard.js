const RestaurantCard = (props) => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card-image">
        <img
          className="res-logo"
          src="https://b.zmtcdn.com/data/pictures/1/20721351/ad43c681de293aed8a77f5776f10d415_o2_featured_v2.jpg"
          alt="restaurant-image"
        />
      </div>
      <div className="restaurant-card-content">
        <div className="restaurant-card-title">
          <h3 className="restaurant-card-title-text">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.resName}
            </a>
          </h3>
        </div>
        <h4 className="restaurant-cuisine-type">{props.cuisine}</h4>
        <div className="restaurant-card-rating">4.1 stars</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
