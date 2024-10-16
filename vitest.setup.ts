/* eslint-disable @typescript-eslint/ban-ts-comment */
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// @ts-expect-error
window.URL.createObjectURL = () => {};
afterEach(() => {
  cleanup();
});
