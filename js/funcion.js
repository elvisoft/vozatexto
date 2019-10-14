let rec;
if(!("webkitSpeechRecognition" in window)){
	alert("Ocurrio un Error fatal!");
}else{	
	rec=new webkitSpeechRecognition();
	rec.lang="es-Ar";
	rec.continuous=true;
	rec.interim=true;
	rec.addEventListener("result", ejecutar);
}

function ejecutar(){		
	for(let i = event.resultIndex; i < event.results.length; i++){
		document.getElementById("text").innerHTML=event.results[i][0].transcript;
	}
}
rec.start();
