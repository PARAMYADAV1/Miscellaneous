
//simple implementation

// let arr1 = [1,2,3,4];
// let arr2= [1,2,3,4];
// arr1.sayhello = ()=>{
//      console.log("hello to param");
// }
// arr2.sayhello = ()=>{
//      console.log("hello to param");
// }
// factory function


// function PersonMaker(name,age){
//     const Person = {
//         name : name,
//         age : age,
//         talk(){
//             console.log(`hi my name is ${this.name}`);
//         }
//     };
//     return Person;
    
// }

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     Person.prototype.talk = function(){
//         console.log(`hi i am ${this.name}`);
//     };
   
//     }

//classes prototype
// class Person{
//     constructor(name,age){
//     this.name = name;
//     this.age = age;
//     }
//     talk(){
//         console.log(`hi i am ${this.name}`);
//         console.log(`and i am ${this.age} year old`);  
//     };
   
//     }
 // inheritance
//  class Person{
//     constructor(name,age){
//        console.log("person called constructor");
        
//     this.name = name;
//     this.age = age;
//     }
//     talk(){
//         console.log(`hi i am ${this.name}`);
//         console.log(`and i am ${this.age} year old`);  
//     }
   
//     }
//     class Student extends Person{
//         constructor(name,age,marks){
//             console.log("student constructor called");
//             super(name,age);
//             this.marks = marks;

//         }
//     }
//     class Teacher extends Person{
//         constructor(name,age,subject){
//             super(name,age);
//             this.subject = subject;

//         }
//     }

class mamall{
    constructor (type){
        this.type = type;
        
    }
        Eat(){
           console.log(`i am eating...${this.Eat}`);
    }
}
class dog extends mamall{
    constructor(type,eat,bark){
        super(type);
        this.bark = bark;
    }
    bark(){
        console.log("i am barkibg...");
        console.log(`i am barking...${this.bark}`);
    }
}
class cat extends mamall{
    constructor(type,eat){

        super(type);
    }
    meow(){
        console.log(" i am meow...");
    
    }
}