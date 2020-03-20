import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokeServiceService } from '../poke-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonsList:any
  
  constructor(private httpClient: HttpClient, private route: Router,private pokeService: PokeServiceService) {
    this.httpClient.get('https://pokeapi.co/api/v2/pokemon').subscribe((res:any) => {
      console.log(res);
      this.pokemonsList = res.results;
      console.log(this.pokemonsList);
    },err =>{
      console.log(err);
    })
  }

  pokemonData(url){
    this.route.navigateByUrl("/pokedata")
    this.pokeService.setTempData("url", url)
  }
  
}





