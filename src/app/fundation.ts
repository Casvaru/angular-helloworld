const add = (number1 :number , number2 :number)=>{
  return number1 + number2
}
class User {
  name: string;
  age: number

  constructor(name: string, age:number){
    this.name = name
    this.age = age
  }
}

const carlos = new User('carlos', 24);