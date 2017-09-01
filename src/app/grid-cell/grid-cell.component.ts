import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-cell',
  templateUrl: './grid-cell.component.html',
  styleUrls: ['./grid-cell.component.css']
})
export class GridCellComponent implements OnInit {
  @Input() readonly xs: number;
  @Input() readonly sm: number;
  @Input() readonly md: number;
  @Input() readonly lg: number;
  
  constructor() { }

  ngOnInit() {
  }

}
