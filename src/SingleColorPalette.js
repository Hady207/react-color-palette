import React, { Component } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades.push(allColors[key].find(color => color.id === colorToFilterBy));
    }
    // return all shades of given color
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props;
    const colorBoxes = this._shades.map(color => (
      <Colorbox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
