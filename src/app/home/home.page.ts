import { HttpClient } from "@angular/common/http";
import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PokeServiceService } from "../poke-service.service";
import { IonInfiniteScroll } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  pokemonsList: any;
  next: any;
  lista: any;
  offset = 50;
  pokemons = [];

  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) {
    this.httpClient.get("https://pokeapi.co/api/v2/pokemon").subscribe(
      (res: any) => {
        console.log(res);
        this.pokemonsList = res.results;
        console.log(this.pokemonsList);
        this.next = res.next;
        console.log(res.next);
        this.next = res.next;
        console.log(this.next);
        // this.pokemonsList.push(this.next);
        // console.log(this.pokemonsList.push);

      },
      err => {
        console.log(err);
      }
    );
  }

  pokemonData(url) {
    this.route.navigateByUrl("/pokedata");
    this.pokeService.setTempData("url", url);
  }


  loadPokemon(loadMore = false, event?){
    if(loadMore) {
      this.offset += 20;
    }


    this.pokeService.getPokemons(this.offset).subscribe(next => {
      console.log('result', next);
      this.pokemonsList = [...this.pokemonsList, ...next];
  
      if (event) {
        event.target.complete();
      }
  
      if (this.offset == 40) {
        this.infinite.disabled = true;
      }
      });

  }

    
  

  






