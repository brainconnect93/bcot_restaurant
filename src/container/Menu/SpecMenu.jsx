import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { menu } from '../../constants/images';
import { data } from '../../constants';

import './SpecMenu.css';

const SpecMenu = () => (
  <div className="app_specMenu flex_center section_padding" id="menu">
    <div className="app_specMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext_cormorant">Today’s Special</h1>
    </div>

    <div className="app_specMenu-menu">
      <div className="app_specMenu-menu_wine flex_center">
        <p className="app_specMenu-heading">Wine & Beer</p>
        <div className="app_soecMenu-menu_items">
          {data.wines.map((wine) => (
            <MenuItem key={wine.title} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app_specMenu-menu-img">
        <img src={menu} alt="menu_spec" />
      </div>

      <div className="app_specMenu-menu_cocktails flex_center">
        <p className="app_specMenu-heading">Wine & Beer</p>
        <div className="app_soecMenu-menu_items">
          {data.cocktails.map((cock) => (
            <MenuItem key={cock.title} title={cock.title} price={cock.price} tags={cock.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type="button" className="custom_button">View More</button>
    </div>
  </div>
);

export default SpecMenu;
