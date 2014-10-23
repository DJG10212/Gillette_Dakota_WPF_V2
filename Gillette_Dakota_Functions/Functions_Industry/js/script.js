/*
Dakota Gillette
WPF Section Functions Industry
10-16-2014
*/


//ask the user what state to live in
var state = prompt("The top 3 average Web Developer salries are in Washington, California, and Maryland. If you were a web developer looking to move to one of these states, which one would you choose? Please enter 1 for Maryland, 2 for California, 3 for Washington");

//validate the prompt. Checks if it is blank
while (isNaN(state) || state === "") {
    state = prompt("Please enter a number!");
	}


if (state == 1) {
	//ask the user their salary
	var yearlySalary = prompt("Congrats on choosing Maryland! What is your yearly salary? Please enter the number only, no commas.");

	//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(yearlySalary) || yearlySalary === "") {
    yearlySalary = prompt("Please enter a number! Do not include the dollar sign or commas. Thanks!");}
	//average salary in Maryland
	var marylandAverageSalary = 51860;
	//average web developer pay in MD
    var webDevPay = 104934
	//defining variables
	var differenceOfPay = CalcPay (yearlySalary, webDevPay);
	//starting function
	function calcPay (yearlySalary, webDevPay){
		morePay = Number(yearlySalary) - Number(webDevPay);
			return morePay
	}
	//calculate how much more you will make than the average MD worker
	var moreThan = Number(webDevPay) - Number(marylandAverageSalary);
alert("If you work as a web developer in Maryland, you will make $" + moreThan + " more than the average yearly salary in Maryland. You will make $" + differenceOfPAy + " more than your current job. What are you waiting for?! Move!!")
	


}else if (state == 2) {
	
	//ask the user their salary
	var yearlySalary = prompt("Congrats on choosing California! What is your yearly salary? Please enter the number only, no commas.");

	//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(yearlySalary) || yearlySalary === "") {
    yearlySalary = prompt("Please enter a number! Do not include the dollar sign or commas. Thanks!");
	}
}
else {
	
	//ask the user their salary
	var yearlySalary = prompt("Congrats on choosing Washington! What is your yearly salary? Please enter the number only, no commas.");

	//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(yearlySalary) || yearlySalary === "") {
    yearlySalary = prompt("Please enter a number! Do not include the dollar sign or commas. Thanks!");
}

	
}