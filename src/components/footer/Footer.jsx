import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
  
      <footer>
        <div className="container">
          <div className="footer_cards">
            <div className="footer_card">
              <img src="/imgs/Logo.svg" alt="" />
              <p>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
              Cras egestas purus </p>
              <div className="footer_icons">
              <FaFacebook className="icons_footer"/>
              <FaTwitter className="icons_footer"/>
              <FaInstagram className="icons_footer"/>
              <FaPinterest className="icons_footer"/>
              <FaYoutube className="icons_footer"/>
              </div>
            </div>
            <div className="footer_card1">
              <h3>Category</h3>
              <p>Sofa</p>
              <p>Armchair</p>
              <p>Wing Chair</p>
              <p>Desk Chair</p>
              <p>wooden Chair</p>
              <p>Park Bench</p>
            </div>
            <div className="footer_card1">
              <h3>Support</h3>
              <p>Help & Support</p>
              <p>Tearms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Help</p>
            </div>
            <div className="footer_card2">
              <h3>Newsletter</h3>
              <div className="footer_btn">
                <input placeholder="Your email" type="email" />
                <button>Subscribe</button>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
            </div>
          </div>
        
        </div>
        <hr />
        <div className="container">
          <div className="footer_box">
            <h3>@ 2021 - Blogy - Designed & Develop by Zakirsoft</h3>
            <img src="/imgs/imgs10.png" alt="" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
