import React from 'react';

import './style.scss';

import ListGroup from 'react-bootstrap/ListGroup';

import { iconMapper } from 'utils/icon-mapper';

function ContactInfo() {

  return (
    <ListGroup variant="flush" className="contact-info">
      <ListGroup.Item>
        <span className="left">
          {iconMapper("user")} Name
        </span>
        <span className="right">
          Joey Chung
        </span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="left">
        {iconMapper("location")} Location
        </span>
        <span className="right">
          Bay Area, CA
        </span>
      </ListGroup.Item>
      <ListGroup.Item>
        <span className="left">
        {iconMapper("email")} Email
        </span>
        <span className="right">
          <a href="joeychung960@gmail.com">joeychung960@gmail.com</a>
        </span>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ContactInfo;