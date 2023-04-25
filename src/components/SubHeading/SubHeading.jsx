import React from 'react';
import PropTypes from 'prop-types';

import { spoon } from '../../constants/images';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p_cormorant">{title}</p>
    <img src={spoon} alt="spoon" className="spoon_img" />
  </div>
);

SubHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SubHeading;
