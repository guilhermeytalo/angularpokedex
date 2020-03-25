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


  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) { }

  async ngOnInit() {
    this.url = await this.pokeService.getTempData("url")
    this.httpClient.get(this.url).subscribe((res: any) => {
      console.log(res);
      this.pokemon = res;
    }, err => {
      console.log(err);
    })

  }

}
