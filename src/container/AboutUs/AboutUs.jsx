import React from 'react';
import { G, spoon, knife } from '../../constants/images';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app_aboutus app_bg flex_center section_padding" id="about">
    <div className="app_aboutus_overlay flex_center">
      <img src={G} alt="g letter" />
    </div>

    <div className="app_aboutus-content flex_center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext_cormorant">About Us</h1>
        <img src={spoon} alt="about-spoon" className="about_img" />
        <p className="p_opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>

      <div className="app_aboutus-knife flex_center">
        <img src={knife} alt="knife" />
      </div>

      <div className="app_aboutus-content_history">
        <h1 className="headtext_cormorant">Our History</h1>
        <img src={spoon} alt="about-spoon" className="about_img" />
        <p className="p_opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type="button" className="custom_button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
