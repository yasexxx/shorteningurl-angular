import { TestBed } from '@angular/core/testing';
import { LinkService } from '../services/link.service';

import { LinkResolver } from './link.resolver';

describe('LinkResolver', () => {
  let resolver: LinkResolver;
  let linkServiceStub: Partial<LinkService>

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: LinkService, useValue: linkServiceStub}
      ]
    });
    resolver = TestBed.inject(LinkResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
