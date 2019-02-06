import { Component, OnInit, OnDestroy, AfterViewInit, DoCheck, ViewChildren } from '@angular/core';
import { VERSION } from '@angular/compiler';
import { of } from 'rxjs';
import { BoatComponent } from '../boat/boat.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit, DoCheck {

  @ViewChildren(BoatComponent) boats;
  constructor() {}

  ngOnInit() {
    //setup
    //chamadas async

  
  }

  ngDoCheck() {
    //check detection
    //useful for debug at times

    console.log('checked');
  }

  ngAfterViewInit() {
    //child views loaded
  }

  ngOnDestroy() {
    //teardown
  }

  clicked = false;

  title = `Angular ${VERSION.full} is rad!`;

  // boat = {
  //   name: 'Starfire',
  //   year: 1977,
  //   img: 'assets/boat.png'
  // }


  handleClick() {
    this.clicked = true;
  }

  changeTitle() {
    
  }
}