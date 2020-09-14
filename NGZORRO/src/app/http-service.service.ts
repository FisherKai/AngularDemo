import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';

/**
 * Http拦截器的作用，可以为
 * 1、需要给所有的请求修改请求地址
 * 2、需要给所有请求参数设置新的请求报文头
 * 3、需要监听所有请求的状态码
 * 以上带来便利
 */
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private baseUrl = '';

  constructor(public http: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url).pipe(
      retry(2),
      map(this.extractData),
      tap(() => { }),
      catchError(this.handleError('get', []))
    );
  }

  public post(url: string, data: any = {}): Observable<any> {
    return this.http.post(this.baseUrl + url, data).pipe(
      retry(2),
      map(this.extractData),
      tap(() => { }),
      catchError(this.handleError('post', []))
    );
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  // ?:为可选参数
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }
}
