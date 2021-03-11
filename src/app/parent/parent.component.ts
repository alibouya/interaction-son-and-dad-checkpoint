import { Component,EventEmitter,Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  parentColor:string;
  constructor() { }

  ngOnInit(): void {
  }
  treatdatafromchild(value){
    this.parentColor=value;
 }
}
