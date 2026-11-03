export interface ParsedArgs {
  command: string;
  args: string[];
}

export function parseArgs(argv: string[]): ParsedArgs {
  const [command = "help", ...args] = argv;
  return { command, args };
}

export function greet(name: string): string {
  return `Hello, ${name}!`;
}
