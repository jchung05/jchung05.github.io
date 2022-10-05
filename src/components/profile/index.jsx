import React from 'react';
// import PropTypes from 'prop-types';

import { iconMapper } from 'utils/icon-mapper';

import pfp from './profile.png';
import './style.scss';

import Footer from 'components/footer';

// TODO: Move footer information out of this file

function Profile(props) {
  const { profileHeight, profileTop } = props;
  const opacity = (profileHeight - profileTop) / profileHeight;

  return (
    <div className="profile" style={{ opacity: opacity }}>
      <div className="profile-title">
        <span className="black">JOEY</span> <span className="orange">CODES</span>
      </div>
      <img className="pfp-img" src={pfp} width={175}/>
      {/* <div className="profile-info">
        <h1>Joey Chung</h1>
        <h4>Full Stack &amp; Cloud Engineer</h4>
        <h6>{iconMapper("map")} Bay Area, CA</h6>
      </div> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Profile;

/*

      <header>
        <h1><span style={{color:"black"}}>JOEY</span> <span style={{color:"orange"}}>CODES</span></h1>
      </header>
*/

