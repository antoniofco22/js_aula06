var intervalo, tempo, five, audio;

function contar(){
	contador = document.querySelector('#contador');
	minAtual = parseInt(tempo/60);
	segAtual = (tempo%60);
	if(minAtual <=9){
		minAtual='0'+minAtual;
	}
	if(segAtual <=9){
		segAtual='0'+segAtual;
	}
	contador.innerHTML = minAtual+':'+segAtual;
	tempo-=1;
	if(five == tempo){
		document.querySelector('#falta').style.opacity = '1';
	}
	if(tempo == 0){
		audio.play();
		clearInterval(intervalo);
	}
}

function desarmar(){
	audio.pause();
	clearInterval(intervalo);
	butao.innerHTML = "ALARMAR";
	butao.setAttribute('onclick','alarmar()');
	document.querySelector('#falta').style.opacity = '0';
}

function gerar(){
	min = document.querySelector('#min');
	seg = document.querySelector('#seg');
	alltempo = '';
	for(i=0;i<60;i++){
		alltempo += '<option value="'+i+'">'+i+'</option>';
	}
	min.innerHTML = alltempo;
	seg.innerHTML = alltempo;
}


function alarmar(){
	min = parseInt(document.querySelector('#min').value);
	seg = parseInt(document.querySelector('#seg').value);
	if(min==0 && seg==0 || isNaN(min) && isNaN(seg)){
		return alert('Coloque algum valor!');
	}
	tempo = (min*60)+seg;
	butao = document.querySelector('#alarme');
	butao.innerHTML = "DESARMAR";
	butao.setAttribute('onclick','desarmar()');
	audio = document.querySelector('#tick');
	five = parseInt(tempo*5/100);
	intervalo = setInterval(contar, 1000);
}



function back(){
al = document.querySelector('#all');
array = ['https://img.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-34.jpg?w=2000',
'https://www.10wallpaper.com/wallpaper/1366x768/1610/Canada_Harrison_Lake_Beautiful_Landscape_Wallpaper_13_1366x768.jpg',
'https://images7.alphacoders.com/423/423348.jpg'];
x = parseInt(Math.random()*3)
al.style.background = "url('"+array[x]+"')";
}



window.onload = function(){
back();
gerar();
};