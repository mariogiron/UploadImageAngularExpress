import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: ListaProductosComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'productos/new', component: FormProductoComponent },
  { path: '**', component: ListaProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
