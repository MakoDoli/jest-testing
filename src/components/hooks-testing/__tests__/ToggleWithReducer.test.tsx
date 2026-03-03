import { render, screen, fireEvent } from "@testing-library/react";
import ToggleWithReducer from "../ToggleWithReducer";

describe("ToggleWithReducer Component", () => {
  test("renders initial state correctly", () => {
    render(<ToggleWithReducer />);
    expect(screen.getByText(/Initial state/i)).toBeInTheDocument();
  });

  test("updates state to 'hello' when Hello button is clicked", () => {
    render(<ToggleWithReducer />);
    const helloButton = screen.getByText(/Hello/i);
    fireEvent.click(helloButton);
    const stateText = screen.getByText((content, element) => {
      return (
        element !== null &&
        element.tagName.toLowerCase() === "div" &&
        /hello/i.test(content)
      );
    });
    expect(stateText).toBeInTheDocument();
  });

  test("updates state to 'Bye' when Bye button is clicked", () => {
    render(<ToggleWithReducer />);
    const byeButton = screen.getByText(/Bye/i);
    fireEvent.click(byeButton);
    const stateText = screen.getByText((content, element) => {
      return (
        element !== null &&
        element.tagName.toLowerCase() === "div" &&
        /Bye/i.test(content)
      );
    });
    expect(stateText).toBeInTheDocument();
  });
});
