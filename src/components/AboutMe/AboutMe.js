import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import cx from "classnames";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {

  const AboutData = () => {
    return (
      <>
        <Container className={cx(styles.aboutData, 'pe-5 ,pb-5')}>
          <h1 className={cx('sectionHeader display-1 fw-bold', styles.aboutDataTitle)}>About Me</h1>
          <Container className={cx(styles.aboutDataContent, 'p-0')} fluid>
            <blockquote className='blockquote'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis adipisci dolorem, nemo placeat amet inventore aperiam voluptate. Nihil, incidunt illo impedit placeat voluptas nam tempora eum recusandae distinctio necessitatibus?
              </p>
            </blockquote>
          </Container>
        </Container>
      </>)
  }
  return (
    <>
      <Container fluid >
        <Row>
          <Col xl={6} lg={6} md={6} sm={12} className={cx('', styles.aboutDataCol)}>
            <AboutData />
          </Col>
          <Col xl={6} lg={6} md={6} sm={12} className={styles.aboutBgCol}>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AboutMe