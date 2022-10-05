import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ProjectCard(props) {
  const {
      url,
      urlTitle,
      imgPath,
      imgAlt,
      dataCat,
      name,
      subtitle,
      desc,
  } = props;

  const IMG_PATH_ROOT = "images/portfolio/";
  const path = `${IMG_PATH_ROOT}${imgPath}`

  const cardComponent = () => {
    return (
      <Card
        className="project-card"
        data-cat={dataCat}
      >
        <Card.Img
          className={`card-img`}
          variant="top"
          src={path}
          alt={imgAlt}
        />
        <Card.ImgOverlay
          className={`card-overlay`}
        >
          <Card.Title className={"text-center card-title"} >{name}</Card.Title>
          <Card.Subtitle className={"text-center card-subtitle"} >{subtitle}</Card.Subtitle>
          <Card.Text>
            {desc}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
  }

  return (
    <React.Fragment>
      <Col style={{margin: '10px 0 10px 0'}}>
        {
          url ?
            <a
              href={url}
              title={urlTitle}
              className="project-card-link"
              target="_blank"
              rel="noreferrer"
            >
              {cardComponent()}
            </a> :
            cardComponent()
        }
      </Col>
    </React.Fragment>
  );
}

ProjectCard.propTypes = {
  url: PropTypes.string,
  active: PropTypes.bool.isRequired, // Whether the project is alive or not
  urlTitle: PropTypes.string,
  imgPath: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  dataCat: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  desc: PropTypes.string,
}

export default ProjectCard;