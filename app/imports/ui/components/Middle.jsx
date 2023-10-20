import React from 'react';
import { Row, Col, Button, Image, Container } from 'react-bootstrap';
import { CheckCircleFill } from 'react-bootstrap-icons';

const Middle = () => (
  <>
    <div style={{ height: 75 }} />

    <Container>
      <Row className="justify-content-center pt-4" style={{ marginLeft: 95 }}>

        <Col className="my-auto">
          <h1 style={{ fontSize: '300%' }}><strong>Surf the web with no</strong></h1>
          <h1 style={{ marginBottom: 20, fontSize: '300%' }}><strong>annoying ads</strong></h1>
          <div style={{ fontSize: '110%' }}><CheckCircleFill className="mx-2" style={{ color: '#087cd4' }} />Experience a cleaner, faster web and block annoying ads</div>
          <div style={{ fontSize: '110%' }}><CheckCircleFill className="mx-2" style={{ color: '#087cd4' }} />Acceptable Ads are allowed by default to support websites</div>
          <div style={{ fontSize: '110%' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(<a href="/#">learn more</a>)</div>
          <div style={{ marginBottom: 20, fontSize: '110%' }}><CheckCircleFill className="mx-2" style={{ color: '#087cd4' }} />Adblock Plus is free and open source (<a href="/#">GPLv3+</a>)</div>
          <p style={{ marginBottom: 5, fontSize: '90%' }}>By clicking the button below, you agree to our <a href="/#">Terms of Use.</a></p>
          <Button variant="success" id="buttons">
            <Image src="https://www.freepnglogos.com/uploads/google-chrome-png-logo/google-chrome-logo-png-0.png" alt="" height="40px" width="40px" />
            <strong>&nbsp;&nbsp;GET ADBLOCK PLUS FOR CHROME</strong>
          </Button>
          <p style={{ marginTop: 20, fontWeight: 400 }}><a href="/#">Download Adblock Plus for another browser</a></p>
        </Col>

        <Col style={{ marginLeft: -30 }}>
          <Image src="https://adblockplus.org/img/hero-ui-illustration.svg" alt="" height="547.34" width="534px" />
        </Col>

      </Row>
    </Container>

    <div style={{ height: 75 }} />
  </>
);

export default Middle;
