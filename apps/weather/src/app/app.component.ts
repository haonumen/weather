import { Component, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrentWeather } from '@weather/api-interfaces';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'weather-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weather: CurrentWeather;
  city: string = 'Sydney';
  cities:string[] = ['Sydney','Melbourne','Wollongong'];
  constructor(private http: HttpClient) {
    
  }
  ngOnInit(){
    this.setWeather(this.city);
  }

  setWeather(city: string) {
    this.getWeather(city)
    .subscribe(weather => {
      this.weather = weather;
      }
    );
  }

  getWeather(city: string): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>('/api/weather/'+city);
  }

  ngOnChanges(changes: SimpleChanges) {
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   if(propName==='city') {
    //     this.setWeather(chng);
    //   }
    // }
  }
}
