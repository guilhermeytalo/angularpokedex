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

  url:string

  constructor(private httpClient: HttpClient,private route: Router,private pokeService: PokeServiceService) { 
   
  }


  
  ngOnInit() {
    this.url = this.pokeService.getTempData("url")
    this.httpClient.get(this.url).subscribe((res:any)=>{
      console.log(res);
    },err =>{
      console.log(err);
    })
    }

}

//https://stackoverflow.com/questions/36039355/get-another-chunk-of-data
// https://www.google.com/search?q=get+id+data+pokeapi+angular&spell=1&sa=X&ved=2ahUKEwie4aPX_KfoAhWfIrkGHUZAAXIQBSgAegQICBAp&biw=1366&bih=657
//https://dribbble.com/shots/6540871-Pokedex-App