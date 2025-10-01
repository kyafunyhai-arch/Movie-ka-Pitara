import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MovieAppService } from './movie-app.service';

describe('MovieAppService', () => {
  let service: MovieAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MovieAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
