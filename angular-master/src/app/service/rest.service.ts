import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {HttpParams} from "@angular/common/http";
// const request = require('request');


const NAVER_CLIENT_ID     = 'rkGs4ri_LDBJWxH4thyy';
const NAVER_CLIENT_SECRET = 'VuINpm3hPd';
const endpoint = 'Rest API Adress';
const httpOptions = new Headers(
    { 'Content-Type': 'application/json',
      'X-Naver-Client-Id': NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
    }
);
const apiUrl = 'https://openapi.naver.com/v1/search/movie.json';


const option = {
  query  : '꽃', // 이미지 검색 텍스트
  start  : 1, // 검색 시작 위치
  display: 3, // 가져올 이미지 갯수
  sort   : 'sim', // 정렬 유형 (sim:유사도)
  filter : 'small' // 이미지 사이즈
};
const reqObj = {
  uri: apiUrl,
  qs: option,
  headers: {
    'X-Naver-Client-Id': NAVER_CLIENT_ID,
    'X-Naver-Client-Secret': NAVER_CLIENT_SECRET
  }
};

const headers = new HttpHeaders()
  .set('content-encoding', 'gzip')
  .set('Authorization', 'SSWS')
  .set('Content-Type', 'application/json; charset=UTF-8')
  .set('Access-Control-Allow-Credentials', "true")
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  .set('Access-Control-Max-Age', '3600')
  .set('Access-Control-Allow-Headers', '*')
  // .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization')
  .set('X-Naver-Client-Id', NAVER_CLIENT_ID)
  .set('X-Naver-Client-Secret', NAVER_CLIENT_SECRET);

@Injectable({
    providedIn: 'root'
})
export class RestService {

  private GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(
    private http: HttpClient
  ) { }

  private extractData(res: Response) {
      const body = res;
      return body || { };
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  getProduct(id: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url).pipe(
      tap(_ => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<any>(`getProduct id=${id}`))
    );
  }
  
  getHeroes(): Promise<any> {

    let params = new HttpParams();
    params = params.set('query', 'end');

    return this.http.get(`${apiUrl}`,
    {
      headers,
      params: {
        query: 'end'
      },
      observe: 'response'
    })
      .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
    // return this.http.get(reqObj)
    //   .toPromise()
      
  }

  async getHoliday(month: string, year: string) {
    let params = new HttpParams();
    params = params.set('query', 'end');
    let res;

    await this.http.get('http://localhost:8080/getRestDeInfo',
    {
      // headers,
      params: {
        year,
        month
      },
      // observe: 'response'
    })
    .toPromise()
    .then(response => {
      res = response;
      console.log(response);
      
    })
    .catch(console.log);
    return res;
  }

  getLocalServer() {
    let params = new HttpParams();
    params = params.set('query', 'end');
    return this.http.get('http://localhost:8080/demoapi',
    {
      headers,
      params: {
        
      },
    })
    .toPromise()
      .then(response => {
        console.log(response);
      })
      .catch(console.log);
  }

  async getMovie(keyword: string, display: string) {
    let res;
    let params = new HttpParams();
    params = params.set('query', 'end');
    await this.http.get('http://localhost:8080/getMovie',
    {
      params: {
        keyword,
        display
      },
    })
    .toPromise()
      .then(response => {
        console.log(response);
        res = response;
      })
      .catch(console.log);
    console.log(res);
    return res;
  }

  // CORS 테스트
  getBookList(data: string): Observable<any> {
     return this.http.get(`${this.GOOGLE_API}?orderBy=newest&q=${data}`) .pipe(map((books: any) => books.items || []));
  }

}
