import { Component } from "react";

const sytles = {
  title: {
    marginBottom: "30px",
  },
};

class Title extends Component {
  render() {
    return <h1 style={sytles.title}>Tienda</h1>;
  }
}
export default Title;
