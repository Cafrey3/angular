import {UserInterface} from "./user.interface";
import {AddressInterface} from "./address.interface";
import {CompanyInterface} from "./company.interface";

export interface UserDetailsInterface extends UserInterface {
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressInterface;
  phone: number;
  website: string;
  company: CompanyInterface;
}
