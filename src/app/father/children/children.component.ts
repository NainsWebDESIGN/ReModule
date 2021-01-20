import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'children-one',
  templateUrl: './children-one.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenOne implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}