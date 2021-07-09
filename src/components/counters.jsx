import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

    render() {
        console.log('Counters - Rendered')
        // Destructuring Arguments
        const { onDelete, onIncrement, onReset, counters} = this.props;
        return (
            <>
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}

                >Resert</button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    />
                ))}
            </>
        );
    }
}

export default Counters;
