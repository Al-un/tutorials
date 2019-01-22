import { Injectable } from '@angular/core';
import { AbstTextService } from './abst-text.service';
import { TextProvider } from './textProvider';

@Injectable({ providedIn: 'root' })
export class NumService extends AbstTextService {
  constructor() {
    super();
  }

  moarText(input: string): string {
    return input + '+++';
  }
}
