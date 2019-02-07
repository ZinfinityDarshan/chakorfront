import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EntryService } from './services/entry.service';
import { Entry } from './httpObjects/entry';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'chakorfront';
  date : Date;

  constructor(){}

  ngOnInit(){
    this.date = new Date();
    console.log(this.date.getDay()+'-'+this.date.getMonth()+'-'+this.date.getFullYear()+'|'+this.date.getHours()+':'+this.date.getMinutes());
  }

}
