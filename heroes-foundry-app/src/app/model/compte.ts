export class Compte {
  public constructor(
    public _id?: number,
    public _nom?: string,
    public _prenom?: string,
    public _login?: string,
    public _password?: string
  ) {}

  get id(): number | undefined {
    return this._id;
  }
  get nom(): string | undefined {
    return this._nom;
  }

  get prenom(): string | undefined {
    return this._prenom;
  }

  get login(): string | undefined {
    return this._login;
  }

  get password(): string | undefined {
    return this._password;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }

  set login(value: string | undefined) {
    this._login = value;
  }

  set password(value: string | undefined) {
    this._password = value;
  }
}
