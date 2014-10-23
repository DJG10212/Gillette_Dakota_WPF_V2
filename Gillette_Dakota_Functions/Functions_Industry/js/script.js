/*
Dakota Gillette
WPF Section Functions Industry
10-16-2014
*/


//ask the user what state to live in
var state = prompt("The top 3 average Web Developer salries are in Washington, California, and Maryland. If you were a web developer looking to move to one of these states, which one would you choose?");

//validate the prompt. Checks if it is blank
while (state === "");  {
    state = prompt("Please enter either: Washington, California, or Maryland");
}


if (state == "Maryland") {
	
	//ask the user their salary
	var yearlySalary = prompt("Congrats on choosing Maryland! What is your yearly salary? Please enter 		the number only, no commas.");

	//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(yearlySalary) || yearlySalary === "") {
    yearlySalary = prompt("Please enter a number! Do not include the dollar sign or commas. Thanks!");
	}
	//average salary in Maryland
	var marylandAverageSalary = 51860;
	//average web developer pay in MD
	var webDevPay = 104934
	
	//defining variables
	var total = CalcPay (yearlySalary, marylandAverageSalary, webDevPay);
	//starting function
	function calcPay (yearlySalary, marylandAverageSalary, webDevPay){
		

	
		
	}
	
	

}else if (state == "California") {
	
	//ask the user their salary
	var yearlySalary = prompt("Congrats on choosing California! What is your yearly salary? Please enter 		the number only, no commas.");

	//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(yearlySalary) || yearlySalary === "") {
    yearlySalary = prompt("Please enter a number! Do not include the dollar sign or commas. Thanks!");
	}
}
else {
	
	//ask the user their salary
	var yearlySalary = prompt("Congrats on choosing Washington! What is your yearly salary? Please enter 		the number only, no commas.");

	//validate the prompt. Checks if it is blank, and if it is a number
	while (isNaN(yearlySalary) || yearlySalary === "") {
    yearlySalary = prompt("Please enter a number! Do not include the dollar sign or commas. Thanks!");
}

	
}