import React from 'react';
import './Chef.css';
import { chef } from '../../constants/images';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className="app_bg app_wrapper section_padding">
    <div className="app_wrapper-img app_wrapper-img-reverse">
      <img src={chef} alt="chef" />
    </div>

    <div className="app_wrapper-info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext_cormorant">What We Believe In</h1>
    </div>
  </div>
);

export default Chef;
