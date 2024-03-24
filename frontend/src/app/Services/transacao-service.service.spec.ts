import { TestBed } from '@angular/core/testing';

import { TransacaoServiceService } from './transacao-service.service';

describe('TransacaoServiceService', () => {
  let service: TransacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
