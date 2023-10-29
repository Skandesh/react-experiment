const Footer = () => {
  let getCurrentYear = new Date();
  getCurrentYear = getCurrentYear.getFullYear();

  return (
    <div className="footer">
      <div className="footer-copyright">
        <div className="footer-copyright-text">
          <p>Copyright © {getCurrentYear}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
