import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl } from "react-bootstrap";

class Previewer extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };
  }

  onChangeHandler = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <Row>
        <Col sm={6}>
          <form>
            <FormGroup>
              <FormControl componentClass="textarea" value={this.state.text} onChange={this.onChangeHandler} />
            </FormGroup>
          </form>
        </Col>
        <Col sm={6}>previewed text</Col>
      </Row>
    );
  }
}

export default Previewer;
