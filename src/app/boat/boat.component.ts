import { Component, OnInit, ViewChildren } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {

  @ViewChildren(BoatComponent) boat; 
  @ViewChildren(BoatComponent) boats; 
  constructor() { }

  ngOnInit() {
    this.boats = of([
      {
        name: 'Starfire',
        year: 1977,
        img: 'assets/boat.png'
      },

      {
        name: 'Oracle',
        year: 2015,
        img: 'assets/boat.png'
      },

      {
        name: 'Starfire 3',
        year: 1965,
        img: 'assets/boat.png'
      }
    ]);
  }
}
