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

import Dropdown from 'react-bootstrap/Dropdown';

import { iconMapper } from 'utils/icon-mapper';
import { propTypes } from 'react-bootstrap/esm/Image';

function TopMenu() {
  const location = useLocation();

  return (
    <>
      <Dropdown
        defaultShow
        autoClose={false}
        className="top-menu"
        align="end"
      >
        <Dropdown.Toggle>
          {iconMapper("hamburger", 30)}
        </Dropdown.Toggle>
        <Dropdown.Menu className="top-dropdown-menu">
          <NavLink end to="/">
            <Dropdown.Item as="nav" className="menu-item">
              <div>
                {iconMapper("user", 30)}
              </div>
            </Dropdown.Item>
          </NavLink>
          <NavLink to="/resume">
            <Dropdown.Item as="nav" className="menu-item">
              <div>
                {iconMapper("resume", 30)}
              </div>
            </Dropdown.Item>
          </NavLink>
          <NavLink to="/portfolio">
            <Dropdown.Item as="nav" className="menu-item">
              <div>
                {iconMapper("work", 30)}
              </div>
            </Dropdown.Item>
          </NavLink>
        </Dropdown.Menu>
      </Dropdown>

      <Routes>
        <Route path='/resume' element={<Resume />} />
        <Route path='/' element={<Landing />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  )
}

export default TopMenu;