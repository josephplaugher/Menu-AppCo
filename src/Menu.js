import React from "react";
import { menuBody, close } from "./style.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let closeIcon;
    if (typeof this.props.closeIcon !== "undefined") {
      closeIcon = this.props.closeIcon;
    } else {
      closeIcon = "X";
    }
    return (
      <>
        {this.props.showMenu ? (
          <div
            id="menu-appco_body"
            style={menuBody(this.props.style, this.props.showMenu)}
          >
            <span style={close} onClick={this.props.closeHandler}>
              {closeIcon}
            </span>
            {this.props.children}{" "}
            {/*there must be nested markup components passed in*/}
          </div>
        ) : null}
      </>
    );
  }
}

export default Menu;
