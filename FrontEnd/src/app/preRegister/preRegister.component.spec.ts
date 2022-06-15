import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegisterComponent } from './preRegister.component';

describe('PreRegisterComponent', () => {
  let component: PreRegisterComponent;
  let fixture: ComponentFixture<PreRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
