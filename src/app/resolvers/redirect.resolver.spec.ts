import { TestBed } from '@angular/core/testing';
import { LinkService } from '../services/link.service';

import { RedirectResolver } from './redirect.resolver';

describe('RedirectResolver', () => {
  let resolver: RedirectResolver;
  let linkServiceStub: Partial<LinkService>

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: LinkService, useValue: linkServiceStub}
      ]
    });
    resolver = TestBed.inject(RedirectResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
