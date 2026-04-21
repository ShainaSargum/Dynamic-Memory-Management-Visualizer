"use strict";
const title = document.getElementById("title");
const button = document.getElementById("btn");
//ts
let message = "Hello Type Script";
title.textContent = message;
//button
button?.addEventListener("click", () => {
    title.textContent = "button is clicked";
});
//how to run typeScript file
//tsc fronted.ts ,it is converted into js file ,then run js file or link js file
