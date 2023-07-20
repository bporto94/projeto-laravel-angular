import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bruno Porto Amoirm dos Santos',
        icon: 'pi pi-fw pi-check',
        routerLink: '/'
      },
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: 'clientes'
      },
      {
        label: 'Contatos',
        icon: 'pi pi-fw pi-phone',
        routerLink: 'contatos'
      },
      {
        label: 'Tipos de contato',
        icon: 'pi pi-fw pi-book',
        routerLink: 'tipos'
      },
    ];
  }
}
