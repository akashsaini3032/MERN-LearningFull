
import logo from '../images/logo.png';

const Footer=()=>{
    return(
        <>
        <footer className="custom-footer">
  <div className="footer-top">
    {/* LOGO */}
    <div className="footer-logo">
      <img src={logo} alt="Logo" />
    </div>

    <div className="footer-content">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
          We serve love <br />
          Taste meets tradition <br />
          Food Fusion Restaurant <br />
          Also Home Delivery available
        </p>
      </div>
      <div className="footer-section">
        <h4>Links</h4>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Follow</h4>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>

    {/* PAYMENT ICONS */}
    <div className="payment-methods">
      <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
      <img src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" />
      <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
      <img src="https://img.icons8.com/color/48/000000/google-pay-india.png" alt="Google Pay" />
     
      
    </div>
  </div>

  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
  </div>
</footer>


        {/* <div id="footer">
          
    

      <footer className="custom-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We serve love <br />Taste meets tradition <br />Food Fusion Restaurant <br /> Also Home Delevery available</p>
          </div>
          <div className="footer-section">
            <h4>Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing </a></li>
              <li><a href="#">About US </a></li>
              <li><a href="#">Contact US </a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow</h4>
            <div className="social-links">
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    

        </div>         */}
        </>
    )
}

export default Footer;