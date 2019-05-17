initialize();

function initialize() {
	var fvlist = loadFvs();
	makeFvs(fvlist);
}

function loadFvs() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var Fvs = new Array();
	Fvs[0] = {name: "songname1"};
	Fvs[1] = {name: "songname2"};
	return Fvs;
}

function makeFvs(fl) {

	//SORT, name.alphabet
	var fvlist = fl.sort(function(a,b) {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;});
	
	// ADD SONGS INTO LATEST SONGS, AT MOST <LATESTLISTSIZE>
	for (var i = 0; i < fvlist.length; i++) {
		makeFv(fvlist[i].name);
	}
}

function makeFv(name) {
	var fv = document.createElement("div");
	fv.innerHTML = name;
	document.getElementById("fvlist").appendChild(fv);

	var icon = document.createElement("div");
	icon.innerHTML = '<img src="src/image/x.png" width="64">';
	icon.className = "icon";
	icon.addEventListener("click",function() {
		deleteFromFavorite(name);
	});
	fv.appendChild(icon);

	var hr = document.createElement("hr");
	fv.appendChild(hr);
	var br = document.createElement("br");
	fv.appendChild(br);

}

function deleteFromFavorite(name) {
	//TODO WITH DB
}