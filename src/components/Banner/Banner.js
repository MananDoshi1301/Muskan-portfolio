import React from 'react';
import styles from "./Banner.module.css";
import { Col, Container, Image, Row, Stack } from 'react-bootstrap';
import highResMGImg from "../../images/mg-hr-green-nobg.png";
import { ImArrowDown2 } from 'react-icons/im';

const Banner = () => {

  const BannerDataCol = () => {
    return (
      <Col className={styles.bannerDataCol}>
        <Container>
          <Stack gap={4}>
            <div>
              <Image src={highResMGImg} fluid />
            </div>
            <div>
              <Stack gap={2}>
                <h1 className='fw-bolder'>
                  Bringing innovation to Tech industry as ...
                </h1>
                <div>
                  <ImArrowDown2 size={50} lengthAdjust={100} color='#50A060' />
                </div>
              </Stack>
            </div>
          </Stack>
        </Container>
      </Col>
    )
  }

  const BannerImgCol = () => {
    return (
      <Col className={styles.bannerImgCol}></Col>
    )
  }

  return (
    <>
      <Container fluid>
        <Row>
          <BannerDataCol />
          <BannerImgCol />
        </Row>
      </Container>
    </>
  )
}

export default Banner