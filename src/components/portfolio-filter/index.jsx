import React from 'react';
import PropTypes from 'prop-types';

import './style.scss'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

// Override bootstrap stylings

function CardFilter(props) {
  const { setCat, setActive, activeCat, items } = props;

  const onClick = (e) => {
    setCat(e.target.getAttribute("data-filter"));
    setActive(e.target.id);
  }

  return (
    <ButtonGroup className={"portfolio-filter-group"}>
      {
        items.map((e) => {
          return (
            <Button
              data-filter={e.filter}
              key={e.id}
              id={e.id}
              onClick={onClick}
              active={activeCat === e.id}
            >
              {e.text}
            </Button>
          );
        })
      }
    </ButtonGroup>
  );
}

CardFilter.propTypes = {
  setCat: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  activeCat: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    filter: PropTypes.array.isRequired,
  })),
}

export default CardFilter;


    // <ListGroup horizontal as='ul'>
    //   {
    //     items.map((e) => {
    //       return (
    //         <ListGroup.Item
    //           as='li'
    //           data-filter={e.filter}
    //           key={e.id}
    //           id={e.id}
    //           onClick={onClick}
    //           active={activeCat === e.id}
    //         >
    //           {e.text}
    //         </ListGroup.Item>
    //       );
    //     })
    //   }
    // </ListGroup>
// import ListGroup from 'react-bootstrap/ListGroup';