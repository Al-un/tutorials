import { TestBed, inject } from '@angular/core/testing';

import { AwsGatewayService } from './aws-gateway.service';

describe('AwsGatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AwsGatewayService]
    });
  });

  it('should be created', inject([AwsGatewayService], (service: AwsGatewayService) => {
    expect(service).toBeTruthy();
  }));
});
