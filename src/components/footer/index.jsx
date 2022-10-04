import React from 'react';

import { iconMapper } from 'utils/icon-mapper';

function Footer() {
  function makeFooterLinks(links) {

    const socialMediaMap = {
      "github": "https://github.com/jchung05",
      "linkedin": "https://linkedin.com/in/jchung05",
      "twitter": "https://twitter.com/@CountChococat",
      "medium": "https://medium.com/@joeychung960",
    }

    return (
      links.map((link) => {
        const mapping = socialMediaMap[link];
        const url = socialMediaMap[link];
        return (
          <a href={url} key={link} target="_blank" rel="noopener noreferrer">
            {iconMapper(link)}
          </a>
        )
      })
    )
  }

  return (
    <div className="footer">
      {makeFooterLinks(["github", "linkedin", /*"twitter",*/ "medium"])}
      {/* <div style={{marginTop: "10px"}}>&copy; 2022</div> */}
    </div>
  )
}

export default Footer;