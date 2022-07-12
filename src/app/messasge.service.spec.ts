import { TestBed } from '@angular/core/testing';

import { MessasgeService } from './messasge.service';

describe('MessasgeService', () => {
  let service: MessasgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessasgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
