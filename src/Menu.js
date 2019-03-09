import React from "react";
import { menuBody, close } from "./style.js";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.showMenu ? (
          <div
            id="menu-appco_body"
            style={menuBody(this.props.style, this.props.showMenu)}
          >
            <span style={close} onClick={this.props.closeHandler}>
              x
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
