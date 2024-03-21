import { TestBed } from '@angular/core/testing';

import { HotelsImagesService } from './hotels-images.service';

describe('HotelsImagesService', () => {
  let service: HotelsImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelsImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
