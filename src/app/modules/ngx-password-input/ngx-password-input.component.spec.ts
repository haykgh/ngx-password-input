import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxPasswordInputComponent} from './ngx-password-input.component';

describe('NgxPasswordInputComponent', () => {
  let component: NgxPasswordInputComponent;
  let fixture: ComponentFixture<NgxPasswordInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPasswordInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
