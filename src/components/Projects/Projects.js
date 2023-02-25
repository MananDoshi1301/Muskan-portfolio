import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cx from "classnames";
import styles from "./Projects.module.css";
import ProjectCarousel from './ProjectCarousel';

const Projects = () => {
  return (
    <>
      <Container className={cx("", styles.projectsContainer)} fluid>
        <Row className={cx(styles.projectHeader)}>
          <Col xl={6} lg={6} md={6} sm={12}>
            <h1 className='sectionHeader display-2 fw-bold'>My Projects</h1>
          </Col>
          <div className={cx(styles.overlayCarouselDiv)}>
            <ProjectCarousel />
          </div>
          <Col xl={6} lg={6} md={6} sm={12} className={cx(styles.projectBgCol, '')}>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Projects