import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PokeServiceService } from "../poke-service.service";
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit{
  offset = 0;
  pokemon = [];
  // @ViewChild(IonInfiniteScroll) 
  infinite: IonInfiniteScroll;
  
  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) { }

  ngOnInit(){
    this.loadPokemon();
  }

  loadPokemon(loadmore = false, event?) {
    if (loadmore)  {
      this.offset += 20
    }
    
    this.pokeService.getPokemon(this.offset).subscribe( res => {
      console.log('result: ', res);
        this.pokemon = [...this.pokemon, ...res];

        if (event) {
          event.target.complete();
        }

        if (this.offset == 125) {
          this.infinite.disabled = true;
        }
    });
  }

}