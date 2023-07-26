import {ClientsModel} from "./clients.model";
import {TypesModel} from "./types.model";

export class ContactsModel {
  id: any;
  description?: any;
  types?: TypesModel;
  person?: ClientsModel
}
