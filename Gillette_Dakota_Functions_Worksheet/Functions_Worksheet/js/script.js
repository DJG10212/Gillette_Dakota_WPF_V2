/*
Dakota Gillette
WPF Section 01
Assignment: Conditionals Personal
10-8-2014
*/


//Calculate if you should go for a jog outside, or go to the gym

//ask the user if it is hot or cold outside

 var hotCold = prompt("Is it cold outside? Yes, or No?");
 //alert that nothing was entered
 if (hotCold == "") { alert("You have not entered anything!"); } 
 
           else if (hotCold == "yes") {
				//ask user if they like the cold
                var likeCold = prompt("Do you like to run in the cold? Yes, or no?");
				 //alert that nothing was entered
				if (likeCold == "") { alert("You have not entered anything!"); } 
                if (likeCold == "yes") {
                    //alert user they should jog outside
                    alert("You should go for a jog outside!");
                }
                    //alert user they should go to the gym
                else {
                    alert("You should go to the gym!");
                }
            }
            else if (hotCold != "yes") {
                //alert user they should jog outside
                alert("You should go for a jog outside!");
            }
	









