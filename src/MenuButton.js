import React from "react";
import { menuButton, bar } from "./style.js";

class MenuButton extends React.Component {
  render() {
    return (
      <>
        <div
          id="mac-appco_button"
          onClick={this.props.onClick}
          style={menuButton(this.props.style)}
        >
          <div style={bar(this.props.barStyle)} />
          <div style={bar(this.props.barStyle)} />
          <div style={bar(this.props.barStyle)} />
        </div>
      </>
    );
  }
}

export default MenuButton;
