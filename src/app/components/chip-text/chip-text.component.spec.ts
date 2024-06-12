import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipTextComponent } from './chip-text.component';

describe('ChipTextComponent', () => {
  let component: ChipTextComponent;
  let fixture: ComponentFixture<ChipTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipTextComponent]
    });
    fixture = TestBed.createComponent(ChipTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
