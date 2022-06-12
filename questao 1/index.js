var x;
var n;

function explode(){
	bomba.setAttribute('onclick', '-');
	fundo = document.querySelector('#all');
	fundo.style.background = 'black';
	document.querySelector('.card').style.background = 'black';
	clearInterval(n);
	texto.innerHTML = '<audio autoplay controls><source src="img/exp.mp3" type="audio/mpeg"></audio>';
	audio = document.querySelector('audio');
	audio.play();
	bomba.style= 'background:url("img/peri.webp") no-repeat;background-size:var(--piu);';
}

function armar(){
	bomba.innerHTML = '<div id="texto"></div>';
	texto = document.querySelector('#texto');
	texto.innerHTML = 'ARMANDO A BOMBA!';
	setTimeout(function(){
		texto.innerHTML = 'ARMADA!';
		bomba.style = 'background:url("img/b_l.jpg");background-size:var(--piu);';
		bomba.setAttribute('onclick', 'desarmar()');
	},500);
	cont = 9;
	x = window.setTimeout(explode,10000);
	n = setInterval(function(){
		texto.innerHTML = cont;
		cont -=1;
	},1000);
	
}

function desarmar(){
	 console.log(window.clearTimeout(x));
	 clearInterval(n);
	 texto.innerHTML = 'DESARMADA!';
	 bomba.style = 'background:url("img/b_a.jpg");background-size:var(--piu);';
	 bomba.style.backgroundSize = 'var(--piu)';
}

function op(){
	//armar bomba
	tudo = document.querySelector('.elem');
	tudo.innerHTML = '<div id="bomba"></div>';
	bomba = document.querySelector('#bomba');
	bomba.style = 'background:url("img/b_a.jpg");background-size:var(--piu);';
	armar();
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
};