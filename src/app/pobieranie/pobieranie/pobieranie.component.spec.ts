import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PobieranieComponent } from './pobieranie.component';

describe('PobieranieComponent', () => {
  let component: PobieranieComponent;
  let fixture: ComponentFixture<PobieranieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PobieranieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PobieranieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
