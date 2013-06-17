function validate() {
    var pass = document.getElementsByName('password')[0].value;
    var encoded = window.btoa(pass);
    if (encoded == "c28gZWFzeQ==") 
	document.getElementById("answer").innerHTML += 'Congrats.<br>';
    else 
	document.getElementById("answer").innerHTML += 'Gimme correct pass.<br>';
}

