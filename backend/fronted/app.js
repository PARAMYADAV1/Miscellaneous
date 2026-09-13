// let arr1 = [1,2,3,4];
// let arr2= [1,2,3,4];
// arr1.sayhello = ()=>{
//      console.log("hello to param");
// }
// arr2.sayhello = ()=>{
//      console.log("hello to param");
// }

function PersonMaker(name,age){
    const Person = {
        name : name,
        age : age,
        talk(){
            console.log(`hi my name is ${this.name}`);
        }
    };
    return Person;
    
}
