import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Obj} from '../../shared/interfaces';
import {UrlService} from './url.service';

@Injectable()
export class HttpService{
  constructor(private http: HttpClient, private urlService: UrlService) {
  }

  // GET Method
  public get(url: string, params?: Obj): Promise<any>{

    const buildUrl = (params !== undefined) ? url + '?' + this.urlService.paramsToUrl(params) : url ;

    const promise = new Promise( (resolve, reject) => {
      const req = this.http.get(buildUrl);

      req.subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        },
        () => {

        }
      );
    });

    return promise;

  }

}
