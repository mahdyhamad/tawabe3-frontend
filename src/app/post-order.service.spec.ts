import { TestBed } from '@angular/core/testing';

import { PostOrderService } from './post-order.service';

describe('PostOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostOrderService = TestBed.get(PostOrderService);
    expect(service).toBeTruthy();
  });
});
