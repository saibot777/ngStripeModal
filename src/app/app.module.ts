import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FaInputComponent } from './lib/fa-input/fa-input.component';
import { MdInputComponent } from './lib/md-input/md-input.component';
import { InputRefDirective } from 'app/lib/common/input-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    FaInputComponent,
    MdInputComponent,
    InputRefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
