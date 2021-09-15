import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className={this.getBtnClasses()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter)}
            className="btn btn-danger ms-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ms-4 fs-6 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  getBtnClasses() {
    let classes = "btn btn-secondary ms-2 ";
    classes += this.props.counter.value === 0 ? "disabled" : "active";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
