import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipDiscountComponent } from './chip-discount.component';

describe('ChipDiscountComponent', () => {
  let component: ChipDiscountComponent;
  let fixture: ComponentFixture<ChipDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipDiscountComponent]
    });
    fixture = TestBed.createComponent(ChipDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
