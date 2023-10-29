const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <img
          className="logo"
          src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
          alt="logo"
        />
      </div>
      <div className="header-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
