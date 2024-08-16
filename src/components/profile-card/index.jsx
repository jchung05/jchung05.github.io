import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'

import ContactInfo from 'components/contact-info';
import ServiceCard from 'components/service-card';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ProfileCard(props) {

  return (
    <div className="profile-wrapper">
      <div className="about">
        <h1>About Me</h1>
        {/* <h2>Joey Chung</h2> */}
        <ContactInfo />
        <table>
          {/* will make later */}
        </table>
        <p>I'm a passionate developer who looks forward to building challenging and world-changing products. I specialize in blockchain, distributed systems, and full-stack development.</p>
        <p>Aside from keeping up with current tech trends, I enjoy breakdancing and am a student of hip-hop. I also competed in fighting games and placed top 16 in regional majors.</p>
        <p>Feel free to contact me for any future opportunities!</p>
      </div>
      <div className="services">
        <div className="h2-wrapper">
          <h2>My Services</h2>
        </div>

        <Container fluid className={"service-container"}>
          <Row sm={1} md={2}>
            <Col>
              <ServiceCard
                icon={"fullstack"}
                title={"Full-Stack Development"}
                body={"I have years of feature development in various stacks (LAMP, Rails, Flask, MEAN) and WYSIWYG creation for CMS. My projects include a dating site with Flask and Postgres, and an interactive PDF catalog for client products."}
              />
            </Col>
            <Col>
              <ServiceCard
                icon={"cloud"}
                title={"Cloud Development"}
                body={"I've performed on-call duties with remote teams pertaining to cloud infrastructure and have experience working with GCP and Azure tools. I am also well acquainted with Kubernetes and cluster management."}
              />
            </Col>
            <Col>
              <ServiceCard
                icon={"writing"}
                title={"Technical Writing"}
                body={"I've proofread resumés and formal memos/documents both in school and industry teams such that the information being conveyed can be understood by anyone, ranging from layman to specialist."}
              />
            </Col>
            <Col>
              <ServiceCard
                icon={"btc"}
                title={"Blockchain Development"}
                body={"I've created smart contracts with Solidity, built MVPs for dApps with the full Truffle Suite, and reimplemented various algorithms such as proof of work and hash graphs."}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
}

export default ProfileCard;