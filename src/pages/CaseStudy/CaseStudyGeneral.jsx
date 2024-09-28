import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Column, Heading, Tile } from '@carbon/react';

const caseStudies = {
  1: { title: "Case Study 1", content: "..." },
  2: { title: "Case Study 2", content: "..." },
  // ... 其他案例研究
};

function CaseStudy() {
  let { id } = useParams();
  const study = caseStudies[id];

  return (
    <Grid>
      <Column lg={16} md={8} sm={4}>
        <Heading>{study.title}</Heading>
        <Tile>{study.content}</Tile>
      </Column>
    </Grid>
  );
}

export default CaseStudy;