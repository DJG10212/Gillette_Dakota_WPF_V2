/*
Dakota Gillette
WPF Section 01
Assignment: Functions Wacky
10-23-2014
*/


alert("If you are a mailman, this will help calculate the total time it will take you to finish your route. If you are not a mailman, this is completely pointless.");

//ask user total stops for today
var totalStops = prompt("How many houses do you have to deliver to today?");
//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(totalStops) || totalStops === "") {
    totalStops = prompt("Please enter a number! example: 42");}

//defining the variable	
var totalTime = time (totalStops);
//starting function
function time (totalStops){
	//assuming the average stop time per mailbox is 1 minute
	var stopTime = 1;
	//assuming the average commute time between mailboxes is 30 seconds
	var commTime = .5;
	//add the commute time and stop time together
	var commAndStop = commTime + stopTime;
	//multiply stops by commute and stop time
	return timeVariable = commAndStop * totalStops;
	}
alert("The total time it will take you to deliver the mail today is approx. " + totalTime + " minutes!")




