import { Compte } from './compte';
export class Joueur extends Compte {
  public constructor(private _pseudo?: string) {
    super();
  }

  get pseudo(): string | undefined {
    return this._pseudo;
  }

  set pseudo(value: string | undefined) {
    this._pseudo = value;
  }
}
