import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';
import { PouetComponent } from './pouet/pouet.component';
import { PlopComponent } from './plop/plop.component';
import { DummyService } from './services/dummy.service';

@NgModule({
  imports: [],
  declarations: [
    CheckboxComponent,
    TextinputComponent,
    PouetComponent,
    PlopComponent
  ],
  exports: [
    CheckboxComponent,
    TextinputComponent,
    PouetComponent,
    PlopComponent
  ],
  // https://stackoverflow.com/a/52986073/4906586
  // providers: [DummyService]
})
export class ArsComponentsModule {}
