import { Injectable } from '@angular/core';

@Injectable()
export abstract class AbstTextService {
  constructor() {}

  // Same someText
  public someText(): string {
    return 'some text';
  }

  // Different moart text
  abstract moarText(input: string): string;
}
