import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowelabComponent } from './nowelab.component';

describe('NowelabComponent', () => {
  let component: NowelabComponent;
  let fixture: ComponentFixture<NowelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowelabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
