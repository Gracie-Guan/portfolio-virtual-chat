import React from 'react';
import { Tag, Grid, Column } from '@carbon/react';
import Group from '../assets/img/Group.png';
import Role from '../assets/img/Multitask.png';
import Time from '../assets/img/Time-lapse.png';
import Growth from '../assets/img/Productivity.png';
import './Overview.scss';

const ProjectOverview = ({ title, subtitle, tags, role, timeframe, teamSize, productStage, imageSrc }) => {
  return (
    <div className="project-overview">
      <Grid narrow>
        <Column lg={16} md={8} sm={4}>
          <h1 className='title'>{title}</h1>
        </Column>
        <Column lg={8} md={4} sm={4} className="content-column">
          <div className="upper-content">
            <h2 className='subtitle'>{subtitle}</h2>
            <div className="project-tags">
              {tags.map((tag, index) => (
                <Tag key={index} type="blue" size='md'>
                  {tag}
                </Tag>
              ))}
            </div>
          </div>
          
          <Grid narrow className="project-details">
            <Column sm={2} md={2} lg={4}>
              <div className="detail-item">
                <img src={Role} alt='Role in the project' className='overview-icon'/>
                <div>
                  <h3>Role</h3>
                  <p>{role}</p>
                </div>
              </div>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <div className="detail-item">
                <img src={Time} alt='time frame for the project' className='overview-icon'/>
                <div>
                  <h3>Time frame</h3>
                  <p>{timeframe}</p>
                </div>
              </div>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <div className="detail-item">
                <img src={Group} alt='team size' className='overview-icon' />
                <div>
                  <h3>Team size</h3>
                  <p>{teamSize}</p>
                </div>
              </div>
            </Column>
            <Column sm={2} md={2} lg={4}>
              <div className="detail-item">
                <img src={Growth} alt='product stage' className='overview-icon'/>
                <div>
                  <h3>Product Stage</h3>
                  <p>{productStage}</p>
                </div>
              </div>
            </Column>
          </Grid>
        </Column>
        
        <Column lg={8} md={4} sm={4} className="image-column">
          <img src={imageSrc} alt="Project screenshot" className="project-image" />
        </Column>
      </Grid>
    </div>
  );
};

export default ProjectOverview;