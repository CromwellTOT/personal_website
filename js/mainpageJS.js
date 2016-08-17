$(document).ready(function(){
	//get a random rand number
	if( $("#canvas").css('display')==="none" ){
		$("#canvas").css('display', "block");
		$("#canvas").removeClass("canvas");
		$("#canvas").addClass("welcomepic");
		return;
	}
	RNG();
	//draw the canvas
	drawPixels();
	drawSelfie(portBoo);
	//circle in the mid animation
	var portBoo=false;
	$('#myown').click(function(){
		if(!portBoo){
			portBoo=true;
			drawSelfie(portBoo);
			$("#tele").fadeIn(500);
			$("#name").fadeIn(500);
			$("#Email").fadeIn(500);
			$("#prefername").fadeIn(500);
			$("#close").fadeIn(500);
		}
	});
	$('#close').click(function(){
		setTimeout(function(){portBoo=false;}, 40);
		drawSelfie(false);
		$("#tele").fadeOut(500);
		$("#name").fadeOut(500);
		$("#Email").fadeOut(500);
		$("#prefername").fadeOut(500);
		$("#close").fadeOut(500);
	});
	$('#port').hover(function() {
		if(portBoo){
			$(this).fadeTo(500,1);
			$("#port [href]").removeClass("defaultCursor");
		}}
		,function() {
			$(this).fadeTo(50,0);
			$("#port [href]").addClass("defaultCursor");
	});
	//respond to resize
	function resizedw(){
		// Haven't resized in 100ms!
		//redraw numbers of pixels
		drawPixels();
		//draw the selfie
		drawSelfie(portBoo);
	}
	var doit;
	window.onresize = function(){
		clearTimeout(doit);
		doit = setTimeout(resizedw, 100);
	};
});

function drawPixels(){
	var canvasWidth=$("#canvas").width();
	var canvasHeight=$("#canvas").height();
	//console.log(canvasHeight+" "+canvasWidth);
	canvasHeight = (parseInt(canvasHeight/60))*60;
	canvasWidth = (parseInt(canvasWidth/60))*60;
	//console.log(canvasHeight+" "+canvasWidth);
	var template="<div class='pixel' onmouseenter='foo(this, rand, colors)'></div>";
	$('#canvas').html("<div id='holder'></div>");
	$('#holder').width(canvasWidth);
	$('#holder').height(canvasHeight);
	var number = (canvasHeight/60)*(canvasWidth/60);
	//console.log(number);
	for(var i = 0; i < number;i++){
		$('#holder').html($('#holder').html()+template);
	}	
}

function drawSelfie(portBoo){
	//console.log(portBoo);
	var viewWidth=$(window).width();
	var viewHeight=$(window).height();
	//console.log("view: "+viewWidth+" "+viewHeight);
	var selfieSquareWidth, selfieSquareHeight, selfieSquareLeft, selfieSquareTop;
	if(viewWidth*7<viewHeight*9){	
		selfieSquareWidth = parseInt(viewWidth*0.5);
		selfieSquareHeight = parseInt(selfieSquareWidth*1.4);
		selfieSquareLeft = parseInt(viewWidth*0.25)  ;
		selfieSquareTop = parseInt((viewHeight-selfieSquareHeight)/2);
	}
	else{
		//console.log("0.9 height");
		selfieSquareHeight = parseInt(viewHeight*0.9);
		selfieSquareWidth = parseInt(selfieSquareHeight/1.4);
		selfieSquareTop = parseInt(viewHeight*0.05);
		selfieSquareLeft = parseInt((viewWidth-viewHeight*9/14)/2);
	}
	var selfieCircleWidth = parseInt(viewWidth*0.24);
	var selfieCircleHeight = parseInt(selfieCircleWidth*1.2);
	var selfieCircleLeft = parseInt(viewWidth*0.38);
	var selfieCircleTop = parseInt((viewHeight*1.1-selfieCircleHeight)/2);
	//console.log("circle size: "+selfieCircleWidth+" "+selfieCircleHeight);
	//console.log("position: "+selfieCircleTop+" "+selfieCircleLeft);
	if(portBoo){
		//console.log("expand "+portBoo);
		$('#myown').animate({ 
			'top':selfieSquareTop,
			'left':selfieSquareLeft,
			'height': selfieSquareHeight,
			'width': selfieSquareWidth,
			'border-radius': '0' }, 500);
	}
	else{
		//console.log("shrink "+portBoo);
		$("#myown").animate({ 
			'top':selfieCircleTop,
			'left':selfieCircleLeft,
			'height': selfieCircleHeight,
			'width': selfieCircleWidth,
			'border-radius': '100%' }, 500);
	}
}

function RNG() {
	if(rand < colors.length-1){
		rand++;
	}
	else{
		rand=0;
	}
	//console.log(rand);
	setTimeout(RNG, 3000);
}
		
/*keydown to flash
$('#holder')
	.mouseup(function() {
		listener=false;
	})
	.mousedown(function() {
		listener=true;
	})
	.mouseleave(function(){
		listener=false;
	});
*/

//global variables

var listener=true;
//red: #cc0066
//orange: #F38630
//yellow: #ffff00
//green: #66ff33
//blue: #0080ff
//indigo: #4B0082
//purple: #bf00ff
//dont judge the color... I'm a male(colour blindness).
var colors = ["#CC0066","#F38630","#ffff00","#66ff33","#0080ff","#4B0082","#bf00ff"]; 	
var rand=0;
//pixels fading effect
function foo(obj, rand, colors){
	if(obj.fade==="goingon"||listener===false){
		return ;
	}
	obj.fade="goingon";

	giveColor(obj, colors, rand);	
	fadeBackgroundColor(obj);
}

function fadeBackgroundColor(obj){
	var color = $(obj).css('background-color');
	//color=rgb(c1,c2,c3); typeof string
	color=color.substring(4,color.length-1);
	color=color.split(",");
	for(var i = 0;i<3;i++){
		color[i]=Number(color[i]);
	}
	//console.log(color);
	var fade=function (){
		for(var i = 0;i<3;i++){
			if(color[i]<255){
				color[i]+=10;
			}
		}
		color[3]="rgb("+color[0]+","+color[1]+","+color[2]+")";
		//console.log(color[3]);
		giveColor(obj, color[3]);
		if(color[0]<255||color[1]<255||color[2]<255){
			setTimeout(fade, 50);
		}
		else{
			obj.fade="done";
		}
	}
	fade();
}

function giveColor(obj, color, rand){     
	if(rand!==undefined){
		$(obj).css("background-color", color[rand]);
	}        
	else{
		$(obj).css("background-color", color);
	}
}
//var rand = Math.floor(Math.random() * colors.length);