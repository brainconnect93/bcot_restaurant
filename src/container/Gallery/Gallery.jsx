import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { data } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null)
  return (
    <div className="app_gallery flec_center">
      <div className="app_gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext_cormorant">Photo Gallery</h1>
        <p className="p_opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom_button">View More</button>
      </div>

      <div className="app_gallery-img">
        <div className="app_gallery-img_container" ref={screenRef}>

        </div>
        <div className="app_gallery-img_arrow">
          <BsArrowLeftShort />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
