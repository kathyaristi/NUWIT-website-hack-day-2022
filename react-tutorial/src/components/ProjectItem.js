import React from 'react';
import styled from 'styled-components';
import ProjectImg from '../images/BROAD.png';
import { Link } from 'react-router-dom';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
`
export default function ProjectItem({
    img = ProjectImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  return (
      <ProjectItemStyles>
        <Link to="/projects" className="projectItem__img">
          <img src={img} alt="project img" />
        </Link>
        <div className="projectItem__info">
          <a>
            {title}
          </a>
          <p className="projectItem__desc">{desc}</p>
        </div>
      </ProjectItemStyles>
  )
}