import "./Footer.css";
import Envelope from "../Assets/images/env2.png";
import logo from "../Assets/images/logo1.jpg";
import fb from "../Assets/images/fb.svg";
import insta from "../Assets/images/insta2.png";
import yt from "../Assets/images/yt.png";
import x from "../Assets/images/x.webp";
import gmail from "../Assets/images/gm.webp";

function Footer() {
  return (
    <div className="Footer">
      <div className="Yellow">
        <div>
          <div className="newsletter">
            <img src={Envelope} alt="Envelope image" className="env" />
            <p>
              <b>SIGN UP FOR NEWSLETTER</b>
            </p>
          </div>
          <p>Subscribe our newsletter to get the latest news.</p>
        </div>
        <div className="Input">
          <input type="text" placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="Black">
        <div style={{ color: "white" }}>
          <div className="logo">
            <img id="logoImg" src={logo} alt="img" />
            <h1>AADI's MART</h1>
          </div>
          <div className="links">
            <img src={fb} alt="Facebook Logo Img" />
            <img src={insta} alt="Instagram Logo Img" />
            <img src={yt} alt="Youtube Logo Img" />
            <img src={x} alt="X Logo Img" />
            <img src={gmail} alt="Gmail Logo Img" />
          </div>
          <div className="navs">
            <a href="">Home</a>
            <a href="">About Us</a>
            <a href="">News</a>
            <a href="">Contact Us</a>
          </div>
          <div>
            <p>Powered By AadiBaba Your Store © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
