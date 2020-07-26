import * as uuid from 'uuid';

export class Customer {
  public id: any;
  public name: string;
  public lastname: string;
  public mobile: string;
  public isRegular: boolean;

  constructor(
    name: string,
    lastname: string,
    mobile: string
  ) {
    this.id = uuid.v4();
    this.name = name;
    this.lastname = lastname;
    this.mobile = mobile;
    this.isRegular = false;
  }
}
