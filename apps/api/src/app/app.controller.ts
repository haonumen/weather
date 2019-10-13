import { Controller, Get, Param } from '@nestjs/common';

import { CurrentWeather } from '@weather/api-interfaces';

import { AppService } from './app.service';

@Controller('weather')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':city')
  getData(@Param() params): CurrentWeather {
    return this.appService.getData(params.city);
  }
}
