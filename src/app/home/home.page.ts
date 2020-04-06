import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { PokeServiceService } from "../poke-service.service";
// import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  offset = 0;
  pokemon = [];
  // i : number;
  
  // @ViewChild("IonInfiniteScroll", {static:true}) infinite: IonInfiniteScroll; mapea um elemnto do html

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) {}
  
  ngOnInit() {
    this.loadPokemon();
    
  }
  
  loadPokemon(loadmore = false, event?) {
    if (loadmore) {
      this.offset += 20
      if (this.offset === 40) {
        event.target.disabled = true;
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

  pokeColor(i) {
      if (i >= 0 && i <= 2) {
        return 'grass'
      } else if (i >= 3 && i <= 5 || i >= 36 && i <= 37)  {
        return 'fire'
      } else if ( i >= 6 && i <= 8 ) {
        return 'water'
      } else if (i >= 9 && i <= 14) {
        return 'bug'
      } else if (i >= 15 && i <= 21 || i >= 38 && i <= 40) {
        return 'normal'
      } else if (i >= 22 && i <= 23 || i >= 28 &&  i <= 33) {
        return 'poison'
      } else if (i>= 24 && i <= 25) {
        return  'electric'
      } else if (i>= 26 && i <= 27) {
        return  'ground'
      } else if (i >= 34 && i<= 35) {
        return 'fairy'
      }  
  }
  
}