import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {TypesModel} from "../../models/types.model";
import {TypeService} from "../../services/type.service";
import {MensagemService} from "../../services/messages.service";
import {ConfirmationService} from "primeng/api";
import {ClientsModel} from "../../models/clients.model";

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
    protected typesService: TypeService,
    protected formBuilder: FormBuilder,
    protected mensagemService: MensagemService,
    protected confirmationService: ConfirmationService
  ) {
  }

  ngOnInit() {
    this.listType();
    this.initForm();

    this.types.forEach((type) => (type.date = new Date(<Date>type.date)));
  }

  initForm() {
    this.form = this.formBuilder.group({
      id:null,
      description: ['', [Validators.required]]
    })
  }

  listType() {
    this.typesService.getType().subscribe((data: TypesModel[]) => {
      this.types = data;
    });
  }

  createType() {
    this.typesService.addType(this.form.value).subscribe(value => {
      this.form.value = new TypesModel();
      this.listType();
    });
  }

  editarTipo(id: any) {
    this.typesService.getTypeById(id).subscribe((value:any) => {
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
      this.listType();
    });
  }

  excluirTipo(id: any) {
    this.confirmarExclusao(id);
  }

  confirmarExclusao(id: any) {
    this.confirmationService.confirm({
      message: 'Deseja realmente excluir o tipo de contato?',
      accept: () => {
        this.typesService.deleteType(id)
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
        this.listType();
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
