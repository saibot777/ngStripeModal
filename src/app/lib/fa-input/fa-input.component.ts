import { Component, OnInit, Input, AfterContentInit, HostBinding, ContentChild } from '@angular/core';
import { InputRefDirective } from 'app/lib/common/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements AfterContentInit {
  @Input()
  icon: string;

  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  ngAfterContentInit() {
      if (!this.input) {
          console.error('the au-fa-input needs an input inside its content');
      }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
      return this.input ? this.input.focus : false;
  }


  get classes() {

      const cssClasses = {};

      if (this.icon) {
          cssClasses['fa-' + this.icon] = true;
      }

      return cssClasses;
  }

}
