export class UserModel {
  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public sendProducts = false,
    public addressType = 'home',
    public street1?: string,
    public street2?: string,
    public coutry = '',
    public city?: string,
    public zip?: string
  ) {}
}

