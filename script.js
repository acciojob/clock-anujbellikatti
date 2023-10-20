// function updateTimer() {
//     var now = new Date();
//     var options = {  day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
//     var formattedDate = now.toLocaleDateString(undefined, options);

//     // Display the formatted date and time
//     var timerElement = document.getElementById('timer');
//     timerElement.textContent = formattedDate;
	
// }

// // Update the timer every second
// setInterval(updateTimer, 1000);

// // Initial call to display the timer immediately
// updateTimer();
function updateTimer() {
    var now = new Date();
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',  };
    var formattedDate = now.toLocaleDateString(undefined, options);

    // Display the formatted date and time
    var timerElement = document.getElementById('timer');
    timerElement.textContent =  formattedDate;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display the timer immediately
updateTimer();
