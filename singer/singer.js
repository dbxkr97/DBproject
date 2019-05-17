initialize();

function initialize() {
	var sgrlist = loadSgrs();
	makeSgrs(sgrlist);
}

function loadSgrs() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var Sgrs = new Array();
	Sgrs[0] = {name: "singer1", description:"description of singer1"};
	Sgrs[1] = {name: "singer2", description:"description of singer2"};
	return Sgrs;
}

function makeSgrs(sl) {

	//SORT, name.alphabet
	var sgrlist = sl.sort(function(a,b) {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;});
	
	// ADD SONGS INTO LATEST SONGS, AT MOST <LATESTLISTSIZE>
	for (var i = 0; i < sgrlist.length; i++) {
		makeSgr(sgrlist[i].name,sgrlist[i].description);
	}
}

function makeSgr(name,description) {
	var sgr = document.createElement("div");
	sgr.innerHTML = name + "<br>" + description;
	document.getElementById("sgrlist").appendChild(sgr);

	var icon = document.createElement("div");
	icon.innerHTML = '<img src="src/image/song.png" width="64">';
	icon.className = "icon";
	icon.addEventListener("click", function() {
		if(songlist.style.display=="none") {
			songlist.style.display="block";
		} else {
			songlist.style.display="none";
		}
	});
	sgr.appendChild(icon);

	//TODO WITH DB

	//BELOW IS EXAMPLE
	var songs = new Array(); // who are in "ag.name"
	songs[0] = {name: "songname1"};
	songs[1] = {name: "songname2"};
	var songlist = document.createElement("div");
	songlist.innerHTML = songs[0].name;
	for (var i = 1; i < songs.length; i++) {
		songlist.innerHTML = songlist.innerHTML + "<br>" + songs[i].name;
	}
	songlist.style.display = "none";
	sgr.appendChild(songlist);

	var hr = document.createElement("hr");
	sgr.appendChild(hr);
	var br = document.createElement("br");
	sgr.appendChild(br);

}