import {IUser} from "./IUser";
import {IAddress} from "./IAddress";
import {ICompany} from "./ICompany";

export interface IUserDetails extends IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: number;
  website: string;
  company: ICompany;
}
