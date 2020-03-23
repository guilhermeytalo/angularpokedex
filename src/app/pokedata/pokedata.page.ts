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
  abilities : any
  ability:any

  constructor(private httpClient: HttpClient,private route: Router,private pokeService: PokeServiceService) { 
   
  }


  
  ngOnInit() {
    this.url = this.pokeService.getTempData("url")
    this.httpClient.get(this.url).subscribe((res:any)=>{
      console.log(res);
      this.abilities = res.results 
      console.log(res.results);
      console.log(this.abilities);
      
    },err =>{
      console.log(err);
    })
    }

}
