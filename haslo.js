function init(){
		var sprawdzhaslo = document.getElementById("sprawdzhaslo");
		sprawdzhaslo.onclick = checkpassword;
        var paslord = document.getElementById("haslo");
		paslord.onkeypress = handleKeyPress;
	}
	
	function checkpassword(){
		var yourpasswordInput = document.getElementById("haslo");
		var yourpassword = yourpasswordInput.value;
		if (yourpassword === "Ancelotti")
			{
			window.location.href = "BayernMonachium.html";
			}
			else {
            haslo.value = "";
			alert ("Wpisałeś niepoprawne hasło!");
			}
	}
    	
        function handleKeyPress(e) {
		var sprawdzhaslo = document.getElementById("sprawdzhaslo");
		if (e.keyCode === 13) {
			sprawdzhaslo.click();
			return false;
		}
	}
	
	window.onload = init;
	