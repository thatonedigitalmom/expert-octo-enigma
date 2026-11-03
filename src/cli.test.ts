import { describe, expect, it } from "vitest";
import { greet, parseArgs } from "./cli.js";

describe("parseArgs", () => {
  it("defaults to the help command when no args are given", () => {
    expect(parseArgs([])).toEqual({ command: "help", args: [] });
  });

  it("splits the command from its arguments", () => {
    expect(parseArgs(["greet", "Ada"])).toEqual({
      command: "greet",
      args: ["Ada"],
    });
  });
});

describe("greet", () => {
  it("greets the given name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });
});
