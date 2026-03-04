import React from "react";

export class Counter extends React.Component<{ initialCount: number }> {
  constructor(props: { initialCount: number }) {
    super(props);
  }
  state = { count: this.props.initialCount };

  // useEffect on initial render
  componentDidMount(): void {
    console.log("Component DID mount");
  }

  // useEffect on state.count or props change
  componentDidUpdate(
    prevProps: { initialCount: number },
    prevState: { count: number },
  ): void {
    if (
      prevState.count !== this.state.count ||
      prevProps.initialCount !== this.props.initialCount
    )
      console.log("Component updated");
  }

  componentWillUnmount(): void {
    console.log("Unmounted");
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Update
      </button>
    );
  }
}
