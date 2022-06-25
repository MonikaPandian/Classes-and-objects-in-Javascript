class Person
{
       
  constructor(fname, lname, age)
   {
         this.fname = fname;
         this.lname = lname;
          this.age = age;     
    }
  
  getFname()
  {
    return this.fname;
  }
  
  getLname()
  {
    return this.lname;
  }
  
  getAge()
  {
    return this.age;
  }

  
  setAge(age)
  {
    this.age = age;
  }

}

class Subperson extends Person{
   setphysic(height,weight){
     this.height = height;
     this.weight = weight;
  }
  
    getphysic(){
      return [this.height,this.weight];
}
}
let p = new Person("Fred","Flintstone",31);
console.log(p);
console.log(p.getFname());
console.log(p.getLname());
console.log(p.getAge());
p.setAge(45);
console.log(p.getAge());
console.log(p);
let p1 =  new Subperson("John","Doe",30);
console.log(p1);
p1.setphysic(5.5,60);
console.log(p1.getphysic());