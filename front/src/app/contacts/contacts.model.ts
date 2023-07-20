import {ClientsModel} from "../clients/clients.model";
import {TypesModel} from "../types/types.model";

export class ContactsModel {
  id: any;
  description?: any;
  type_id?: any;
  person_id?: any;
  types?: TypesModel;
  person?: ClientsModel
}
