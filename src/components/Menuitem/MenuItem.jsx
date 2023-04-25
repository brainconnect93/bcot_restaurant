import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app_menuitem">
    <div className="app_menuitem-head">
      <div className="app_menuitem-name">
        <p className="p_cormorant" style={{ color: '#dcca87' }}>{title}</p>
      </div>

      <div className="app_menuitem-dash" />

      <div className="app_menuitem-price">
        <p className="p_cormorant">{price}</p>
      </div>
    </div>

    <div className="app_menuitem-sub">
      <p className="p_opensans" style={{ color: '#aaa' }}>{tags}</p>
    </div>
  </div>
);

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default MenuItem;
