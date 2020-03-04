import React from "react";
import Pallete from "./Palette";
import seedColors from "./seedColors";
function App() {
  return (
    <div>
      <Pallete {...seedColors[0]} />
    </div>
  );
}

export default App;
