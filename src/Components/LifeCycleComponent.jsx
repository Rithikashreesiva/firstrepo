import React, { Component } from "react";

export class LifeCycleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("state is updated with props");
    return {
      name: props.name
    };
  }

  shouldComponentUpdate() {
    console.log("component should update");
    return true;
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("previous state and props");
    console.log(prevProps, prevState);
    return null;
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  clickEvent() {
    console.log("Click event");
    this.setState({
      name: "Updated LifeCycle"
    });
  }

  render() {
    console.log("Render is updated");
    return (
      <>
        <div>LifeCycleComponent {this.state.name}</div>
        <button onClick={() => this.clickEvent()}>Update</button>
      </>
    );
  }
}

export default LifeCycleComponent;
