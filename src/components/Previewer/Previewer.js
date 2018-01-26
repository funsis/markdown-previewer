import React, { Component } from "react";
import marked from "marked";
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import "./Previewer.css";

class Previewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain __not the reign __ in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`
    };
  }

  componentDidMount() {
    document.getElementById("preview").innerHTML = marked(this.state.text);
  }

  componentWillUpdate(nextProps, nextState) {
    document.getElementById("preview").innerHTML = marked(nextState.text);
  }

  onChangeHandler = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <Row className="previewer">
        <Col sm={6}>
          <form>
            <FormGroup>
              <ControlLabel>
                Work with CommonMark and GFM (no extensions).
              </ControlLabel>
              <FormControl
                componentClass="textarea"
                className="previewer__textarea"
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
