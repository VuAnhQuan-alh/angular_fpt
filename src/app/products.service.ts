import { TypeProducts } from './data.type';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductsService {
  API: string = 'http://localhost:3004/products';

  constructor(private http: HttpClient) {};
  list(): Observable<TypeProducts[]> {
    return this.http.get<TypeProducts[]>(this.API);
  };
  read(id: number): Observable<TypeProducts> {
    return this.http.get<TypeProducts>(`${this.API}/${id}`);
  };
  create(data: TypeProducts): Observable<TypeProducts> {
    return this.http.post<TypeProducts>(this.API, data);
  };
  delete(id: number): Observable<TypeProducts> {
    return this.http.delete<TypeProducts>(`${this.API}/${id}`);
  };
  update(id: number, data: TypeProducts): Observable<TypeProducts> {
    return this.http.put<TypeProducts>(`${this.API}/${id}`, data);
  };
};