import React, { Component } from "react";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";

import "./ColorBox.css";

const styles = {
  colorBox: {
    width: "20%",
    height: props => props.showingFullPalette?"25%":"50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-4px",
    "&:hover $copyButton": {
      opacity: 1,
      transition: "0.5s",
    },
  },
  copyText: {
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() >= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: props =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.6)"
        : "white",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: "0px",
    bottom: "4px",
    color: "white",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
  },

  copyButton: {
    color: props =>
      chroma(props.background).luminance() >= 0.7
        ? "rgba(0, 0, 0, 0.6)"
        : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    textTransform: "uppercase",
    color: "white",
    border: "none",
    opacity: "0",
    textDecoration: "none",
  },
};

class Colorbox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, paletteId, id, showLink, showingFullPalette classes } = this.props;
    const { copied } = this.state;
    
    return (
      <CopyToClipboard
        text={this.props.background}
        onCopy={this.changeCopyState}
      >
        <div style={{ background }} className={classes.colorBox}>
          <div
            style={{ background }}
            className={`copy-overlay ${copied && "show"}`}
          ></div>
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-contianer">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link
              to={`/palette/${paletteId}/${id}`}
              onClick={e => e.stopPropagation()}
            >
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(Colorbox);
