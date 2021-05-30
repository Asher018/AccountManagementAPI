import { Component, Input, OnInit } from '@angular/core';
import { Services } from 'src/app/shared/model/services.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() services?: Services;
  
  constructor() { }

  ngOnInit(): void {
  }

}
