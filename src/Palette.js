import React, { Component } from "react";
import Colorbox from "./Colorbox";
import Navbar from "./Navbar";
import "./Palette.css";
export default class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBox = colors[level].map(color => (
      <Colorbox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        {/* Navbar goes here*/}
        <div className="Palette-colors">{colorBox}</div>
        {/* footer eventually*/}
      </div>
    );
  }
}
