import { Component, Input } from '@angular/core';

@Component({
  selector: 'chip-discount',
  templateUrl: './chip-discount.component.html',
  styleUrls: ['./chip-discount.component.css']
})
export class ChipDiscountComponent {
  @Input() discount: number = 0;
}
