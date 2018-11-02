import { TestBed } from '@angular/core/testing';

import { OptabledataService } from './optabledata.service';

describe('OptabledataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OptabledataService = TestBed.get(OptabledataService);
    expect(service).toBeTruthy();
  });
});
