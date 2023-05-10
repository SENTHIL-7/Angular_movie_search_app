import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {
  constructor(private httpService: HttpClient) {
  }
  apiUrl = environment.apiUrl;
  getMethod(title: string) {
    return this.httpService.get(`${this.apiUrl}&s=${title}`)
  }
  postMethod(url: string, data: any) {
    return this.httpService.post(this.apiUrl + url, data)
  }
  deleteMethod(url: string, id: number) {
    return this.httpService.delete(this.apiUrl + url + '/' + id)
  }
  putMethod(url: string, id: number, body: any) {
    return this.httpService.put(this.apiUrl + url + '/' + id, body)
  }
  getJson(url: string) {
    return this.httpService.get('/assets/' + url)
  }
}
