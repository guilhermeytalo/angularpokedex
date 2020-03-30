import { Injectable } from '@angular/core';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  
  baseUrl = 'https://pokeapi.co/api/v2';
  imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
 
  constructor(private http: HttpClient) { 

  }
 getPokemon(offset = 0) {
   return this.http.get(`${this.baseUrl}/pokemon?offset=${offset}&limit=20`).pipe(
     map(result => {
       return result['results'];
     }),
     map(pokemons => {
       return pokemons.map((poke, index) => {
         poke.image = this.getPokeImage(index + offset + 1);
         poke.pokeIndex = offset + index + 1;
         return poke;
       })
     })
   )
 }
  
 getPokeImage(index) {
   return `${this.imageUrl}${index}.png`;
 }
}
