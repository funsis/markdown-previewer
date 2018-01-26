import React from 'react';
import { Grid } from "react-bootstrap";
import Previewer from "../Previewer/Previewer.js"

const App = () => {
  return (
    <Grid className="App">
      Markdown Previewer
      <Previewer />
    </Grid>
  );
}

export default App;
