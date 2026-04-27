const prompt = require("prompt-sync")();
let vec=[];
for (let i = 0; i < 4; i++) {
 vec[i]=parseFloat(prompt( "Ingrese un numero: " + (i+1),":"));
}
for (let i=0; i<4; i++) {
 console.log ("Pocision",(i+1),"[",vec[i],"]");
}