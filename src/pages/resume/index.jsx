import React from 'react';

import workData from './work-exp.json';
import eduData from './education.json';
import certData from './certificates.json';

import ExpBlock from 'components/exp-block';
import './style.scss';

// TODO: Update font type and color (higher up)

function Resume(props) {

  const getBlocks = (data, type) => {
    return (
      data.map((e) => {
        return (
          <ExpBlock
            entity={e.name}
            key={e.key}
            blockKey={e.key}
            title={e.title}
            type={type}
            descriptions={e.desc}
            dates={{start:e.sDate, end:e.eDate}}
          />
        );
      })
    )
  }

  return(
    <React.Fragment>
      <div className="page-container resume">
        <h1>Resume</h1>
        <div className="h2-wrapper">
          <h2>Experience</h2>
        </div>
        {getBlocks(workData, "work")}
        <div className="h2-wrapper">
          <h2>Education</h2>
        </div>
        {getBlocks(eduData, "edu")}
        <div className="h2-wrapper">
          <h2>Certifications &amp; Exams</h2>
        </div>
        {getBlocks(certData, "cert")}
      </div>
    </React.Fragment>
  );
}

export default Resume;