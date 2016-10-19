$(document).ready(function() {
	var easel=document.getElementById("paper");
	var art=easel.getContext("2d");
	//function to choose a random integer between x and y, inspired by Python's randint.
	function chance(x, y) {
		return Math.round(Math.random()*(y-x) + x);
	}
	
	var choosePaint=function() {
		var can=chance(1, 9);
		switch (can) {
			case 1:
				art.strokeStyle="red";
				break;
			case 2:
				art.strokeStyle="orange";
				break;
			case 3:
				art.strokeStyle="yellow";
				break;
			case 4:
				art.strokeStyle="green";
				break;
			case 5:
				art.strokeStyle="blue";
				break;
			case 6:
				art.strokeStyle="black";
				break;
			case 7:
				art.strokeStyle="gray";
				break;
			case 8:
				art.strokeStyle="brown";
				break;
			case 9:
				art.strokeStyle="violet";
				break;
			default:
				art.strokeStyle="white";
				break;
		}
	};
	var chooseBrush=function() {
		var bristles=chance(1, 3);
		switch (bristles) {
			case 1:
				art.lineWidth=1;
				break;
			case 2:
				art.lineWidth=5;
				break;
			case 3:
				art.lineWidth=10;
				break;
			default:
				art.lineWidth=1;
				break;
		}
	};
	var drawLine=function() {
		var xPosStart=chance(1, 150);
		var yPosStart=chance(1, 150);
		var xPosEnd=chance(1, 150);
		var yPosEnd=chance(1, 150);
		art.beginPath();
		art.moveTo(xPosStart, yPosStart);
		art.lineTo(xPosEnd, yPosEnd);
		chooseBrush();
		choosePaint();
		art.stroke();
	};
	var drawArc=function() {
		var xAxis=chance(1, 150);
		var yAxis=chance(1, 150);
		var radius=chance(1, 150);
		var angle=Math.random()*Math.PI*2;
		var startingPoint=Math.random()*Math.PI;
		art.beginPath();
		art.arc(xAxis, yAxis, radius, startingPoint, angle);
		chooseBrush();
		choosePaint();
		art.stroke();
	};
	var brushStroke=function() {
		var muse = Math.round(Math.random());
		if (muse===0) {
			drawLine();   
		} else {
			drawArc();   
		}
	};
	var masterpiece=function() {
		art.rect(0, 0, 500, 500);
		art.fillStyle="white";
		art.fill();
		for (i=0; i<chance(1, 100); i++) {
			brushStroke();  
		}
	};
	//so it always loads with a new image.
	masterpiece();

	var imagination = document.getElementById("paper");
	var parnassus = imagination.toDataURL("");
	var firstRandomWord = lexicon[chance(0, lexicon.length)];
	var secondRandomWord = lexicon[chance(0, lexicon.length)];
	$("a").attr("download", firstRandomWord.charAt(0).toUpperCase() + firstRandomWord.slice(1) + "-" + secondRandomWord.charAt(0).toUpperCase() + secondRandomWord.slice(1) + ".png").attr("href", parnassus);
	var canvasHeight = $("canvas").height();
	$("#msg").css("bottom", canvasHeight/2 + "px");
	setTimeout(function() {
		$("#msg").hide();
	}, 5000);
});