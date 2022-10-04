import React, { useState } from 'react';

import './style.scss';

import Profile from 'components/profile';
import ProfileCard from 'components/profile-card';

function Landing(props) {
  return(
    <React.Fragment>
      <Profile />
      <div className="page-container">
        <ProfileCard />
      </div>
    </React.Fragment>
  );
}

export default Landing;