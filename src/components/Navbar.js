import { Component } from "react";
import Logo from "./Logo";
import Car from "./Car";

const styles = {
  navbar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    hight: "100px",
    justifyContent: "space-between",
    position: "relative",
    padding: "0 50px",
    boxShadow: "0 2px 3px rgb(0,0,0,0.1)",
  },
};

class Navbar extends Component {
  render() {
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Car />
      </nav>
    );
  }
}
export default Navbar;
