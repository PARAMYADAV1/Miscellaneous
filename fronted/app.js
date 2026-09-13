// let arr1 = [1,2,3,4];
// let arr2= [1,2,3,4];
// arr1.sayhello = ()=>{
//      console.log("hello to param");
// }
// arr2.sayhello = ()=>{
//      console.log("hello to param");
// }

function personmaker(name,age){
    const person = {
        name : "param",
        age : 18,
        talk(){
            console.log(`hi my name is ${this.name}`);
        }
    }
    return person;
}