import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeServiceService } from '../poke-service.service';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { PokeServiceService } from '../poke-service.service';



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
    // autoplay: {
    //   delay: 1000,
    //   disableOnInteraction: false
    // }
  }
  
  
  
  constructor(private route: ActivatedRoute, private pokeService: PokeServiceService) { 
    this.pokemonStatus = "about";
  }
  
  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.pokeService.getPokeDetails(index).subscribe(details => {
      console.log('Details', details);
      this.details = details;
    })

  }

}
