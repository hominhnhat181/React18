import React, { Component } from "react";

class valueer extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    // Nếu giá trị ban đầu khác giá trị mới -> do something
    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX call and get data form the serve
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  formatNumber() {
    const { value } = this.props.counter;
    return value === 0 ? <span>zero</span> : value;
  }

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  badGeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <>
        {/* <img src={this.state.imageUrl} alt="" /> */}

        <div style={this.divStyle}>
          <h3 style={{ fontSize: 15 }} className={this.badGeClass()}>
            {this.formatNumber()}
          </h3>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm "
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn sm m-2"
          >
            Delete
          </button>
          {/* {this.renderTags()} */}
        </div>
      </>
    );
  }
}
export default valueer;
