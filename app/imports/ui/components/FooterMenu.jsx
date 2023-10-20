import React from 'react';
import { Row, Col, Image, Container } from 'react-bootstrap';

const FooterMenu = () => (

  <Container fluid style={{ backgroundColor: 'rgb(90, 90, 90)', color: 'white' }}>
    <Container>
      <Row className="pt-5 pb-5">

        <Col className="my-auto" style={{ marginTop: 10, marginLeft: 95, marginRight: -70 }}>
          <p style={{ fontWeight: 400 }}>
            AS MENTIONED ON:
          </p>
        </Col>

        <Col className="my-auto" style={{ marginRight: -70 }}>
          <Image src="https://adblockplus.org/img/media/business-insider.png?3288789184" alt="" height="54" width="118.5" />
        </Col>

        <Col className="my-auto">
          <Image src="https://adblockplus.org/img/media/techcrunch.png?3288789184" alt="" height="30.53" width="180" />
        </Col>

        <Col className="my-auto" style={{ marginRight: -60 }}>
          <Image src="https://adblockplus.org/img/media/wsj.png?3288789184" alt="" height="54" width="110.48" />
        </Col>

        <Col className="my-auto" style={{ marginRight: -100 }}>
          <Image src="https://adblockplus.org/img/media/nyt.png?3288789184" alt="" height="54" width="75.34" />
        </Col>

        <Col className="my-auto">
          <Image src="https://adblockplus.org/img/media/mediapost.png?3288789184" alt="" height="54" width="48.1" />
        </Col>

      </Row>
    </Container>
  </Container>
);

export default FooterMenu;
