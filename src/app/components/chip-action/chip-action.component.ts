import { Component, Input } from '@angular/core';

@Component({
  selector: 'chip-action',
  templateUrl: './chip-action.component.html',
  styleUrls: ['./chip-action.component.css']
})
export class ChipActionComponent {
  @Input() transparency: boolean = false;
}
