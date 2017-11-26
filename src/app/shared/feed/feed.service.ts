import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FeedService {

  constructor(private http: HttpClient) { }

  getPlanItems(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://services.odata.org/TripPinRESTierService/(S(a0owpe4cfdgkxatyqp10jegj))/Me?$top=1&$expand=Trips($top=2;$expand=PlanItems)');
  }
}
