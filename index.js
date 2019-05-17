initialize();

function initialize() {
	adminCheck();
}
function adminCheck() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var currentUSER = {U_id : "user123", Is_Admin : false};
	if(currentUSER.Is_Admin) {
		document.getElementById("adminOrUser").innerHTML = "ADMIN";
	}
}
