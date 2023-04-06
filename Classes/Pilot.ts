export class Pilot {
  
    private Food: number = 100
    private Water: number = 100

    incrementFood(value: number) {
      if (this.Food + value <=100) {
        this.Food += value
      }
       
    }
    incrementWater(value: number) {
      if (this.Water + value <=100) {
        this.Water += value
      }
    }
    DecrementFood(value: number) {
      this.Food -= value 
    }
    DecrementWater(value: number) {
      this.Food -= value 
    }
  
    constructor(food: number, water: number) {
      this.Food = food
      this.Water = water
    }
  }
