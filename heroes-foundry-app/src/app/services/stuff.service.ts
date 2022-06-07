import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StuffService {
  url: string = 'http://localhost:8080/personnage/stuff';
  constructor(httpClient : HttpClient) { }

//Pour moi là c'est pas bon parce que on idique pas le joueur
//duquel on veut son stuff
  getAll(): Observable<Stuff[]>
  {
    return this.httpClient.get<Stuff[]>
  }
    public List<Stuff> getAll() {
        return stuffRepository.findAll();
    }

    public Stuff getById(Long id) {
        return stuffRepository.findById(id).orElseThrow(StuffException::new);
    }

    public Stuff create(Stuff stuff) {
        return stuffRepository.save(stuff);
    }

    public Stuff update(Stuff stuff) {
        return stuffRepository.save(stuff);
    }

    public void delete(Stuff stuff) {
        stuffRepository.delete(stuff);
    }

    public void deleteById(Long id) {
        stuffRepository.deleteById(id);
    }
}
}

