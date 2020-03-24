import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";

function findPalette(id) {
  return seedColors.find(function(palette) {
    return palette.id === id;
  });
}

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={routerProps => (
          <PaletteList palettes={seedColors} {...routerProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={routerProps => (
          <Palette
            palette={generatePalette(findPalette(routerProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={routerProps => (
          <SingleColorPalette
            colorId={routerProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routerProps.match.params.paletteId),
            )}
          />
        )}
      />
    </Switch>

    // <div>
    //   <Palette palette={generatePalette(seedColors[0])} />
    // </div>
  );
}

export default App;
