import { TestBed } from '@angular/core/testing';

import { LinkService } from './link.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ResponseLink } from '../interfaces/response-link';
import { Link } from '../interfaces/link';

describe('LinkService', () => {
  let linkService: LinkService;
  let httpTestingController: HttpTestingController;
  const apiUrl = "http://localhost:3000";
  // const apiPrefix = apiUrl + '/api/version1';

  let getLinkSpy;
  let linkObj: Link;
  let result: ResponseLink;

  linkObj = {
    active: true,
    longUrl: 'https://facebook.com/data/master-039/',
    shortUrl: 'http://lawjife.com/rjHKNYZ6d',
    urlCode: 'rjHKNYZ6d',
    urlId: 1,
  }

  beforeEach(() => {

    linkService = jasmine.createSpyObj('LinkService', ['getLink', 'createLink']);
    // getLinkSpy = linkService.getLink.and.returnValue


    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: 'API_URL', useValue: apiUrl },
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(linkService).toBeTruthy();
  });

});
