import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {Entry} from '../httpObjects/entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

   url = "https://chakortrecksback.herokuapp.com/addEventEntry";
   //url = "http://localhost:8082/addEventEntry"

  constructor(private http: HttpClient) { }

  public addIndividualEntry(entry: Entry) : Observable<any>{
    let response: any;
    const headers1 =  new HttpHeaders();
    headers1.set('Access-Control-Allow-Origin','*').set('Content-Type','application/json');
     return this.http.post(this.url,entry)
    //  .subscribe(res => {
    //     console.log('response is '+res);
    //     response === res;},
    //     (err: HttpErrorResponse) => {
    //       console.log(err.error);
    //     })
        ;

    // return response;
  }
}
