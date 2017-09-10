function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
submit.addEventListener("click", function() {
	var myValue = document.getElementById("myValue").value;
	$('#nameForm').empty();
	for (var i = 0; i < myValue; i++) {
		$("#nameForm").append(`
			<br>
				<input type="text" class="form-control" id="myName${i+1}" placeholder="Enter a name"> 
			</br>
		`)
	};
	$("#nameForm").append(`
		<button type="button" id="start" class='btn btn-info startbtn'>Get Started</button>
		`)
});
