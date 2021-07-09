import React, { Component } from "react";
import Counters from "./components/counters";
import Starts from "./components/starts";

import NavBar from "./components/navbar";

class Master extends Component {
  state = {
    counters: [
      { id: 1, value: 8 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    stars:[
      { id:1 , shine: "yellow"},
      { id:2 , shine: "red"},
      { id:3 , shine: "blue"},
      { id:4 , shine: "green"},
    ],
  };

  constructor(){
    super();
    console.log('master - Contructor');
  }

  //call and get data form the serve
  componentDidMount(){
    // this.setState({List-Game})
    console.log('Master - Mounted')
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };


  // hadnleChange = () => {
  //   const starts = this.state.stars.map()
  // }
  render() {

    console.log('Master - Rendered')

    return (
      <>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
          <Starts/>
        </main>
      </>
    );
  }
}

export default Master;
