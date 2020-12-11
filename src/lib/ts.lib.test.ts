import { expect } from "@jest/globals";
import tsLib from "./ts.lib";

describe("tsLib get target options", () => {
  it("target element", () => {
    document.body.innerHTML = '<div id="root"></div>';
    const container = document.querySelector("#root") as HTMLElement;
    const grid = tsLib(container);
    expect(grid.target).toEqual(container);
  });
  it("target selector string", () => {
    const container = document.querySelector("#root");
    const grid = tsLib("#root");
    expect(grid.target).toEqual(container);
  });
});
