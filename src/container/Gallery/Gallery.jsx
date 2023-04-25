import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import {
  gallery01, gallery02, gallery03, gallery04,
} from '../../constants/images';
import './Gallery.css';

const images = [gallery01, gallery02, gallery03, gallery04];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app_gallery flec_center">
      <div className="app_gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext_cormorant">Photo Gallery</h1>
        <p className="p_opensans" style={{ color: '#aaa', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom_button">View More</button>
      </div>

      <div className="app_gallery-img">
        <div className="app_gallery-img_container" ref={scrollRef}>
          {images.map((image, index) => (
            <div className="app_gallery-img_card flex_center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery_image-icon" />
            </div>
          ))}
        </div>
        <div className="app_gallery-img_arrow">
          <BsArrowLeftShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery_arrow-icon" onClick={() => scroll('left')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
