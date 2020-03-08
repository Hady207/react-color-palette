import React, { Component } from "react";
import Colorbox from "./Colorbox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            onAfterChange={this.changeLevel}
            step={100}
          />
        </div>
        {/* Navbar goes here*/}
        <div className="Palette-colors">{colorBox}</div>
        {/* footer eventually*/}
      </div>
    );
  }
}
