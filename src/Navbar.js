import React, { Component } from "react";
import Slider from "rc-slider";
// import  from "@material-ui/core/Select";
import { Select, MenuItem, ThemeProvider } from "@material-ui/core";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="#">React Palette</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
        <div className="select-contianer">
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </nav>
    );
  }
}
