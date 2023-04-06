import {Pilot} from "./Pilot"

class Cat extends Pilot {
    private Agility: number;
  
    constructor(food: number, water: number, agility: number) {
      super(food, water);
      this.Agility = agility;
    }
  }