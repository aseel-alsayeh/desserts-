'use strict'
let Q1 = prompt("do you love desserts ?");

if (Q1 === 'yes') { 
alert ( "also I love desserts");
alert( "Dessert consist of variations of tasted, textures, and appearances" );}
else { alert ( " Great , it is more healther for your body and tooth !");}

console.log("love desserts: " + Q1)
document.write(" ||| Ans Q3 " +  Q1)

let Q2 = prompt (" enter number of chocolate you eat in a day  ");
alert ( "each chocolate have 546 calories");
let cal = parseInt(Q2) * 546 ;
document.write( " ||| Ans Q2 :you gain  " + cal + "cal" );

let Q3 = prompt("how much miles you walk per day? ");
alert ( "every mile you walk , it will lose you 100 calories");
let calb = parseInt(Q3) * 100
document.write( " ||| Ans Q3 :you lose  " + calb + "  cal everyday");

let Q4 = prompt("do you walk at morning or evening ? ");
alert ("walking at morning is much better");
document.write( " ||| Ans Q4:"+ Q4);





