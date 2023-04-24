import React from 'react';
import PropTypes from 'prop-types';
import './Laurels.css';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import { laurels } from '../../constants/images';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app_laurels_awards-card">
    <img src={imgUrl} alt="award" />
    <div className="app_laurels_award-card_content">
      <p className="p_cormorant" style={{ color: '#dcca87' }}>{title}</p>
      <p className="p_cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div className="app_bg app_wrapper section_padding" id="awards">
    <div className="app_wrapper-info">
      <SubHeading title="Awards &amp; Recognitions" />
      <h1 className="headtext_cormorant">Our Laurels</h1>

      <div className="app_laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    <div className="app_wrapper-img">
      <img src={laurels} alt="laurels" />
    </div>

  </div>
);

AwardCard.propTypes = {
  award: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Laurels;
