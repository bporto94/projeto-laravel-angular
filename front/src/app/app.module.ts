import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ClientsComponent} from './components/clients/clients.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ClientsService} from "./services/clients.service";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {FieldsetModule} from "primeng/fieldset";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
import {PaginatorModule} from "primeng/paginator";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {LoadingComponent} from './components/loading/loading.component';
import {LoadingInterceptor} from "./components/interceptors/loading.interceptor";
import {PanelModule} from "primeng/panel";
import {TypesComponent} from './components/types/types.component';
import {AppRoutingModule} from "./app-routing.module";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {StyleClassModule} from "primeng/styleclass";
import {ConfirmationService, MessageService} from "primeng/api";
import {TypeService} from "./services/type.service";
import {CardModule} from "primeng/card";
import {TagModule} from "primeng/tag";
import {MultiSelectModule} from "primeng/multiselect";
import {MessagesModule} from "primeng/messages";
import {MenubarModule} from "primeng/menubar";
import {DialogModule} from "primeng/dialog";
import { ContactsComponent } from './components/contacts/contacts.component';
import {AccordionModule} from "primeng/accordion";
@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    LoadingComponent,
    TypesComponent,
    ContactsComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ButtonModule,
        TableModule,
        ScrollPanelModule,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        RippleModule,
        FieldsetModule,
        BrowserAnimationsModule,
        DividerModule,
        PaginatorModule,
        ProgressSpinnerModule,
        PanelModule,
        ConfirmDialogModule,
        StyleClassModule,
        CardModule,
        TagModule,
        MultiSelectModule,
        MessagesModule,
        MenubarModule,
        DialogModule,
        AccordionModule,

    ],
  providers: [ClientsService, MessageService, TypeService, ConfirmationService, {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
