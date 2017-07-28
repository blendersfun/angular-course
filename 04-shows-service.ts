import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

export class Show {
  private constructor(
    public title: string,
    public description: string,
    public runningTime: number,
    public startDate: Date,
    public endDate: Date,
    public venue: string,
    public price: number,
    public urlCode: string
  ) {}

  static from(json): Show {
    return new Show(
      json.title,
      json.description,
      json.runningTime,
      new Date(json.startDate + ' GMT-0800'),
      new Date(json.endDate + ' GMT-0800'),
      json.venue,
      json.price,
      json.urlCode
    );
  }


}

@Injectable()
export class ShowsService {
  constructor(private http: Http) {}

  getShows(): Observable<Show[]> {
    return this.http.get('https://raw.githubusercontent.com/blendersfun/angular-course/2f0d09f8f06aa9eb25b32a4f5717af7ed558f19a/02-get-shows-call.json')
                    .map((response: Response) => 
                      (response.json() || []).map(showData => Show.from(showData))
                    )
  }
}
