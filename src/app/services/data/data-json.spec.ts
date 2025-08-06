import { TestBed } from '@angular/core/testing';

import { DataJson } from './data-json';

describe('DataJson', () => {
  let service: DataJson;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataJson);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
