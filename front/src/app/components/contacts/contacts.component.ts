import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MensagemService} from "../../services/messages.service";
import {ConfirmationService} from "primeng/api";
import {ContactsModel} from "../../models/contacts.model";
import {ContactsService} from "../../services/contacts.service";
import {TypeService} from "../../services/type.service";
import {TypesModel} from "../../models/types.model";
import {ClientsService} from "../../services/clients.service";
import {ClientsModel} from "../../models/clients.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{
  contacts: any[] = [];
  @Input() contact!: ContactsModel|null|undefined;
  types: TypesModel[]|undefined;
  clients: ClientsModel[]|undefined;
  visible: boolean = false;
  data: ContactsModel = new ContactsModel();
  exibeFormEditContact: boolean = false;

  form: any;

  constructor(
    protected contactsService: ContactsService,
    protected typesService: TypeService,
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
      client_id: new FormControl<ClientsModel | null>(null)
    })
  }

  listContacts() {
    this.contactsService.getContacts().subscribe((data: ContactsModel[]) => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }

  visualizarContato(id: any) {
    this.contactsService.getContactById(id).subscribe((data:ContactsModel) => {
      this.contact = data;
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
    this.typesService.getType().subscribe((data: TypesModel[]) => {
      this.types = data;
    });
  }

  listClients() {
    this.peopleService.getClients().subscribe((data: ClientsModel[]) => {
      this.clients = data;
    });
  }

  editarContato(id: any) {
    this.contactsService.getContactById(id).subscribe((value:any) => {
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
