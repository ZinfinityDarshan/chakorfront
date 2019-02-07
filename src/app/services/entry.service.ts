import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Entry} from '../httpObjects/entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

   url = "https://chakortrecksback.herokuapp.com/addEventEntry";

  constructor(private http: HttpClient) { }

  public addIndividualEntry(entry: Entry) : Observable<any>{
      return this.http.post(this.url,entry);
  }
}
