import { Test, TestingModule } from '@nestjs/testing';
import { Controller, Get, Param } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService]
    }).compile();
  });

  describe('getData', () => {
    it('should return null', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData('abc')).toEqual(null);
    });
  });
});
