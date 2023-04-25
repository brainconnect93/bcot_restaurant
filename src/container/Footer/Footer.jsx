import React from 'react';
import {
  FiFacebook, FiTwitter, FiInstagram, FiYoutube,
} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';

const Footer = () => (
  <div className="app_footer section_padding">
    <FooterOverlay />
    <Newsletter />
  </div>
);

export default Footer;
