import React from 'react';
import { SubHeading } from '../../components';
import { welcome } from '../../constants/images';

import './Header.css';

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="home">
    <div className="app_wrapper-info">
      <SubHeading title="Chase the new Flavour" />
      <h1 className="app_header-h1">The Key to Fine Dining</h1>
      <p className="p_opensans" style={{ margin: '2rem 0', width: '80%' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
      <button type="button" className="custom_button">Explore Menu</button>
    </div>

    <div className="app_wrapper-img">
      <img src={welcome} alt="header-icon" />
    </div>
  </div>
);

export default Header;
