import React, { useState } from 'react';
import {
  Routes,
  Route,
  NavLink,
  useLocation,
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
  const location = useLocation();

  return (
    <>
      <Dropdown className="top-menu" align="end">
        <Dropdown.Toggle>
          {iconMapper("hamburger", 30)}
        </Dropdown.Toggle>
        <Dropdown.Menu className="top-dropdown-menu">
          <Dropdown.Item as="nav" className="menu-item">
            <NavLink to="/">
              <div>
                {iconMapper("user", 30)}
              </div>
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item as="nav" className="menu-item">
            <NavLink to="/resume">
              <div>
                {iconMapper("resume", 30)}
              </div>
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item as="nav" className="menu-item">
            <NavLink to="/portfolio">
              <div>
                {iconMapper("work", 30)}
              </div>
            </NavLink>
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
    </>
  )
}

export default TopMenu;