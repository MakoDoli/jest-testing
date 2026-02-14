import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import Buttons from "../../components/buttons/Buttons";

describe("Theme Switcher", () => {
  it("renders theme switcher button", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");
    expect(themeSwitcher).toBeInTheDocument();
  });

  it("shows moon icon in light mode by default", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");
    // Moon icon SVG has a specific path for the crescent shape
    const moonPath = themeSwitcher.querySelector(
      'path[d*="21.752"]'
    );
    expect(moonPath).toBeInTheDocument();
  });

  it("toggles to dark mode and shows sun icon when clicked", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");

    // Click to switch to dark mode
    fireEvent.click(themeSwitcher);

    // Sun icon SVG has a specific path with sun rays
    const sunPath = themeSwitcher.querySelector(
      'path[d*="M12 3v2.25"]'
    );
    expect(sunPath).toBeInTheDocument();
  });

  it("changes background color when toggling theme", () => {
    render(<Buttons />);
    const container = screen.getByTestId("container");
    const themeSwitcher = screen.getByLabelText("Toggle theme");

    // Initial state (light mode)
    expect(container.style.backgroundColor).toBe("gray");

    // Click to dark mode
    fireEvent.click(themeSwitcher);
    expect(container.style.backgroundColor).toBe("rgb(26, 26, 26)");

    // Click back to light mode
    fireEvent.click(themeSwitcher);
    expect(container.style.backgroundColor).toBe("gray");
  });

  it("displays light mode color buttons in light mode", () => {
    render(<Buttons />);
    
    expect(screen.getByText("lightcoral")).toBeInTheDocument();
    expect(screen.getByText("mediumseagreen")).toBeInTheDocument();
    expect(screen.getByText("lightseagreen")).toBeInTheDocument();
  });

  it("displays dark mode color buttons in dark mode", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");

    // Switch to dark mode
    fireEvent.click(themeSwitcher);

    expect(screen.getByText("dark 1")).toBeInTheDocument();
    expect(screen.getByText("dark 2")).toBeInTheDocument();
    expect(screen.getByText("dark 3")).toBeInTheDocument();
  });

  it("changes button background colors in dark mode", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");

    // Switch to dark mode
    fireEvent.click(themeSwitcher);

    const darkButton1 = screen.getByText("dark 1");
    const darkButton2 = screen.getByText("dark 2");
    const darkButton3 = screen.getByText("dark 3");

    expect(darkButton1.style.backgroundColor).toBe("rgb(139, 69, 19)");
    expect(darkButton2.style.backgroundColor).toBe("rgb(47, 79, 79)");
    expect(darkButton3.style.backgroundColor).toBe("rgb(72, 61, 139)");
  });

  it("applies selected dark color to container background", () => {
    render(<Buttons />);
    const container = screen.getByTestId("container");
    const themeSwitcher = screen.getByLabelText("Toggle theme");

    // Switch to dark mode
    fireEvent.click(themeSwitcher);

    // Click a dark color button
    const darkButton1 = screen.getByText("dark 1");
    fireEvent.click(darkButton1);

    expect(container.style.backgroundColor).toBe("rgb(139, 69, 19)");
  });

  it("maintains disabled state when switching themes", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");
    const toggleButton = screen.getByText("?");

    // Disable buttons
    fireEvent.click(toggleButton);

    // Verify buttons are disabled in light mode
    expect(screen.getByText("lightcoral")).toBeDisabled();

    // Switch to dark mode
    fireEvent.click(themeSwitcher);

    // Verify buttons are still disabled in dark mode
    expect(screen.getByText("dark 1")).toBeDisabled();
    expect(screen.getByText("dark 2")).toBeDisabled();
    expect(screen.getByText("dark 3")).toBeDisabled();
  });

  it("theme switcher button has correct styling", () => {
    render(<Buttons />);
    const themeSwitcher = screen.getByLabelText("Toggle theme");

    // Check light mode styling (dark button)
    expect(themeSwitcher.style.backgroundColor).toBe("rgb(42, 42, 42)");
    expect(themeSwitcher.style.color).toBe("rgb(240, 240, 240)");

    // Switch to dark mode
    fireEvent.click(themeSwitcher);

    // Check dark mode styling (light button)
    expect(themeSwitcher.style.backgroundColor).toBe("rgb(240, 240, 240)");
    expect(themeSwitcher.style.color).toBe("rgb(42, 42, 42)");
  });
});
