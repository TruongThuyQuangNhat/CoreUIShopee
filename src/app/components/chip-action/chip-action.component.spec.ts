import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipActionComponent } from './chip-action.component';

describe('ChipActionComponent', () => {
  let component: ChipActionComponent;
  let fixture: ComponentFixture<ChipActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipActionComponent]
    });
    fixture = TestBed.createComponent(ChipActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
