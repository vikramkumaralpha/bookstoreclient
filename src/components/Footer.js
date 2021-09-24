import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <Navbar fixed="bottom" variant="dark" style={{ background: '#2E8B57', padding: 10, fontSize: 15 }}>
      <Container>
        <Col lg={12} className="text-center text-white">
          <div>
            {fullYear}-{fullYear + 1}, All Rights Reserved by Vikram
          </div>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
