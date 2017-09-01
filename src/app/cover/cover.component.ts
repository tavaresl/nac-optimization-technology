import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  @Input() readonly titulo: string;
  @Input() readonly descricao: string;

  constructor() { }

  ngOnInit() { }
}
