initialize();

function initialize() {
	var aglist = loadAgs();
	makeAgs(aglist);
}

function loadAgs() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var Ags = new Array();
	Ags[0] = {name: "YG", description:"description of YG"};
	Ags[1] = {name: "JYP", description:"description of JYP"};
	return Ags;
}

function makeAgs(al) {

	//SORT, name.alphabet
	var aglist = al.sort(function(a,b) {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;});
	
	// ADD SONGS INTO LATEST SONGS, AT MOST <LATESTLISTSIZE>
	for (var i = 0; i < aglist.length; i++) {
		makeag(aglist[i].name,aglist[i].description);
	}
}

function makeag(name, description) {
	var ag = document.createElement("div");
	ag.innerHTML = name + "<br>" + description;
	document.getElementById("aglist").appendChild(ag);

	var icon = document.createElement("div");
	icon.className = "icon";
	icon.innerHTML = '<img class = "clickable" src="src/image/singer.png" width="64">';
	icon.addEventListener("click", function() {
		if(singerlist.style.display=="none") {
			singerlist.style.display="block";
		} else {
			singerlist.style.display="none";
		}
	});
	ag.appendChild(icon);


	//TODO WITH DB
	
	//BELOW IS EXAMPLE
	var singers = new Array(); // who are in "ag.name"
	singers[0] = {name: "singer1"};
	singers[1] = {name: "singer2"};
	var singerlist = document.createElement("div");
	singerlist.id = "singerlist" + i;
	singerlist.innerHTML = singers[0].name;
	for (var i = 1; i < singers.length; i++) {
		singerlist.innerHTML = singerlist.innerHTML + "<br>" + singers[i].name;
	}
	singerlist.style.display = "none";
	ag.appendChild(singerlist);

	var hr = document.createElement("hr");
	ag.appendChild(hr);
	var br = document.createElement("br");
	ag.appendChild(br);

}