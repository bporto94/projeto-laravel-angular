import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TypesModel} from "../../models/types.model";
import {TypesService} from "../../services/types.service";
import {MensagemService} from "../../services/messages.service";
import {ConfirmationService, Message} from "primeng/api";
import {Table} from "primeng/table";
import {ContactsModel} from "../../models/contacts.model";

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {
  types: any[] = [];
  @Input() type!: TypesModel|null|undefined;
  data: TypesModel = new TypesModel();
  exibeFormEditType: boolean = false;
  form: any;
  constructor(
    protected typesService: TypesService,
    protected formBuilder: FormBuilder,
    protected mensagemService: MensagemService,
    protected confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.listTypes();
    this.initForm();

    this.types.forEach((type) => (type.date = new Date(<Date>type.date)));
  }

  initForm() {
    this.form = this.formBuilder.group({
      id:null,
      description: ['', [Validators.required]]
    })
  }


  listTypes() {
    this.typesService.listTypes().subscribe((data: any) => {
      this.types = data.data;
    });
  }

  createType() {
    this.typesService.addType(this.form.value).subscribe(value => {
      this.form.value = new TypesModel();
      this.listTypes();
    });
  }

  editarTipo(id: any) {
    this.typesService.listType(id).subscribe((value:any) => {
      this.type = value.data;
      this.form.patchValue(this.type);
      this.exibeFormEditType = true;
    });
  }

  atualizarTipo() {

    this.typesService.updateType(this.form.value.id, this.form.value).subscribe(data => {
      this.type = null;
      this.exibeFormEditType = false;
      this.form.reset();
      this.listTypes();
    });
  }

  excluirTipo(id: any) {
    this.confirmarExclusao(id);
  }

  confirmarExclusao(id: any) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o tipo de contato?',
      accept: () => {
        this.typesService.removeType(id)
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
        this.listTypes();
      },
      acceptLabel: 'Sim',
      acceptButtonStyleClass: 'p-button-success',
      rejectButtonStyleClass: 'p-button-danger',
      rejectLabel: 'Não'
    });
  }

  closeDialogType() {
    this.exibeFormEditType = false;
    this.form.reset();
  }

}
