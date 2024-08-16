import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import Card from 'react-bootstrap/Card';

import { iconMapper } from 'utils/icon-mapper.jsx';

function ServiceCard(props) {
  const {
    body,
    icon,
    title,
  } = props;

  return (
    <Card
      className={`service-card-${icon} text-center`}
    >
      <div className="service-icon">
        <div className="icon-border" >
          {iconMapper(icon, 48)}
        </div>
      </div>
      <h5>
        {title}
      </h5>
      <p>
        {body}
      </p>
    </Card>
  );
}

export default ServiceCard;