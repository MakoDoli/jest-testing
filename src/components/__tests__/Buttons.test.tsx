import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, it } from "vitest";
import Buttons from "../../components/buttons/Buttons";

describe("Buttons Component", () => {
  it("renders all buttons", () => {
    render(<Buttons />);
    expect(screen.getByText("lightcoral")).toBeInTheDocument();
    expect(screen.getByText("mediumseagreen")).toBeInTheDocument();
    expect(screen.getByText("lightseagreen")).toBeInTheDocument();
    expect(screen.getByText("party pooper")).toBeInTheDocument();
  });

  it("changes background color when color buttons are clicked", () => {
    render(<Buttons />);
    const container = screen.getByTestId("container");

    fireEvent.click(screen.getByText("lightcoral"));
    expect(container.style.backgroundColor).toBe("lightcoral");

    fireEvent.click(screen.getByText("mediumseagreen"));
    expect(container.style.backgroundColor).toBe("mediumseagreen");

    fireEvent.click(screen.getByText("lightseagreen"));
    expect(container.style.backgroundColor).toBe("lightseagreen");
  });

  it("disables color buttons and resets background when party pooper is clicked", () => {
    render(<Buttons />);
    const container = screen.getByTestId("container");
    const partyPooperButton = screen.getByText("party pooper");

    fireEvent.click(screen.getByText("lightcoral"));
    expect(container.style.backgroundColor).toBe("lightcoral");

    fireEvent.click(partyPooperButton);
    expect(container.style.backgroundColor).toBe("gray");
    expect(screen.getByText("lightcoral")).toHaveProperty("disabled", true);
    expect(screen.getByText("mediumseagreen")).toHaveProperty("disabled", true);
    expect(screen.getByText("lightseagreen")).toHaveProperty("disabled", true);

    fireEvent.click(partyPooperButton);
    expect(screen.getByText("lightcoral")).toHaveProperty("disabled", false);
    expect(screen.getByText("mediumseagreen")).toHaveProperty(
      "disabled",
      false
    );
    expect(screen.getByText("lightseagreen")).toHaveProperty("disabled", false);
  });
});
