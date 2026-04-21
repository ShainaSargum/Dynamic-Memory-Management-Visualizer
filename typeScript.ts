//ts is superset of js
//add all the types and includes all the features in js
//error checking while running the code
//js
// var age = 4
// age = "hello"//error

//install
//npm install -g typescript
//version
//tsc -v
//type system-what type of data variable can hold 
// let name1:string = "Shaina"
// let age:number = 25
// let isStudent:boolean = true
// //arr
// let number:number[]=[1,2,3,4]
// let names:string[]=["r","t"]
// //object
// let user:{StuName:string,age:number}={
//     StuName:"lpu",
//     age:16
// }
//run-tcs filename.ts

//Interfaces in ts
//interfaces define structure for the object
//what properties an obj should have and what type those properties should have
// interface Student{
//     name:string;
//     age:number
// }
// let s1:Student ={
//     name:"test",
//     age:45

// }
// //example 2
// interface Order{
//     orderId:number;
//     customerName:String;
//     product:string;
//     price:number;
//     isDelivered?:boolean

// }
// //create object
// let order1:Order={
//     orderId:344,
//     customerName:"test",
//     product:"laptop",
//     price:3555,
//     isDelivered:true
// }

// //create a function using interface
// function PrintOrder(order:Order){
//     console.log("Order id",order.orderId)
//     //same for all   
// }
// //call the function
// PrintOrder(order1)
// //update
// order1.isDelivered=false
// console.log("after update")
// PrintOrder(order1)
//type aliases
//giving custom name to types
//instead of typing same name again and again we can create short name
// Syntax:- type TypeName = dataType
// let StudentName:Name="Shaina"
// //Name is nothing but just another name for string
// type stu={
//     name:string,
//     age:number
// }
// let s2:stu={
//     name:"ghj",
//     age:34
// }


//Union and intersection types
//union- a variable can hold  multiple types -OR
let value:string | number
value=465
value="hello"
function test(id:string | number){
    console.log("User is",id)

}
test(234234)
test("A0304")
//output:-node typeScript.ts
//intersection-AND
//intersection combines multiple types into one
//that value must satisfy all the types
//-And concept
// type A={name:string}
// type B={age:number}
// //intersection
// type C= A&B//AND Concept
//ex2
// type employee = {name:string}
// type manager = {department:string}
// type ManagerEmp = employee & manager
// type em:ManagerEmp ={
//     name:"test",
//     department:"CSE"
// }
// type user={email:string}
// type pass={pass:string}
// //secure user
// type secureUser = user & pass


//Type inference and narrowing
//Type inference- automatically guesses the type
//Type narrowing- is reduces the type based on condition
// let name1 = "hello"
//  if(typeOf name1 ==="string"){//type inference
//     console.log(name1.length)
// }
// //type narrowing
// function Y(value:string | number){
//     if(typeOf value ==="string"){
//     console.log(value.toUpperCase())
// }
// }
// function Hello(input:string | boolean){
// if (typeOf input ==="string"){
//     console.log("username", input)
// }else{
//     console.log("status",input)
// }
// }


//Generics
//It allow you to write reusable code or type
//write once and use any type
function identity<Type>(data: Type): Type {
    return data;
}
function getData<T>(data:T):T{
    return data
}
getData<string>("hello")
getData<number>(2432343)

