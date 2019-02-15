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
  startspinner: boolean = false;
  message: string;
  alert: string;

  constructor(private fb: FormBuilder, private entryservice: EntryService){
    this.etryForm = fb.group({
      'id':[null],
      'mobileno': [null, Validators.compose([Validators.minLength(10),Validators.required, Validators.maxLength(10)])],
      'name' : [null, Validators.required],
      'gender': [null],
      'age': [null],
      'transid': [null, Validators.required],
      'createdtimestamp':[this.getCurrentDate()],
      'lastmodifiedtimestamp':[this.getCurrentDate()],
      'emailid': [null, Validators.compose([Validators.required, Validators.email])],
      'pickup': [null],
    })
  }

  addEntry(form: Entry){
    this.startspinner=true;
    form.lastmodifiedtimestamp = this.getCurrentDate();
    form.createdtimestamp = this.getCurrentDate();
    console.log(form);
    this.entryservice.addIndividualEntry(form).subscribe(res => {
      console.log(res);
      if(res.id!==null){
        this.etryForm.reset();
        this.startspinner=false;
        this.openSuccessBox=true;
        this.alert= "alert-warning";
        this.message = "Get Set Ready... ! your registration is being confirmed, our support team will get in touch with you ..!"
        console.log(res.id);
      }
      else if(res.error=='err_001'){
        console.log(res.error);
        this.startspinner=false;
        this.openSuccessBox=true;
        this.alert = "alert-danger";
        this.message = "Your mobile number is already registred, Please check with Admin team";
      }
      else if(res.error=='err_002'){
        console.log(res.error);
        this.startspinner=false;
        this.openSuccessBox=true;
        this.alert = "alert-danger";
        this.message = "Mail id is not valid";
      }
    });
  }
  
  ngOnInit(){
    this.date = new Date();
    console.log(this.date.getDate()+'-'+this.date.getMonth()+'-'+this.date.getFullYear()+'|'+this.date.getHours()+':'+this.date.getMinutes());
  }

  getCurrentDate(): String{
    this.date = new Date();
    return this.date.getDay()+'-'+this.date.getMonth()+'-'+this.date.getFullYear()+'|'+this.date.getHours()+':'+this.date.getMinutes();
  }

  // Below Getters are for Validation purpose and not to extract the real time values.
  
  public get mobileno() {
    return this.etryForm.get('mobileno');
  }
  public get name() {
    return this.etryForm.get('name');
  }
  public get transid() {
    return this.etryForm.get('mobileno');
  }
  public get emailid() {
    return this.etryForm.get('mobileno');
  }

  
  
}
