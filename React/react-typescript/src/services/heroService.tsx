import SuperHeros from "../models/superHeros";

export default class HeroService {
  static getHeroes(): Promise<SuperHeros[]> {
    return fetch("http://localhost:8000/superHeros").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  static getHeros(id: number): Promise<SuperHeros> {
    return fetch(`http://localhost:8000/superHeros/${id}`)
    .then((response) => response.json())
        .then((data) => (this.empty(data) ? null : data))
        .catch((error) => this.error(error))
  }

  static createHeros(hero: SuperHeros): Promise<SuperHeros[]>{
    return fetch(`http://localhost:8000/superHeros/`, {
        method: 'POST',
        headers: {"content-type":"application/json"},
        body: JSON.stringify(hero),
    })
    .then((response) => response.json())
    .catch((error) => this.error(error));
  }

  static majHeros(hero: SuperHeros): Promise<SuperHeros>{
    return fetch(`http://localhost:8000/superHeros/${hero.id}`, {
        method: 'PUT',
        headers: {"content-type":"application/json"},
        body: JSON.stringify(hero),
    })
    .then((response) => response.json())
    .catch((error) => this.error(error));
  }

  static suprHeros(hero: SuperHeros): Promise<{}>{
    return fetch(`http://localhost:8000/superHeros/${hero.id}`,{
      method: 'DELETE',
      headers: {"content-type":"application/json"}
    })
  }
  static ajoutHeros(hero: SuperHeros): Promise<SuperHeros>{
    return fetch(`http://localhost:8000/superHeros/`,{
        method: 'POST',
        body: JSON.stringify(hero),
        headers: {"content-type":"application/json"},
    })
    .then((response) => response.json())
    .catch((error) => this.error(error));
  }

  static empty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }
  
  static error(error: Error): void {
    console.error(error);
  }
}
