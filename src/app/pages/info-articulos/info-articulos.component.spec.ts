import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoArticulosComponent } from './info-articulos.component';

describe('InfoArticulosComponent', () => {
  let component: InfoArticulosComponent;
  let fixture: ComponentFixture<InfoArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
