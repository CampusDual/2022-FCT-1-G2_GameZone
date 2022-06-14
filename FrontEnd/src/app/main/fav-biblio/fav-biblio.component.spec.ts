import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavBiblioComponent } from './fav-biblio.component';

describe('FavBiblioComponent', () => {
  let component: FavBiblioComponent;
  let fixture: ComponentFixture<FavBiblioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavBiblioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavBiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
