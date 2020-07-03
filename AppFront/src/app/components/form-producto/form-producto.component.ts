import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpHeaders, HttpRequest, HttpClient } from '@angular/common/http';
import { ProductosService } from 'src/app/services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  formulario: FormGroup;
  files;

  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      descripcion: new FormControl(),
      precio: new FormControl(),
      activo: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // Creación del objeto donde incluimos todos los campos del formulario y además la imagen
    let fd = new FormData();
    fd.append('imagen', this.files[0]);
    fd.append('nombre', this.formulario.value.nombre);
    fd.append('descripcion', this.formulario.value.descripcion);
    fd.append('precio', this.formulario.value.precio);
    fd.append('activo', this.formulario.value.activo);

    // Delegamos el envío del formulario en el servicio
    this.productosService.create(fd).then(result => {
      this.router.navigate(['']);
    })
  }

  onChange($event) {
    this.files = $event.target.files;
  }

}
