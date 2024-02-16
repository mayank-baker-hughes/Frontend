import { Injectable } from '@angular/core';
import { Risk } from '../Risk';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http :HttpClient) { }

  riskUrl:string = ''

  getAllData():Observable<Risk[]>{
  
    return this.http.get<Risk[]>(this.riskUrl)
  }
}
