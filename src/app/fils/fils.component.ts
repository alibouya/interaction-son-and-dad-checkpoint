import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  myFavoriteColor :string;

  @Output() sendColorFromParent = new EventEmitter();

  color:any;
  constructor() { 
    
  }
  
  ngOnInit(): void {
  }
  senddatatoparent(){
    this.sendColorFromParent.emit(this.myFavoriteColor )

  }
  onchangeColor(value) {
    return this.myFavoriteColor = value;
  }

}
