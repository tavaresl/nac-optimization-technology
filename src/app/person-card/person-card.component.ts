import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {
  @Input() readonly avatar: string;
  @Input() readonly nome: string;
  
  constructor() { }

  ngOnInit() {
  }

}
