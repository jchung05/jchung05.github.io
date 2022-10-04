import React from 'react';
import PropTypes from 'prop-types';

import { iconMapper } from 'utils/icon-mapper';

import './style.scss';

function ExpBlock(props) {
  const {
    entity,
    blockKey,
    title,
    type,
    descriptions,
    dates: {
      start,
      end,
    }
  } = props;

  function makeDescriptions() {
    return (
      <ul className={`${blockKey}-list`}>
        {descriptions.map((d,i) => {
            return (
              <li key={i}>{d}</li>
            )
          })
        }
      </ul>
    )
  }

  function makeDateRange() {
    if (!start && !end) {
      return '';
    }

    const isRange = new Set(["work", "edu"]);

    return (
      <span className="date-span">
        {iconMapper("calendar")}
        {
          isRange.has(type) ?
            ` ${start} - ${end || "Current"}` :
            ` ${start}`
        }
      </span>
    )
  }

  return (
    <div className={"exp-block"} key={blockKey}>
      <div>
        <h6>
          {iconMapper(type)}
          {` ${entity}`}
        </h6>
      </div>
      <div>
        {title}
        {makeDateRange()}
      </div>
      <div>{makeDescriptions()}</div>
    </div>
  );
}

ExpBlock.propTypes = {
  entity: PropTypes.string.isRequired,
  blockKey: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  dates: PropTypes.shape({
    start: PropTypes.string.isRequired,
    end: PropTypes.string,
  })
}

export default ExpBlock;