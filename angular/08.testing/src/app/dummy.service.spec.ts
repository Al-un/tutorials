import { TestBed, inject } from '@angular/core/testing';

import { DummyService } from './dummy.service';
import { SlaveService } from './slave.service';

function testSetup() {
  require('./dummy.js');

  const slaveServiceSpy = jasmine.createSpyObj('SlaveService', [
    'getRandomNumber',
    'getBaseNumber'
  ]);
  const stubValue = 42;
  const dummyService = new DummyService(slaveServiceSpy);

  slaveServiceSpy.getBaseNumber.and.returnValue(stubValue);
  return { dummyService, stubValue, slaveServiceSpy };
}

describe('DummyService (with TestBed)', () => {
  // let dummyService: DummyService;
  // let slaveServiceSpy: jasmine.SpyObj<SlaveService>;

  // beforeEach(() => {
  //   const spy = jasmine.createSpyObj('SlaveService', [
  //     'getRandomNumber',
  //     'getBaseNumber'
  //   ]);

  //   TestBed.configureTestingModule({
  //     providers: [DummyService, { provide: SlaveService, useValue: spy }]
  //   });

  //   dummyService = TestBed.get(DummyService);
  //   slaveServiceSpy = TestBed.get(SlaveService);
  // });

  it('should be created', inject([DummyService], (service: DummyService) => {
    expect(service).toBeTruthy();
  }));

  it('getSlaveBaseNumber returns slave service base number', () => {
    const { dummyService, stubValue, slaveServiceSpy } = testSetup();
    // const stubValue = 42;
    // slaveServiceSpy.getBaseNumber.and.returnValue(stubValue);

    expect(dummyService.getSlaveBaseNumber()).toBe(
      stubValue,
      'ouaip, base number from slave!'
    );
    expect(slaveServiceSpy.getBaseNumber.calls.count()).toBe(1);
    expect(slaveServiceSpy.getBaseNumber.calls.mostRecent().returnValue).toBe(
      stubValue
    );
  });

  it('test globvar', () => {
    const { dummyService, stubValue, slaveServiceSpy } = testSetup();

    dummyService.testGlobVar();
  });
});

// -----------------------------------------------------------------------------
// Without Angular stuff
// -----------------------------------------------------------------------------
describe('DummyService (without Angular stuff)', () => {
  let service: DummyService;

  beforeEach(() => {
    service = new DummyService(new SlaveService());
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#addTwo add 2', () => {
    const result = service.addTwo(5);
    expect(result).toBe(7);
  });

  it('#addPromiseTwo return promise', (done: DoneFn) => {
    service.addPromiseTwo().then(value => {
      expect(value).toBe(3);
      done();
    });
  });

  it('#addPromiseTwo return promise (ES6 writing)', async (done: DoneFn) => {
    const result = await service.addPromiseTwo();
    expect(result).toBe(3);
    done();
  });

  it('#addFromRandom is a number', async (done: DoneFn) => {
    const result = await service.addFromRandom();
    expect(result).toEqual(jasmine.any(Number));
    done();
  });
});
