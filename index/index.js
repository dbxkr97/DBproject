var LATESTLISTSIZE = 10;
initialize();

function initialize() {
	var songlist = loadSongs();
	makeLatest(songlist);
}

function loadSongs() {
	//TODO WITH DB

	//BELOW IS EXAMPLE
	var song = new Array();
	song[0] = {name: "A", date:"20180101", singer:"singerA"};
	song[1] = {name: "B", date:"20170101", singer:"singerB"};
	song[2] = {name: "C", date:"20190101", singer:"singerC"};
	return song;
}

function makeLatest(sl) {

	//SORT, songlist[0] = latest song
	var songlist = sl.sort(function(a,b) {return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;});
	
	// ADD SONGS INTO LATEST SONGS, AT MOST <LATESTLISTSIZE>
	for (var i = 0; i < songlist.length && i < LATESTLISTSIZE; i++) {
		var song = document.createElement("div");
		song.innerHTML = songlist[i].name + ", " + songlist[i].singer + ", " + songlist[i].date;
		document.getElementById("latest").appendChild(song);		
		var hr = document.createElement("hr");
		song.appendChild(hr);
	}


	}
