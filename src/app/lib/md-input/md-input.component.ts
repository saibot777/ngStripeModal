import { InputRefDirective } from 'app/lib/common/input-ref.directive';
import {Component, Input, OnInit, ContentChild, AfterContentInit, HostBinding} from '@angular/core';

@Component({
    selector: 'app-md-input',
    templateUrl: './md-input.component.html',
    styleUrls: ['./md-input.component.css']
})
export class MdInputComponent implements AfterContentInit {

    @Input()
    icon: string;

    @ContentChild(InputRefDirective)
    input: InputRefDirective;

    ngAfterContentInit() {
        if (!this.input) {
            console.error('the au-md-input needs an input inside its content');
        }
    }

    @HostBinding('class.input-focus')
    get isInputFocus() {
        return this.input ? this.input.focus : false;
    }


}