/*
Dakota Gillette
WPF Section Functions Industry
10-16-2014
*/


//ask the user their water cost
var state = prompt("The top 3 average Web Developer salries are in Washington, California, and Maryland. If you were a web developer looking to move to one of these states, which one would you choose?");

//validate the prompt. Checks if it is blank, and if it is a number
while (state === "") {
    state = prompt("Please enter either: Washington, California, or Maryland");
}


if (state == Maryland