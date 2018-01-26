import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl } from "react-bootstrap";

class Previewer extends Component {
  render() {
    return (
      <Row>
        <Col sm={6}>
          <form>
            <FormGroup>
              <FormControl componentClass="textarea" />
            </FormGroup>
          </form>
        </Col>
        <Col sm={6}>
          previewed text
        </Col>
      </Row>
    );
  }
}

export default Previewer;
