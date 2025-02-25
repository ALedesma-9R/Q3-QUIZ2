//submit
	function p_info() {
		var name = document.getElementById('u$Name').value;
		var email = document.getElementById('u$Email').value;

		 	if (name === '' || email === '') {
		        alert('Please fill the information fields!');
		        return; // checks if fields are actually filled
	   		}

			 	alert('Welcome, ' + name +'! Thank you! Please proceed to the other section.');
			 	document.getElementById('reminder').innerHTML = '<small>*make sure to check your email</small>';
	}

//ticket price
	function t_price() {
		let seatType = document.getElementById('p$Seat').value;
  		let passengerType = document.getElementById('p$Type').value;
  		let price = 0;

	 		if (seatType === 'lowb') {
	        	price = 3000; //based on the sample
	    	}
	    	else if (seatType === 'upb') {
	        	price = 4000;
	    	}

		    if (passengerType === 'stud') {
		        price *= 0.8; // the students will have a 20% discount
		    }
		    else if (passengerType === 'senior' || passengerType === 'pwd') {
		        price *= 0.7; // the seniors &/or PWD get a 30% discount
		    }

		alert('Ticket price: PHP ' + price.toFixed(2) + ' Thank you! Please proceed to the other section.');
	}

let tickets = 0;
const limit = 10;

//ticket print
	function t_print() {
		tickets++;

	 	alert('You have bought ' + tickets +'x ticket/s.');

			if (tickets >= limit) {
			alert('Thank you for choosing our station!');
			alert('Have a good day.');
			}
	}

//more ticket prints
	function t_printMORE() {
		tickets+=3;
	 	alert('You have bought ' + tickets +'x ticket/s.');

			if (tickets >= limit) {
			alert('Thank you for choosing our station.');
			alert('Have a good day!');
			}
	}