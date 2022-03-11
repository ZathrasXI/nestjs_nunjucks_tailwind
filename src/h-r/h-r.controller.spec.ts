import { Test, TestingModule } from '@nestjs/testing';
import { HRController } from './h-r.controller';

describe('HRController', () => {
  let controller: HRController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HRController],
    }).compile();

    controller = module.get<HRController>(HRController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
