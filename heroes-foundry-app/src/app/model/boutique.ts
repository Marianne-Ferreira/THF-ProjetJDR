export class Boutique {
  public constructor(
    protected _id?: number,
    protected _nomStuff?: string,
    protected _prix?: number,
    protected _isAvailable?: boolean
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get nomStuff(): string | undefined {
    return this._nomStuff;
  }

  get prix(): number | undefined {
    return this._prix;
  }

  get isAvailable(): boolean | undefined {
    return this._isAvailable;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  set nomStuff(value: string | undefined) {
    this._nomStuff = value;
  }

  set prix(value: number | undefined) {
    this._prix = value;
  }

  set isAvailable(value: boolean | undefined) {
    this._isAvailable = value;
  }
}
