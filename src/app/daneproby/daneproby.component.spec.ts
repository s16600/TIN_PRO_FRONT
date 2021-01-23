import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaneprobyComponent } from './daneproby.component';

describe('DaneprobyComponent', () => {
  let component: DaneprobyComponent;
  let fixture: ComponentFixture<DaneprobyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaneprobyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaneprobyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
