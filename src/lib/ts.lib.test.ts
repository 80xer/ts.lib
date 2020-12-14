import { expect } from "@jest/globals";
import TsLib from "./ts.lib";

describe("tsLib get target options", () => {
  it("target element", () => {
    document.body.innerHTML = '<div id="root"></div>';
    const container = document.querySelector("#root") as HTMLElement;
    const grid = new TsLib(container);
    expect(grid.$target).toEqual(container);
  });
  it("target selector string", () => {
    const container = document.querySelector("#root");
    const grid = new TsLib("#root");
    expect(grid.$target).toEqual(container);
  });
});

describe("tsLib get options", () => {
  it("with data", () => {
    const data = [
      {
        name: "lee",
        age: 40,
        gender: "male",
      },
      {
        name: "kim",
        age: 20,
        gender: "female",
      },
      {
        name: "kim",
        age: 33,
        gender: "male",
      },
      {
        name: "park",
        age: 26,
        gender: "male",
      },
      {
        name: "choi",
        age: 38,
        gender: "female",
      },
    ];
    const grid = new TsLib("#root", { data });
    // grid.data = [];
    expect(grid.data[0]).toEqual(data[0]);
  });
});
