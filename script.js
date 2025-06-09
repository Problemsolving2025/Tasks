function mutasd() {
	var varos = document.getElementById("varoslista").value;
	var url = "http://www.naslovi.net/vremenska-prognoza" + varos;
	document.getElementById("ifr").src = url;


	//mint a B2-nél és a B5-nél, kell window.open, ahol az adott város nevezetességeiről nyílik meg egy ablak ("leirasok")

}
