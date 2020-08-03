import { TestBed } from '@angular/core/testing';

import { RightMenuService } from './right-menu.service';

describe('RightMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightMenuService = TestBed.get(RightMenuService);
    expect(service).toBeTruthy();
  });
});
