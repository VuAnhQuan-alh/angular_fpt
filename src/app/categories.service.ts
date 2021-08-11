import { TypeCategories } from './data.type';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CategoriesService {
  API: string = 'http://localhost:3004/categories';

  constructor(private http: HttpClient) {};
  list(): Observable<TypeCategories[]> {
    return this.http.get<TypeCategories[]>(this.API);
  };
  specific(id: number): Observable<TypeCategories> {
    return this.http.get<TypeCategories>(`${this.API}/${id}`);
  };
}