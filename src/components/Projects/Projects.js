import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cx from "classnames";
import styles from "./Projects.module.scss";
import ProjectCarousel from './ProjectCarousel';

const Projects = () => {
  return (
    <>
      <Container className={cx("position-relative", styles.projectsContainer)} fluid>
        <Row>
          <Col>
            <h1 className='display-2 fw-bold'>My Projects</h1>
          </Col>

          <Col className={cx(styles.projectBgCol, '')}>
          </Col>
        </Row>
        <Container className={cx(styles.projectCarouselContainer, 'position-absolute')}>
          <ProjectCarousel />
        </Container>
      </Container>
    </>
  )
}

export default Projects