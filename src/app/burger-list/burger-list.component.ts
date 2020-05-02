import { Component, OnInit } from '@angular/core';
import { BurgersService } from '../swagger/api/burgers.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgerList;
  breakpoint;

  constructor(private burgersService : BurgersService) { }

  ngOnInit() {
    this.getBurgers();
    this.breakpoint = (window.innerWidth <= 600) ? 2 : 6;
  }

  getBurgers() : void {
    this.burgerList = this.burgersService.listBurgers()
        .subscribe(burgerList => this.burgerList = burgerList);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 2 : 6;
  }
}
