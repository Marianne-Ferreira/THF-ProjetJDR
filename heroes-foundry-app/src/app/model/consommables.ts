import { Boutique } from './boutique';
export class Consommables extends Boutique {
  public constructor(private _libelle?: string, private _description?: string) {
    super();
  }
  get libelle(): string | undefined {
    return this._libelle;
  }

  set libelle(value: string | undefined) {
    this._libelle = value;
  }


  get description(): string | undefined {
    return this._description;
  }

  set description(value: string | undefined) {
    this._description= value;
  }


}
