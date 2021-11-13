import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 1500, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 2500, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 500, img: "/productos/lechuga.jpg" },
    ],
    carro: [],
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              amount: x.amount + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        amount: 1,
      }),
    });
  };
  render() {
    console.log(this.state.carro);
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}
export default App;
