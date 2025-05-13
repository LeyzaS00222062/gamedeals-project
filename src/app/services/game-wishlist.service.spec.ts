import { TestBed } from '@angular/core/testing';

import { GameWishlistService } from './game-wishlist.service';

describe('GameWishlistService', () => {
  let service: GameWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
