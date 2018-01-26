import React, { Component } from "react";
import marked from "marked";
import { Row, Col, FormGroup, FormControl } from "react-bootstrap";

class Previewer extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };
  }

  componentWillUpdate(nextProps, nextState) {
    document.getElementById("preview").innerHTML = marked(nextState.text);
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
              <FormControl
                componentClass="textarea"
                value={this.state.text}
                onChange={this.onChangeHandler}
              />
            </FormGroup>
          </form>
        </Col>
        <Col sm={6} id="preview" />
      </Row>
    );
  }
}

export default Previewer;
