#!/usr/bin/env node
import { greet, parseArgs } from "./cli.js";

function main(argv: string[]): void {
  const { command, args } = parseArgs(argv);

  switch (command) {
    case "greet":
      console.log(greet(args[0] ?? "world"));
      break;
    case "help":
    default:
      console.log("Usage: expert-octo-enigma <command> [args]");
      console.log("Commands:");
      console.log("  greet [name]   Print a greeting");
      console.log("  help           Show this help message");
      break;
  }
}

main(process.argv.slice(2));
