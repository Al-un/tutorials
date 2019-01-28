import { TestBed, inject } from '@angular/core/testing';

import { DummyService } from './dummy.service';
import { SlaveService } from './slave.service';

// /**
//  * Encapsulate beforeTest in a single function
//  */
// function testSetup() {
//   require('./dummy.js');

//   const slaveServiceSpy = jasmine.createSpyObj('SlaveService', [
//     'getRandomNumber',
//     'getBaseNumber'
//   ]);
//   const stubValue = 42;
//   const dummyService = new DummyService(slaveServiceSpy);

//   slaveServiceSpy.getBaseNumber.and.returnValue(stubValue);
//   return { dummyService, stubValue, slaveServiceSpy };
// }

describe('DummyService (with TestBed)', () => {
  const base = 39;
  const random = 42;
  let dummyService: DummyService;
  let slaveServiceSpy: jasmine.SpyObj<SlaveService>;
  let slaveSpy: any;

  beforeEach(() => {
    const slaveSpy = jasmine.createSpyObj('SlaveService', [
      'getRandomNumber',
      'getBaseNumber'
    ]);
    slaveSpy.getRandomNumber.and.returnValue(random);
    slaveSpy.getBaseNumber.and.returnValue(base);

    TestBed.configureTestingModule({
      providers: [DummyService, { provide: SlaveService, useValue: slaveSpy }]
    });

    dummyService = TestBed.get(DummyService);
    slaveServiceSpy = TestBed.get(SlaveService);
  });

  it('should be created', inject([DummyService], (service: DummyService) => {
    expect(service).toBeTruthy();
  }));

  it('getSlaveBaseNumber returns slave service base number', () => {
    // // when using test function
    // const { dummyService, stubValue, slaveServiceSpy } = testSetup();

    // slaveServiceSpy.getBaseNumber.and.returnValue(stubValue);
    slaveSpy.getBaseNumber.and.returnValue(base);
    expect(dummyService.getSlaveBaseNumber()).toBe(
      base,
      'ouaip, base number from slave!'
    );
    expect(slaveSpy.getBaseNumber.toHaveBeenCalledWith(0)).toBeTruthy();
    expect(slaveServiceSpy.getBaseNumber.calls.count()).toBe(1);
    expect(slaveServiceSpy.getBaseNumber.calls.mostRecent().returnValue).toBe(
      base
    );
  });

  it('test globvar', () => {
    // // when using test function
    // const { dummyService, stubValue, slaveServiceSpy } = testSetup();

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
