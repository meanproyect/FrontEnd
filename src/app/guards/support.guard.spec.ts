import { TestBed, async, inject } from '@angular/core/testing';

import { SupportGuard } from './support.guard';

describe('SupportGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupportGuard]
    });
  });

  it('should ...', inject([SupportGuard], (guard: SupportGuard) => {
    expect(guard).toBeTruthy();
  }));
});
