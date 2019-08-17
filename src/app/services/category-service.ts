import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Category, CategoryAttrs } from '../models/category';

@Injectable({
    providedIn: 'root'
  })
  export class CategoryService {
  
    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:8080/lbd-library/api/categories';
  
    getCategorys(): Observable<Category[]> {
      return this.http.get<CategoryAttrs[]>(this.baseUrl).pipe(
        map((data) => data.map((CategoryAttrs) => new Category(CategoryAttrs)))
      );
    }
  
    getCategoryById(id: number): Observable<Category> {
      return this.http.get<CategoryAttrs>(this.baseUrl + id);
    }
  
    createCategory(category: Category): Observable<Category> {
      return this.http.post<CategoryAttrs>(this.baseUrl, category);
    }
  
    updateCategory(category: Category): Observable<Category> {
      return this.http.put<CategoryAttrs>(this.baseUrl + category.id, category);
    }
  
    deleteCategory(id: number): Observable<Category> {
      return this.http.delete<Category>(this.baseUrl + id);
    }
}