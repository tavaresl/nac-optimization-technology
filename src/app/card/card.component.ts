import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() readonly imagem: string;
  @Input() readonly titulo: string;
  @Input() readonly texto: string;

  constructor() { }

  ngOnInit() {
  }

}
