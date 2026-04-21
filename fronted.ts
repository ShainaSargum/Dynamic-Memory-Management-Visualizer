const title=document.getElementById("title") as HTMLHeadElement
const button=document.getElementById("btn") as HTMLButtonElement
//ts
let message:string="Hello Type Script"
title.textContent=message
//button
button?.addEventListener("click",()=>{
    title.textContent="button is clicked"
})
//how to run typeScript file
//tsc fronted.ts ,it is converted into js file ,then run js file or link js file

//create a object
//get elements from DOM or HTML
//create a function to display the student object
//update button to show updated student with new details
