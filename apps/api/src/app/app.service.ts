import { Injectable } from '@nestjs/common';
import { CurrentWeather } from '@weather/api-interfaces';
import { Weather } from '../assets/weather';

@Injectable()
export class AppService {
  getData(city: string): CurrentWeather {
    for(let item of Weather) {
      if( item.city == city ){
        return item;
      }
    }
    return null;
  }
}
