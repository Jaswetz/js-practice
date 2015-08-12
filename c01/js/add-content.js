// This script displays a greeting to the user
// based upon the current time.

var today = new Date(); // Create a new date object
var hourNow = today.getHours(); // Find the current hour
var greeting;

// Display the appropriate greeting based on the current time
if (hourNow > 18) {
    greeting = 'Good eventing!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');
