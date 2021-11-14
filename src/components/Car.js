import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import DetailCar from "./DetailCar";

const styles = {
  carro: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: 12,
    top: 20,
  },
};

class Car extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.amount, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carro} onClick={mostrarCarro}>
          Carro
        </button>
        {esCarroVisible ? <DetailCar carro={carro} /> : null}
      </div>
    );
  }
}
export default Car;
