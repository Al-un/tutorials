import { NgModule } from '@angular/core';
import { ArsComponentsComponent } from './ars-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';
import { PouetComponent } from './pouet/pouet.component';
import { PlopComponent } from './plop/plop.component';

@NgModule({
  imports: [],
  declarations: [ArsComponentsComponent, CheckboxComponent, TextinputComponent, PouetComponent, PlopComponent],
  exports: [ArsComponentsComponent, CheckboxComponent, TextinputComponent, PouetComponent, PlopComponent]
})
export class ArsComponentsModule {}
