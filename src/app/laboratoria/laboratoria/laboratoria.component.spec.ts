import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriaComponent } from './laboratoria.component';

describe('LaboratoriaComponent', () => {
  let component: LaboratoriaComponent;
  let fixture: ComponentFixture<LaboratoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
