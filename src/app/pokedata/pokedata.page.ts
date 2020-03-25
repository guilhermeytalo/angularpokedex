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

  url: string
  abilities: any
  ability: any
  pokemon: any[] = []
  

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) { }

  ngOnInit() {
    this.url = this.pokeService.getTempData("url")
    this.httpClient.get(this.url).subscribe((res: any) => {
      console.log(res);
      // this.ability = res.name
      // console.log(res.name);
      // this.ability = res.abilities
      // console.log(res.abilities);
      // this.ability = res.types
      // console.log(res.types);
      // this.ability = res.weight
      // console.log(res.weight);
      // this.ability = res.height
      // console.log(res.height);
      // this.ability = res.stats
      // console.log(res.stats);
      // this.ability = res.moves
      // console.log(res.moves);
      this.ability = res
      console.log(this.ability);
      
    }, err => {
      console.log(err);
    })
  }



}
