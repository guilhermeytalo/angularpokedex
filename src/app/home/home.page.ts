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
export class HomePage implements OnInit {
  offset = 0;
  pokemon = [];
  i : any;
  color: any;

  // @ViewChild("IonInfiniteScroll", {static:true}) infinite: IonInfiniteScroll; mapea um elemnto do html

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) { }

  ngOnInit() {
    this.loadPokemon();
    
  }

  // PokeColor(){
  //   if(this.PokeColor = this.i) 
  //   return this.color =  "#49D0B0";
  // }

  loadPokemon(loadmore = false, event?) {
    
    if (loadmore) {
      this.offset += 20
      if (this.offset === 40) {
        event.target.disabled = true;
        // if(this.i === 1) {
        //   this.color = "#49D0B0";
        // }
        return
      }
    }

   
    this.pokeService.getPokemon(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = [...this.pokemon, ...res];

      if (event) {
        event.target.complete();
      }
    });



  }

}