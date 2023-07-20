import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MensagemService} from "../services/messages.service";
import {ConfirmationService} from "primeng/api";
import {ContactsModel} from "./contacts.model";
import {ContactsService} from "../services/contacts.service";
import {TypesService} from "../services/types.service";
import {TypesModel} from "../types/types.model";
import {ClientsService} from "../services/clients.service";
import {ClientsModel} from "../clients/clients.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  contacts: any[] = [];
  @Input() contact!: ContactsModel|null|undefined;
  types: any[] | undefined;
  clients: any[] | undefined;
  visible: boolean = false;
  data: ContactsModel = new ContactsModel();
  exibeFormEditContact: boolean = false;

  form: any;

  constructor(
    protected contactsService: ContactsService,
    protected typesService: TypesService,
    protected peopleService: ClientsService,
    protected formBuilder: FormBuilder,
    protected mensagemService: MensagemService,
    protected confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.listContacts();
    this.initForm();
    this.listTypes();
    this.listClients();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id:[null],
      description: ['', [Validators.required]],
      type_id: new FormControl<TypesModel | null>(null),
      person_id: new FormControl<ClientsModel | null>(null)
    })
  }

  listContacts() {
    this.contactsService.listContacts().subscribe((value: any) => {
      this.contacts = value.data;
    });
  }

  visualizarContato(id: any) {
    this.contactsService.listContact(id).subscribe((value:any) => {
      this.contact = value.data;
    });
    this.visible = true;
  }

  createContact() {
    this.contactsService.addContact(this.form.value).subscribe(value => {
      this.form.value = new ContactsModel();
      this.listContacts();
    });
  }

  listTypes() {
    this.typesService.listTypes().subscribe((data: any) => {
      this.types = data.data;
    });
  }

  listClients() {
    this.peopleService.listClients().subscribe((data: any) => {
      this.clients = data.data;
    });
  }

  editarContato(id: any) {
    this.contactsService.listContact(id).subscribe((value:any) => {
      this.contact = value.data;
      this.form.patchValue(this.contact);
      this.exibeFormEditContact = true;
    });

  }

  atualizarContato() {
    this.contactsService.updateContact(this.form.value.id, this.form.value).subscribe(data => {
      this.contact = null;
      this.exibeFormEditContact = false;
      this.form.reset();
      this.listContacts();
    });
  }

  excluirContato(id: any) {
    this.confirmarExclusao(id);
  }

  confirmarExclusao(id: any) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o contato?',
      accept: () => {
        this.contactsService.removeContact(id)
          .subscribe({
            next: res => {
              if (res.sucesso) {
                this.mensagemService.addMessageSuccess('Exclusão realizada com sucesso.');
              } else {
                this.mensagemService.addMessageError(res.mensagem);
              }
            }, error: err => {
              if (err != null && err.error != null && err.error.mensagem != null) {
                this.mensagemService.addMessageError(err.error.mensagem);
              }
            }
          });
        this.listContacts();
      },
      acceptLabel: 'Sim',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Não'
    });
  }

  closeDialogContact() {
    this.exibeFormEditContact = false;
    this.form.reset();
  }

}
