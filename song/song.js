var userlikes;
initialize();

function initialize() {
	userlikes = loadLks();
	var sglist = loadSgs();
	makeSgs(sglist);
}

function loadLks() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var Lks = new Array();
	Lks[0] = "songname1";
	return Lks;
}
function loadSgs() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var Sgs = new Array();
	Sgs[0] = {name: "songname1", description:"description of singer1", youtube:"https://www.youtube.com"};
	Sgs[1] = {name: "songname2", description:"description of singer2", youtube:"https://www.youtube.com"};
	return Sgs;
}

function makeSgs(sl) {

	//SORT, name.alphabet
	var sglist = sl.sort(function(a,b) {return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;});
	
	// ADD SONGS INTO LATEST SONGS, AT MOST <LATESTLISTSIZE>
	for (var i = 0; i < sglist.length; i++) {
		makeSg(sglist[i].name,sglist[i].description,sglist[i].youtube);
	}
}

function makeSg(name,description,youtube) {
	var sg = document.createElement("div");
	sg.innerHTML = name + "<br>" + description;
	document.getElementById("sglist").appendChild(sg);

	var like = document.createElement("div");
	like.className = "icon";
	for (var i = 0; i < userlikes.length; i++) {
		if (userlikes[i] == name) {
			like.innerHTML = '<img src="src/image/like.png" width="64">';
			break;
		}
		if (i == userlikes.length-1) {
			like.innerHTML = '<img src="src/image/notlike.png" width="64">';
		}
	}
	like.addEventListener("click", function() {
		if (like.innerHTML == '<img src="src/image/like.png" width="64">') {
			notLike(name);			
		} else {
			Like(name);
		}
	});
	sg.appendChild(like);

	var yt = document.createElement("div");
	yt.innerHTML = '<img src="src/image/youtube.png" width="64">';
	yt.className = "icon";
	yt.addEventListener("click", function() {
		window.open(youtube, '_blank');
	});
	sg.appendChild(yt);
	
	var hr = document.createElement("hr");
	sg.appendChild(hr);
	var br = document.createElement("br");
	sg.appendChild(br);

}

function notLike(name){
	//TODO WITH DB
}

function Like(name){
	//TODO WITH DB
}