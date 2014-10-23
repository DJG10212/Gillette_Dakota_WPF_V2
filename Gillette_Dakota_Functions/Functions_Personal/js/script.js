/*
Dakota Gillette
WPF Section 01
Assignment: Functions Personal
10-23-2014
*/

//alert users of the purpose of these prompts

alert ("We will be asking you questions in order to calculate your water cost/usage from taking showers.");

//ask the user their water cost
var waterCost = prompt("What is you cost of water per 1000 gallons used? The national average is $2 per 1000 gallons. (please enter a number only. example 2.12 )");

//validate the prompt. Checks if it is blank, and if it is a number
while(isNaN(waterCost) || waterCost==="") {
	
	waterCost = prompt("Please enter a number! Do not include the dollar sign. Thanks!");
}

//ask the user their average shower length
var showerTime = prompt("What is the average amoount of minutes you spend in the shower? ( example: 10 )");

//validate the prompt. Checks if it is blank, and if it is a number
while(isNaN(showerTime) || showerTime==="") {
	
	showerTime = prompt("Please enter a number! Thanks!");
}









