import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export default class Colorbox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={this.props.background}>
        <div style={{ background: this.props.background }} className="ColorBox">
          <div className="copy-contianer">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">MORE</span>
        </div>
      </CopyToClipboard>
    );
  }
}
