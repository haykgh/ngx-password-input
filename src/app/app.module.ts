import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NgxPasswordInputModule} from './modules/ngx-password-input/ngx-password-input.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPasswordInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
