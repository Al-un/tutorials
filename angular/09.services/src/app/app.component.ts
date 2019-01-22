import { Component, Output } from '@angular/core';
import { TextService } from './services/text.service';
import { NumService } from './services/num.service';
import { AbstTextService } from './services/abst-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: AbstTextService, useClass: TextService }]
})
export class AppComponent {
  title = 'app';

  constructor(private textService: AbstTextService) {}

  @Output()
  get someText(): string {
    return (
      this.textService.someText() + ' > ' + this.textService.moarText('pouet')
    );
  }
}
