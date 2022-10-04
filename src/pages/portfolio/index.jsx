import React, { useState } from 'react';

import portData from './portfolio.json';

import ProjectCard from 'components/project-card';
import CardFilter from 'components/portfolio-filter';
import './style.scss';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

// TODO: Update font type and color (higher up)
// TODO: Update filter bar stylings

function Portfolio(props) {
  const items = [
    {id: "all", text: "All", filter: ["catWeb", "catMobile", "catSoftware", "catBlockchain", "catOther"]},
    {id: "web", text: "Web Dev", filter: ["catWeb"]},
    {id: "mobile", text: "Mobile Dev", filter: ["catMobile"]},
    {id: "blockchain", text: "Blockchain Dev", filter: ["catBlockchain"]}
  ];
  const [category, setCategory] = useState(items[0].filter);
  const [activeCat, setActiveCat] = useState(items[0].id);

  const filterCards = (data) => {
    return (data.filter(e => category.includes(e.dataCat)));
  }

  const getCards = (data) => {
    console.log(filterCards(data), category);
    return (
      filterCards(data).map((e) => {
        return (
            <ProjectCard {...e} key={e.name}/>
        );
      })
    )
  }

  return(
    <React.Fragment>
      <div className="page-container portfolio">
        <h1>Portfolio - My Works</h1>
        <CardFilter
          setCat={setCategory}
          setActive={setActiveCat}
          activeCat={activeCat}
          items={items}
        />
        <Container fluid className={"resume-container"}>
          <Row xs={1} md={2} lg={3}>
            {getCards(portData)}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Portfolio;