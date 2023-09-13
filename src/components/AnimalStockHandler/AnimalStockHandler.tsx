import { Component } from "react";

export default class Zoo extends Component {
  state = {
    cart: [],
    total: 0
  }

  add = () => {
    this.setState({
      cart: ['Gorilla'],
      total: 5
    })
  }

  remove = () => {
    this.setState({
      cart: []
    })
  }

  weightOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }

  getTotal = () => {
    return this.state.total.toLocaleString(undefined, this.weightOptions)
  }

  render() {
    return (
      <div>
        <p>Total animals in the zoo : {this.getTotal()}</p>
        <p>Currently {this.state.total} in the zoo</p>
        <div className="space-x-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.add}>
            Add{" "}
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.remove}>
            Remove{" "}
          </button>
        </div>
      </div>
    );
  }
}