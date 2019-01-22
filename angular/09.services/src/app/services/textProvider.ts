export interface TextProvider {
  someText: () => string;
  moarText: (input: string) => string;
}
