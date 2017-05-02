function sprawdz(){
	var dobrze = 0;
	var questions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	var ansewrs = [2, 0, 0, 1, 3, 3, 3, 1, 1, 0, 3, 3, 2, 3, 3];

	for (var i=0; i<questions.length; i++){
		var fn = "pytanie"+questions[i];
		var f = document.getElementsByName(fn);
		if(f[0].odp[ansewrs[i]].checked==true){
			dobrze ++;
		}
	}

	if (dobrze == questions.length){
		window.location.href = "GratulacjeQuiz.html";
	}
	if (dobrze >= 12 && dobrze <= 14){
		window.location.href = "GratulacjeQuiz80.html";
	}
	if (dobrze >= 9 && dobrze <= 11){
		window.location.href = "GratulacjeQuiz60.html";
	}
		if (dobrze >= 4 && dobrze <= 8){
		window.location.href = "GratulacjeQuiz40.html";
	}	
		if (dobrze >= 0 && dobrze <= 3){
		window.location.href = "GratulacjeQuiz00.html";
	}
}