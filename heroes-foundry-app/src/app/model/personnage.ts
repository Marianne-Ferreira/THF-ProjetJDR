import { PerformanceNodeTiming } from 'perf_hooks';

export class Personnage {
  public constructor(
    private _id?: number,
    private _gold?: number,
    private _nom?: string,
    private _prenom?: string,
    private _age?: number,
    private _genre?: string,
    private _alignement?: string,
    private _race?: string,
    private _caracteristiques?: Caractéristiques, //A VERIFIER PARCE QUE LES DERNIERS SONT DES CLASSES A PAR ENTIERES
    private _stats?: Stats, //CREER LES MODELS SUIVANTS SVP
    private _stuff?: Stuff,
    private _metier?: string
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get gold(): number | undefined {
    return this._gold;
  }

  get nom(): string | undefined {
    return this._nom;
  }

  get prenom(): string | undefined {
    return this._prenom;
  }

  get age(): number | undefined {
    return this._age;
  }

  get genre(): string | undefined {
    return this._genre;
  }

  get alignement(): string | undefined {
    return this._alignement;
  }

  get race(): string | undefined {
    return this._race;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  set gold(value: number | undefined) {
    this._gold = value;
  }

  set nom(value: string | undefined) {
    this._nom = value;
  }

  set prenom(value: string | undefined) {
    this._prenom = value;
  }

  set age(value: number | undefined) {
    this._age = value;
  }

  set genre(value: string | undefined) {
    this._genre = value;
  }

  set alignement(value: string | undefined) {
    this._alignement = value;
  }

  set race(value: string | undefined) {
    this._race = value;
  }

  get caracteristiques(): Caracteristiques | undefined {
    return this._caracteristiques;
  }

  set id(value: Caracteristiques | undefined) {
    this._caracteristiques = value;
  }

  get stats(): Stats | undefined {
    return this._stats;
  }

  set id(value: Stats | undefined) {
    this._stats = value;
  }

  get stuff(): Stuff | undefined {
    return this._stuff;
  }

  set id(value: Stuff | undefined) {
    this._stuff = value;
  }

  get metier(): string | undefined {
    //c'est une enum donc à voir si on place le nom de l'enum ou le genre du truc qui sort
    return this._metier;
  }

  set id(value: string | undefined) {
    this._metier = value;
  }
}
