import { Component } from "react";
import Product from "./Product";

const styles = {
  productos: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Products extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    return (
      <div style={styles.productos}>
        {productos.map((producto) => (
          <Product
            agregarAlCarro={agregarAlCarro}
            key={producto.name}
            producto={producto}
          />
        ))}
      </div>
    );
  }
}

export default Products;
