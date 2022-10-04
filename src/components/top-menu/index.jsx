import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './style.scss';

import Landing from 'pages/landing';
import Resume from 'pages/resume';
import Portfolio from 'pages/portfolio';

// import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import { iconMapper } from 'utils/icon-mapper';
import { propTypes } from 'react-bootstrap/esm/Image';

function TopMenu() {

  return (
    <Router>
      <Dropdown className="top-menu" align="end">
        <Dropdown.Toggle>
          {iconMapper("hamburger", 30)}
        </Dropdown.Toggle>
        <Dropdown.Menu className="top-dropdown-menu">
          <Dropdown.Item as="div" className="menu-item">
            <Link to="/">
              <div>
                {iconMapper("user", 30)}
              </div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="div" className="menu-item">
            <Link to="/resume">
              <div>
                {iconMapper("tasks", 30)}
              </div>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item as="div" className="menu-item">
            <Link to="/portfolio">
              <div>
                {iconMapper("work", 30)}
              </div>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <ListGroup className="top-menu" as='ul'>
        <ListGroup.Item as='li'>
          <Link to="/">Home</Link>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <Link to="/resume">Resume</Link>
        </ListGroup.Item>
        <ListGroup.Item as='li'>
          <Link to="/portfolio">Portfolio</Link>
        </ListGroup.Item>
      </ListGroup> */}

      <Routes>
        <Route path='/resume' element={<Resume />} />
        <Route path='/' element={<Landing />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </Router>
  )
}

export default TopMenu;