import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  orient = '';
  order_by = '';
  per_page: string = '';
  page: string = '';
  color = '';

  // put your acesskey right bellow
  // check here -> https://unsplash.com/documentation#getting-started
  accessKey = '';

  url = 'https://api.unsplash.com/search/photos';

  constructor(private http: HttpClient) { }

  public getSearchData(
                query: string,
                oriention?: string,
                orderBy?: string,
                perPage?: number,
                pageIndex?: number,
                colorVarition?: string) {

    oriention ? this.orient = `&orientation=${oriention}` : this.orient = '';
    orderBy ? this.order_by = `&order_by=${orderBy}` : this.order_by = '';
    perPage ? this.per_page = `&per_page=${perPage}` : this.per_page = '';
    pageIndex ? this.page = `&page=${pageIndex}` : this.page = '';
    colorVarition ? this.color = `&color=${colorVarition}` : this.color = '';
    
    return this.http.get(
      `${this.url}?query=${query}${this.orient}${this.order_by}${this.per_page}${this.page}${this.color}&client_id=${this.accessKey}`
      );
  }
}
