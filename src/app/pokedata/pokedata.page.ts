import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokeServiceService } from '../poke-service.service';



@Component({
  selector: 'app-pokedata',
  templateUrl: './pokedata.page.html',
  styleUrls: ['./pokedata.page.scss'],
})



export class PokedataPage implements OnInit {

  url: string;
  pokemon: any;
  pokemonStatus: string

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) { 
    this.pokemonStatus = "about";
  }

  async ngOnInit() {
    this.url = await this.pokeService.getTempData("url")
    this.httpClient.get(this.url).subscribe((res: any) => {
      this.pokemon = res;
      console.log(res);
    }, err => {
      console.log(err);
    })

  }

}
