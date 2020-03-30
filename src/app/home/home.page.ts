import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PokeServiceService } from "../poke-service.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit{
  offset = 0;
  pokemon = [];

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) { }

  ngOnInit(){
    this.loadPokemon();
  }

  loadPokemon() {
    this.pokeService.getPokemon(this.offset).subscribe( res => {
      console.log('result: ', res);
      this.pokemon = res;
    })
  }
}