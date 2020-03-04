import React, { Component } from "react";
import Colorbox from "./Colorbox";
import "./Palette.css";
export default class Palette extends Component {
  render() {
    const colorBox = this.props.colors.map(color => (
      <Colorbox background={color.color} name={color.name} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here*/}
        <div className="Palette-colors">{colorBox}</div>
        {/* footer eventually*/}
      </div>
    );
  }
}
