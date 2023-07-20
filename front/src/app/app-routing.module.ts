import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {TypesComponent} from "./types/types.component";
import {AppComponent} from "./app.component";
import {ContactsComponent} from "./contacts/contacts.component";

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'clientes', component: ClientsComponent, title: 'Clientes'},
  { path: 'detail/:id', component: ClientsComponent },
  {path: 'contatos', component: ContactsComponent, title: 'Contatos'},
  {path: 'tipos', component: TypesComponent, title: 'Tipos de Contato'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
