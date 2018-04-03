import {ApplicationRef, Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import * as RandExp from 'randexp';
import {BooleanConverter, InputConverter} from './InputConverter';

@Component({
  selector: 'ngx-password-input',
  templateUrl: './ngx-password-input.component.html',
  styleUrls: ['./ngx-password-input.component.css']
})
export class NgxPasswordInputComponent implements OnInit {
  @Input()
  @InputConverter(BooleanConverter)
  public generator = false;

  @Input()
  @InputConverter(BooleanConverter)
  public preview = false;

  @Input()
  public regex = '^$';

  public value: string;

  public isHidden: boolean;

  public input: any;

  constructor(private elem: ElementRef, private appRef: ApplicationRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.input = this.elem.nativeElement.querySelector('[input-element]');

    this.isHidden = this.preview;
    this.renderer.setAttribute(this.input, 'type', this.isHidden ? 'password' : 'text');
  }

  public show($event: any) {
    this.isHidden = false;
    this.renderer.setAttribute(this.input, 'type', this.isHidden ? 'password' : 'text');
    return false;
  }

  public hide($event: any) {
    this.isHidden = true;
    this.renderer.setAttribute(this.input, 'type', this.isHidden ? 'password' : 'text');
    return false;
  }

  public generatePassword($event: any) {
    this.value = new RandExp(new RegExp(this.regex)).gen();
    this.renderer.setProperty(this.input, 'value', this.value);

    return false;
  }

}
