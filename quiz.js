function sprawdz(){
	var dobrze = 0;
	var questions = [1, 2, 3, 4];
	var ansewrs = [2, 0, 0, 1];

	for (var i=0; i<questions.length; i++){
		var fn = "pytanie"+questions[i];
		var f = document.getElementsByName(fn);
		if(f[0].odp[ansewrs[i]].checked==true){
			dobrze ++;
		}
	}

	if (dobrze == questions.length){
		window.location.href = "BayernMonachium.html";
	}
	else {
		window.location.href = "GratulacjeNumery.html";
	}
}