import React, { useState, useEffect } from 'react';

import './style.scss';

import Profile from 'components/profile';
import ProfileCard from 'components/profile-card';

function Landing() {
  const [profileTop, setProfileTop] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = e => {
      const scrollTop = Math.min(500, e.target.documentElement.scrollTop);
      if (scrollTop !== profileTop) {
        setProfileTop(scrollTop);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [profileTop]);

  return(
    <React.Fragment>
      <Profile profileTop={profileTop} profileHeight={500} />
      <div className="page-container" style={{ marginTop: (500 - profileTop) }}>
        <ProfileCard />
      </div>
    </React.Fragment>
  );
}

export default Landing;