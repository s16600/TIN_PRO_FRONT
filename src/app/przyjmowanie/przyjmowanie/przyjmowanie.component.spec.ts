import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrzyjmowanieComponent } from './przyjmowanie.component';

describe('PrzyjmowanieComponent', () => {
  let component: PrzyjmowanieComponent;
  let fixture: ComponentFixture<PrzyjmowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrzyjmowanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrzyjmowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
