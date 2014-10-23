/*
Dakota Gillette
WPF Section 01
Assignment: Functions Personal
10-23-2014
*/

//alert users of the purpose of these prompts

alert("We will be asking you questions in order to calculate your water cost/usage from taking showers.");

//ask the user their water cost
var waterCost = prompt("What is you cost of water per 1000 gallons used? The national average is $2 per 1000 gallons. ( please enter a number only. example 2.12 )");

//validate the prompt. Checks if it is blank, and if it is a number
while (isNaN(waterCost) || waterCost === "") {
    waterCost = prompt("Please enter a number! Do not include the dollar sign. Thanks!");
}

//alert if they are paying too much for their water, or not
costAlert = (waterCost < 2 ) ? "You are paying less than the national average for water! Congrats!" : "You are paying more than the national average for water!";
//alert user of the outcome!
alert (costAlert);




//ask the user their average shower length
var showerTime = prompt("What is the average amount of minutes you spend in the shower? ( example: 10 )");

//validate the prompt. Checks if it is blank, and if it is a number
while (isNaN(showerTime) || showerTime === "") {
    showerTime = prompt("Please enter a number! Thanks!");
}

//ask the user how many showers they take a week
var showersPerWeek = prompt("On average, how many showers do you take per week? ( example: 10 )");

//validate the prompt. Checks if it is blank, and if it is a number
while (isNaN(showersPerWeek) || showersPerWeek === "") {
    showersPerWeek = prompt("Please enter a number! Thanks!");
}

//defining variable
var total = calcCost (showerTime, waterCost, showersPerWeek);
//starting the function
function calcCost (showerTime, waterCost, showersPerWeek){
	//calculate the water used. average showerhead uses 2.5 gallons of water a minute
    var totalTime = showerTime * showersPerWeek
	//calculate water used
	var waterUsed = totalTime * 2.5	
	//calculate the cost per gallon
    var costPerGallon = waterCost / 1000;
	//calculate the total cost
    var totalCost = waterUsed * costPerGallon;
	//return total cost
    return totalCost;
}

//calculate cost per shower
var costPerShower = total / showersPerWeek

var final = total * showersPerWeek

alert("Your total cost per " + showerTime + " minute shower is $" + costPerShower + "! You spend a total of $" + final + "per week on shower water!");








