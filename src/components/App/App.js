import React from 'react';
import { Grid, PageHeader } from "react-bootstrap";
import Previewer from "../Previewer/Previewer.js"

const App = () => {
  return (
    <Grid className="app">
      <PageHeader>Markdown Previewer</PageHeader>
      <Previewer />
    </Grid>
  );
}

export default App;
