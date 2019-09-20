import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisvendidosPage } from './maisvendidos.page';

describe('MaisvendidosPage', () => {
  let component: MaisvendidosPage;
  let fixture: ComponentFixture<MaisvendidosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisvendidosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisvendidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
