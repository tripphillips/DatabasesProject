import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { throwError } from 'rxjs/internal/observable/throwError';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = environment.apiURL;
  user: any = {
    'username': '',
    'password': '',
    'first_name': '',
    'last_name': '',
    'player_level': 0
  };
  knownChords: any = [];
  constructor(private http: HttpClient) {}
  
  handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  }


