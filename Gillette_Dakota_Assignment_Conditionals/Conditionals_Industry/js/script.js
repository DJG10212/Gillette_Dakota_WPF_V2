/*
Dakota Gillette
WPF Section 01
Assignment: Conditionals Industry
10-16-2014
*/


//Calculate the total hours worked, and how much money was earned

//ask the user what their hourly rate of pay is

var hourlyRate = prompt("What is your hourly rate of pay? (example: 10.19)");
var hourlyRate = parseInt(hourlyRate);

//ask user how many hours they worked each day
var monday = prompt("How many hours did you work on Monday? (example: 9)");
var monday = parseInt(monday);

var tuesday = prompt("How many hours did you work on Tuesday? (example: 9)");
tuesday = parseInt(tuesday);

var wednesday = prompt("How many hours did you work on Wednesday? (example: 9)");
wednesday = parseInt(wednesday);

var thursday = prompt("How many hours did you work on Thursday? (example: 9)");
thursday = parseInt(thursday);

var friday = prompt("How many hours did you work on Friday? (example: 9)");
friday = parseInt(friday);


//calculate total hours worked
var totalHours = monday + tuesday + wednesday + thursday + friday;

if (totalHours > 40) {
	//calculate total amount earned
	var overTime = totalHours * 1.5
	alert("It looks like you worked " +totalHours+ " hours this week, and earned $" +overTime+ "! Good job!");}
	
else {
	//calculate total amount earned
var moneyEarned = totalHours * hourlyRate
	alert("It looks like you worked " +totalHours+ " hours this week, and earned $" +moneyEarned+ "! Good job!");}


