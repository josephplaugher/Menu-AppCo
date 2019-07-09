#Menu-AppCo is a full featured menu component.

######Installation

```
npm install menu-appco
```

######Usage

```
import React from "react";
import { Menu, MenuButton } from "menu-appco";
import MyMenu from "./MyMenu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showUserMenu: false };
    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  toggleUserMenu() {
    if (this.state.showUserMenu === true) {
      this.setState({ showUserMenu: false });
    } else {
      this.setState({ showUserMenu: true });
    }
  }

  render() {
    return (
      <>
        <MenuButton style={{ bordercolor: "grey" }}
            barStyle={{backgroundColor: "black"}}
            onClick={this.toggleUserMenu}
        </>

        {this.state.showUserMenu ? (
          <EB comp="UserMenu in User.js">
            <>
              <Menu
                showMenu={this.state.showUserMenu}
                closeHandler={this.toggleUserMenu}
                style={
                  // insert a style object here
                  // that follows this structure.
                  // the menu will respond accordingly
                  // const style = {
                        open: {[properties...]},
                        closed: {[properties...]}
                  }
                }
              >
                <UserMenu
                  showUserMenu={this.toggleUserMenu}
                  style={{
                    //these are all the style options and their default settings.
                    //you can specify as many as needed or none at all.
                    float: "right",
                    padding:  "10px",
                    cursor:  "pointer"
                    }}
                  closeHandler={this.toggleUserMenu}
                  logout={this.props.logout}
                  user={this.props.user}
                />
              </Menu>
            </>
          </EB>
        ) : null}
    )
  }
}

export default App;

```
