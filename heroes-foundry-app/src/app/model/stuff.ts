import { Consommables } from './consommables';
import { Equipement } from './equipement';

export class Stuff {
  public constructor(
    private _id?: number,
    private _quantite?: number,
    private _equipement?: Equipement,
    private _consommables?: Consommables
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get quantite(): number | undefined {
    return this._quantite;
  }

  set quantite(value: number | undefined) {
    this._quantite = value;
  }

  get equipement(): Equipement | undefined {
    return this._equipement;
  }

  set equipement(value: Equipement | undefined) {
    this._equipement = value;
  }

  get consommables(): Consommables | undefined {
    return this._consommables;
  }

  set consommables(value: Consommables | undefined) {
    this._consommables = value;
  }
}
