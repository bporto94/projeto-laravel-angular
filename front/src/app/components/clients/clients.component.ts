import {Component, Input, OnInit} from '@angular/core';
import {ClientsService} from "../../services/clients.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ClientsModel} from "../../models/clients.model";
import {MensagemService} from "../../services/messages.service";
import {ConfirmationService} from "primeng/api";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: any[] = [];
  @Input() cliente: ClientsModel | null | undefined;
  data: ClientsModel = new ClientsModel();
  form: any;
  visible: boolean = false;
  exibeFormEditClient: boolean = false;
  contactsForm: boolean = false;
  constructor(
    protected clientsService: ClientsService,
    protected formBuilder: FormBuilder,
    protected mensagemService: MensagemService,
    protected confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.listClients();
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      contacts: this.formBuilder.array([])
    })
  }

  listClients() {
    this.clientsService.getClients().subscribe((data: ClientsModel[]) => {
      this.clients = data;
    });
  }

  visualizarCliente(id:any) {
   this.visible = true;
   return this.clientsService.getClientById(id).subscribe((data:ClientsModel) => {
      this.cliente = data;
    });
  }

  createClient() {
    console.log(this.form.value);
  }

  editarCliente(id: any) {
    this.clientsService.getClientById(id).subscribe((data:ClientsModel) => {
    this.cliente = data;
    this.form.patchValue(this.cliente);
    this.exibeFormEditClient = true;
    });
  }

  atualizarCliente() {
    this.exibeFormEditClient = false;
    this.clientsService.updateClient(this.form.value.id, this.form.value).subscribe((value:ClientsModel) => {
      this.cliente = null;
      this.form.reset();
      this.listClients();
    });
  }

  excluirCliente(id: any) {
    this.confirmarExclusao(id);
  }

  confirmarExclusao(id: any) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o cliente?',
      accept: () => {
        this.clientsService.deleteClient(id)
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
        this.listClients();
      },
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger'
    });
  }

  closeDialogCliente() {
    this.exibeFormEditClient = false;
    this.form.reset();
  }

  closeDialog() {
    this.cliente = null;
  }
}
