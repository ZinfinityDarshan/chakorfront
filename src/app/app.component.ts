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
  pickups = ['dadar','sion','thane'];

  etryForm: FormGroup;
  date : Date;
  openSuccessBox: boolean = false;

  constructor(private fb: FormBuilder, private entryservice: EntryService){
    this.etryForm = fb.group({
      'id':[null],
      'mobileno': [null, Validators.compose([Validators.maxLength(10),Validators.required])],
      'name' : [null, Validators.required],
      'gender': [null],
      'age': [null],
      'transid': [null, Validators.required],
      'createdtimestamp':[this.getCurrentDate()],
      'lastmodifiedtimestamp':[this.getCurrentDate()],
      'emailid': [null],
      'pickup': [null],
    })
  }

  addEntry(form: Entry){
    console.log(form);
    let s = this.entryservice.addIndividualEntry(form);
  }

  ngOnInit(){
    this.date = new Date();
    console.log(this.date.getDay()+'-'+this.date.getMonth()+'-'+this.date.getFullYear()+'|'+this.date.getHours()+':'+this.date.getMinutes());
  }

  getCurrentDate(): String{
    this.date = new Date();
    return this.date.getDay()+'-'+this.date.getMonth()+'-'+this.date.getFullYear()+'|'+this.date.getHours()+':'+this.date.getMinutes();
  }
}
