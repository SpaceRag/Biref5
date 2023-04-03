
class Geko extends Pilot {
    private Temperature: number;
  
    constructor(food: number, water: number, temperature: number) {
      super(food, water);
      this.Temperature = temperature;
    }
  }