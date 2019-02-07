import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EntryService } from 'src/app/services/entry.service';
import { Entry } from 'src/app/httpObjects/entry';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

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
    if(s!==null){
      this.etryForm.reset();
    }
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
