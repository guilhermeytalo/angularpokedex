import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokeServiceService } from '../poke-service.service';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  pokemonsList:any
  next: any
  lista: any
  offset = 0;
  pokemon = [];
  // @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;
  

  constructor(private httpClient: HttpClient, private route: Router,private pokeService: PokeServiceService) {
    
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon').subscribe((res:any) => {
      console.log(res);
      this.pokemonsList = res.results;
      console.log(this.pokemonsList);
      this.next = res.next
      console.log(this.next);
    },err =>{
      console.log(err);
    })
  }

  pokemonData(url){
    this.route.navigateByUrl("/pokedata")
    this.pokeService.setTempData("url", url)
  }
  
  // loadPokemon(loadMore = false, event?) {
  //   if (loadMore) {
  //     this.offset += 20;
  //   }
  // }

  // this.pokeService.getPokemon(this.offset).subscribe(res=>{
  //   console.log('result: ', res);
  //   this.pokemon = [...this.pokemon, ...res];
  //   if (event) {
  //     event.target.complete();
  //   }
  //   if (this.offset == 50) {
  //     this.infinite.disabled  = true;
  //   }
  // });

  
  
}





