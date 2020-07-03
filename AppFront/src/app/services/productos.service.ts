import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api/productos';
  }

  getAll() {
    return this.httpClient.get<Producto[]>(this.baseUrl).toPromise();
  }

  create(fd: FormData) {
    return this.httpClient.post(this.baseUrl, fd).toPromise();
  }

}
