import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PokeServiceService } from "../poke-service.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  pokemonsList: any[] = [];
  next: any;
  pokemons = [];

  constructor(private httpClient: HttpClient, private route: Router, private pokeService: PokeServiceService) {
    this.httpClient.get("https://pokeapi.co/api/v2/pokemon").subscribe(
      (res: any) => {
        for (let i = 0; i < res.results.length; i++) {
          this.pokemonsList.push(res.results[i]);
        }
        console.log(this.pokemonsList);
        this.next = res.next;
      },
      err => {
        console.log(err);
      }
    );
  }

  pokemonData(url) {
    this.route.navigateByUrl("/pokedata");
    this.pokeService.setTempData("url", url);
  }

  getMore(event) {
    if (this.next != null) {
      this.httpClient.get(this.next).subscribe(
        (res: any) => {
          console.log(res);
          for (let i = 0; i < res.results.length; i++) {
            this.pokemonsList.push(res.results[i]);
          }
          this.next = res.next;
          event.target.complete();
        },
        err => {
          console.log(err);
        });
    }
    else {
      event.target.disabled = true;
    }

  }
}