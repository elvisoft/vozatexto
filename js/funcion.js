let rec;
if(!("webkitSpeechRecognition" in window)){
	$( "#dialog" ).dialog("option", "Error", "Ocurrio un Error fatal!");
}else{
	$( "#dialog" ).dialog();
	rec=new webkitSpeechRecognition();
	rec.lang="es-Ar";
	rec.continuous=true;
	rec.interim=true;
	rec.addEventListener("result", ejecutar);
}

function ejecutar(){
	
	$( "#dialog" ).dialog("option", "Error", "Ocurrio un Error fatal!");
	for(let i = event.resultIndex; i < event.results.length; i++){
		document.getElementById("text").innerHTML=event.results[i][0].transcript;
	}
}
rec.start();