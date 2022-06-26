class Circle
{
  radius:number;
  color:string;
  
  constructor();
  constructor(radius:number);
  constructor(radius:number, color:string);

   constructor( radius? : number , color?:string ){
    
    if ( color !== undefined && radius !== undefined ){
        this.radius = radius;
        this.color = color;
    }
       else if( radius !== undefined){
           this.radius = radius;
           }
       else {
          this.radius = 0;
       }
       
    } 
  
  getRadius():number{
      return this.radius;
  }
  
  setRadius(radius:number):void{
      this.radius = radius;
  }
  
  getColor():string{
       return this.color;
  }
  

  setColor(color:string):void{
      this.color = color;
  }
  
  toString():string{
      return this.radius.toString();
      
  }
  
  getArea():number{
      return 3.14*this.radius*this.radius;
  }
  
  getCircumference():number{
      return 2*3.14*this.radius;
  }
  
}  
  
let circle1 = new Circle();
let circle2 = new Circle(6);
let circle3 = new Circle(7,"Red");

console.log(circle2);
console.log(circle2.getRadius());
circle2.setRadius(9);
console.log(circle2);
console.log(circle2.getArea());
console.log(circle2.getCircumference());

console.log((circle3));
circle3.setRadius(10);
circle3.setColor("Blue");
console.log(circle3);
console.log(circle3.getArea());
console.log(circle3.getCircumference());
console.log(circle3.toString());

console.log(circle1);
console.log(circle1.getRadius());
console.log(circle1.getArea());
console.log(circle1.getCircumference());



