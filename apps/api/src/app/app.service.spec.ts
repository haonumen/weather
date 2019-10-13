import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let melbourne = {"city":"Melbourne","upd_time":"Thursday 10:00 AM","weather":"Mostly Cloudy","temperature":"9°C","wind":"33km/h"};
  let sydney = {"city":"Sydney","upd_time":"Thursday 11:00 AM","weather":"Sunny","temperature":"8°C","wind":"32km/h"};
  let wollongong = {"city":"Wollongong","upd_time":"Thursday 09:00 AM","weather":"Cloudy","temperature":"7°C","wind":"30km/h"}
  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService]
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    it('should return a object inclding Sydney\'s weather', () => {
      expect(service.getData('Sydney')).toEqual(sydney);
    });
    it('should return a object inclding Melbourne\'s weather', () => {
      expect(service.getData('Melbourne')).toEqual(melbourne);
    });
    it('should return a object inclding Wollongong\'s weather', () => {
      expect(service.getData('Wollongong')).toEqual(wollongong);
    });
    it('should return null', () => {
      expect(service.getData('abc')).toEqual(null);
    });
  });
});
