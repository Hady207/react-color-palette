import React, { Component } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import "./Palette.css";
export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, format } = this.state;
    const colorBox = colors[level].map(color => (
      <Colorbox key={color.id} background={color[format]} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBox}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}
