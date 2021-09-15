import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { counters, onReset, onIncrement, onDecrement, onDelete} = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-3">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
