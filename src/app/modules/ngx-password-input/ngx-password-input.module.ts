import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxPasswordInputComponent} from './ngx-password-input.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [NgxPasswordInputComponent],
  declarations: [NgxPasswordInputComponent]
})

export class NgxPasswordInputModule {
  static forRoot(): ModuleWithProviders {
    return {ngModule: NgxPasswordInputComponent};
  }
}
