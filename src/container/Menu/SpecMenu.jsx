import React from 'react';

import { SubHeading, MenuItem } from '../../components'

import './SpecMenu.css'

const SpecMenu = () => (
  <div className="app_specMenu flex_center section_padding" id="menu">
    <div className="app_specMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext_cormorant">Today’s Special</h1>
    </div>
  </div>
);

export default SpecMenu;
