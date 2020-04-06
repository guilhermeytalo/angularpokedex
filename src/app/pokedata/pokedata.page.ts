import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeServiceService } from '../poke-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokedata',
  templateUrl: './pokedata.page.html',
  styleUrls: ['./pokedata.page.scss'],
})



export class PokedataPage implements OnInit {
  pokemonStatus: any;
  details : any;
  
  slideOpts = {
    initialSlide: 2,
    length: 4,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  }
  id : any;
  
  constructor(private route: ActivatedRoute, private pokeService: PokeServiceService, private http: HttpClient) { 
    this.pokemonStatus = "about";
  }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe((details : any) => {
      console.log('Details', details);
      this.details = details;
      this.id = details.id;
      console.log(this.id);
    })
  }

  pokeColor() {
    if (this.id >= 0 && this.id <= 3) {
      return 'grass'
    } else if (this.id >= 3 && this.id <= 6 || this.id >= 37 && this.id <= 38)  {
      return 'fire'
    } else if ( this.id >= 7 && this.id <= 9 ) {
      return 'water'
    } else if (this.id >= 10 && this.id <= 15) {
      return 'bug'
    } else if (this.id >= 15 && this.id <= 22 || this.id >= 38 && this.id <= 40) {
      return 'normal'
    } else if (this.id >= 23 && this.id <= 24 || this.id >= 29 &&  this.id <= 34) {
      return 'poison'
    } else if (this.id>= 25 && this.id <= 26) {
      return  'electric'
    } else if (this.id>= 27 && this.id <= 28) {
      return  'ground'
    } else if (this.id >= 35 && this.id<= 36) {
      return 'fairy'
    }  
}

}
