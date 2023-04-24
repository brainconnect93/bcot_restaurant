import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  return (
    <div className="app_gallery flec_center">
      <div className="app_gallery-content">
        <SubHeading title="Instagram" />
      </div>
    </div>
  );
}

export default Gallery;
