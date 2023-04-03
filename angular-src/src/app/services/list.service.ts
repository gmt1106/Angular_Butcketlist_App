import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { List } from '../models/list';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private httpClient: HttpClient) {}

  private serverApi = 'http://localhost:8080';

  public getAllLists(): Observable<List[]> {
    let URI = `${this.serverApi}/bucketlist/`;
    return this.httpClient.get(URI).pipe(map((res: any) => <List[]>res.lists));
  }

  public deleteList(listId: string) {
    let URI = `${this.serverApi}/bucketlist/${listId}`;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.httpClient.delete(URI, { headers });
  }

  public addList(list: List) {
    let URI = `${this.serverApi}/bucketlist/`;
    let headers = new HttpHeaders();
    let body = {
      title: list.title,
      description: list.description,
      category: list.category,
    };
    headers.append('Content-Type', 'application/json');
    return this.httpClient.post(URI, body, { headers });
  }
}
