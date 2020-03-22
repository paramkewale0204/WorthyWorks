import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { CarPooling } from '../model/car-pooling';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarPoolingService {

  carPools: Array<CarPooling> = [
    { getPickupLocation: 'Toronto', getDropLocation: 'Windsor', status: 'yes', date : '15/02/2020', contactDetails : '123456'},
    { getPickupLocation: 'London', getDropLocation: 'Toronto', status: 'yes', date : '25/03/2020', contactDetails : '156123'},
    { getPickupLocation: 'Brampton', getDropLocation: 'Windsor', status: 'yes', date : '12/04/2020', contactDetails : '789464'},
    { getPickupLocation: 'Hamilton', getDropLocation: 'Windsor', status: 'yes', date : '30/05/2020', contactDetails : '741852'},
  ];

  constructor(private http: HttpClient) { }

  getCarPoolingDetails(){
    //return this.http.get("URL").pipe(map(Response => Response));

    return of(this.carPools);
  }
}
