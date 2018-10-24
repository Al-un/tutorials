import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { AwesomePipe }        from './awesome.pipe';
import { ContactComponent }   from './contact.component.3';
/*
import { ContactComponent }   from './contact.component';
*/
import { ContactHighlightDirective } from './contact-highlight.directive';
import { ContactService }     from './contact.service';

import { ContactRoutingModule }   from './contact-routing.module.3';
/*
import { ContactRoutingModule }   from './contact-routing.module';
*/

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  declarations: [
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
  ],
  providers: [ ContactService ]
})
export class ContactModule { }
