import React from 'react';

import { SubHeading } from '../../components';
import { findus } from '../../constants/images';

const Findus = () => (
  <div className="app_bg app_wrapper section_padding" id="contact">
    <div className="app_wrapper-info">
      <SubHeading title="Contact" />
      <h1 className="headtext_cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>

      <div className="app_wrapper-content">
        <p className="p_opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p_cormorant" style={{ color: '#dcca87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p_opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p_opensans"></p>
      </div>
    </div>

    <div className="app_wrapper-img">
      <img src={findus} alt="find Us" />
    </div>
  </div>
);

export default Findus;
