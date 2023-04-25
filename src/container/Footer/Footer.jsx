import React from 'react';
import {
  FiFacebook, FiTwitter, FiInstagram, FiYoutube,
} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';
import { gericht, spoon } from '../../constants/images';

const Footer = () => (
  <div className="app_footer section_padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app_footer-links">
      <div className="app_footer-links-contact">
        <h2 className="app_footer-header">Contact Us</h2>
        <p className="p_opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p_opensans">+1 234 567 890</p>
        <p className="p_opensans">+1 212-344-1230</p>
      </div>

      <div className="app_footer-links-logo">
        <img src={gericht} alt="footer_logo" />
        <p className="p_opensans">The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={spoon} alt="spoon" style={{ marginTop: 15 }} />
        <div className="app_footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
        </div>
      </div>

      <div className="app_footer-links-work">
        <h2 className="app_footer-header">Working Hours</h2>
        <p className="p_opensans">Monday-Friday</p>
        <p className="p_opensans">08:00 Am-12:00 Am</p>
        <p className="p_opensans">Saturday-Sunday</p>
        <p className="p_opensans">07:00 Am-11:00 Pm</p>
      </div>
    </div>

    <div className="app_footer-copy">
      <p className="p_opensans">2021 Gerícht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
