import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Entry} from '../httpObjects/entry';
import { Observable } from 'rxjs';
import { Constants } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private http: HttpClient) { }

  public addIndividualEntry(entry: Entry) : Observable<any>{
    let response: any;
    const headers1 =  new HttpHeaders();
    headers1.set('Access-Control-Allow-Origin','*').set('Content-Type','application/json');
     return this.http.post(Constants.chakorapi,entry)
  }
}
