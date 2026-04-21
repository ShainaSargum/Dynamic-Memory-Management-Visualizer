//Type-safe data models,
//define the structure very clear so that ts can debug it easily
let name3:string="test"
let age:number=45
let isActive:boolean=true
//object
let user:{name:string, age:number,rollNo:number}={
    name:"test",
    age:34,
    rollNo:45
}
//type model example
type Address={
    cityName:string
    pinCode:number//nested type model
}
type Student={
    id:number
    name:string
    course:string
    age:number
    isActive:true
    address:Address//type
}
//create data for it
let student1:Student={
    id:34,
    name:"Shaina",
    course:"IT",
    age:34,
    isActive:true,
    address:{
        cityName:"una",
        pinCode:123456
    }
}

function PrintStudent(Student.student1){
    console.log("id is",student1.id)
    console.log("id is",student1.name)
    console.log("id is",student1.course)
    console.log("id is",student1.age)
//do it for all the details to print it
}



