import { Component } from '@angular/core';

//Interface to make custom type
interface Pokemon{
  id: number;
  type: string;
  imageURL: string;
  description: string;
  trainerName?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '<em>Learning</em>';

  //List of pokemon
  myList: PokemonList;

  constructor(){

    let name: string; //explicitly set type to string
    name = 'Peter';

    let newName = 'Peter'; //implicitly set type to string

    //New pokemon object
    let pikachu: Pokemon;
    pikachu = {
      id: 0,
      type: "Electric",
      imageURL: "https://something",
      description: "Most popular pokemon",
      trainerName: "Ash"
    };

    let eevee: Pokemon;
    eevee = {
      id: 1,
      type: "Normal",
      imageURL: "https://something",
      description: "Special pokemon"
    };

    //Display pokemon info
    this.processPokemon(pikachu);
    this.processPokemon(eevee);

    //Initilize my pokemon list
    this.myList = new PokemonList(pikachu);
    console.log("My list of pokemon:", this.myList.items)
  }

  //Pokemon Function
  processPokemon (myPokemon: Pokemon): void{
    console.log("Type of my pokemon is", myPokemon.type, " | Trainer:", myPokemon.trainerName)
  }

}

class PokemonList{
  static pokemonCount = 0;
  private _items: Pokemon[];

  constructor(item: Pokemon){
    this._items = []; //initialize array
    this._items[0] = item;
    this.increaseCount();
  }

  //Getter
  get items(): Pokemon[]{
    return this._items;
  }

  increaseCount(){
    return ++PokemonList.pokemonCount;
  }

}
