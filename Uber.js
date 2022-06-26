4. write a class to calculate uber price.

class Uber
{
  constructor(dist_travelled,luggage,persons)
  {
    this.dist_travelled = dist_travelled;
    this.luggage = luggage;
    this.persons = persons;
  }
  
  getPriceTaxi()
  {
     return (this.dist_travelled* 150 + this.luggage)*this.persons;
  }
  getPriceAuto()
  {
    return (this.dist_travelled* 120 + this.luggage)*this.persons;
  }
  getPriceBike()
  {
    return (this.dist_travelled* 90 + this.luggage)*this.persons;
  }
}

let ride1 = new Uber(20,50,4);
console.log(ride1.getPriceTaxi());

let ride2 = new Uber(40,50,3);
console.log(ride2.getPriceAuto());

let ride3 = new Uber(25,20,2);
console.log(ride3.getPriceBike());
