import React from "react";
import { Route } from "react-router-dom";
import Pallete from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
function App() {
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Palette list goes here</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={() => <h1>Individual palette</h1>}
      />
    </Switch>

    // <div>
    //   <Pallete palette={generatePalette(seedColors[0])} />
    // </div>
  );
}

export default App;
