$(document).ready(function(){
	initialize();
	initializeZero();
	initializeThree();
	setTimeout(function(){
		$('.eyes').animate({opacity: '0'}, 70);
		setTimeout(function(){
				$('.eyes').animate({opacity: '1'}, 70);
				setTimeout(function(){
 				$('.loadscreen > svg').animate({marginTop: '120px'}, 700, 'easeOutCirc', function () {});
 				setTimeout(function(){
 					$('.texts').addClass("fadeInUp");
	 				setTimeout(function(){
	 					$('.firstBtn').addClass("loadAnswerArrive");
	 					setTimeout(function(){
	 						$('.p3').animate({opacity: 1}, 300);
	 						$('#help_arrow').animate({opacity: 1}, 300);
	 						setTimeout(function(){
								$('#help_arrow').addClass('arrowAnim');
	 						},300);
	 					}, 4000);
					}, 1000);
				}, 1300);
			}, 500);
		}, 500);
	},3000);	
	/*Event prevent default*/
	$( "body" ).keydown(function(e) {
		var code = e.keyCode;
		if(code == 9){
			event.preventDefault();
		}
	});
});


var x;
var Armes=false;
var Trone = false;
var otherCategory = false;
var nbrDeLieux = "0";
var play = true;
var scroll = 'act0';
var end;
var map = false;
var wavesurfer;
var positionTop;
var precedentElementOffset;
var precedentElementHeight;
var positionContainer;

function bigPictureArmes(){
	Armes = true;
	x = $(".messageTomA").offset();
 	x = x.top;
	$('.imageArmes').css({'display' : 'block'});
	$('.imageArmes').removeClass('closePic');
	$('.imageArmes').css({'display' : 'block', 'top': x});
	$('.imageArmes').addClass('openPic');
	setTimeout(function(){
		$('.imageArmes').addClass('openPicBis');
		$('.containerPictures').css({'display' : 'block'});
		$('.imageArmes').animate({top: 211}, 400);
		$('.containerPictures').animate({opacity: 1}, 400);		
	},250);
}
function bigPictureTrone(){
	Trone = true;
	x = $(".messageTomG").offset();
 	x = x.top;
	$('.imageTrone').css({'display' : 'block'});
	$('.imageTrone').removeClass('closePic');
	$('.imageTrone').css({'display' : 'block', 'top': x});
	$('.imageTrone').addClass('openPic');
	setTimeout(function(){
		$('.imageTrone').addClass('openPicBis');
		$('.containerPictures').css({'display' : 'block'});
		$('.imageTrone').animate({top: 219}, 400);
		$('.containerPictures').animate({opacity: 1}, 400);		
	},250);
}
function bigPictureClose(){
	if(Armes == true){
		$('.imageArmes').animate({top: x}, 300);
		setTimeout(function(){
			$('.imageArmes').removeClass('openPic');
			$('.imageArmes').removeClass('openPicBis');
			$('.imageArmes').addClass('closePic');
			$('.containerPictures').animate({opacity: 0}, 500);
			setTimeout(function(){
				$('.containerPictures').css({'display' : 'none'});
				$('.imageArmes').css({'display' : 'none'});
			},500);
		}, 200);
		Armes = false;
	}else if(Trone == true){
		$('.imageTrone').animate({top: x}, 300);
		setTimeout(function(){
			$('.imageTrone').removeClass('openPic');
			$('.imageTrone').removeClass('openPicBis');
			$('.imageTrone').addClass('closePic');
			$('.containerPictures').animate({opacity: 0}, 500);
			setTimeout(function(){
				$('.containerPictures').css({'display' : 'none'});
				$('.imageTrone').css({'display' : 'none'});
			},500);
		}, 200);
		Trone = false;
	}
	
}
function loadingEnd(){
	$('.loadscreen').animate({opacity:0}, 400);
	$('.firstBtn').removeClass('loadAnswerArrive');
	$('.firstBtn').css({'position': 'relative','margin-left': '35px','top': '427px','left': '0%','opacity':'1'});
	setTimeout(function(){
			$('.firstBtn').addClass('loadAnswerValid');
			$('.firstBtn > p').addClass('loadAnswerValidP');
			setTimeout(function(){
				$('.loadscreen').css({'display' : 'none'});
				$('.firstBtn').css({"z-index" : "900"});
				$('.firstBtn')[0].onclick = function(){};
				beginFunctions();
			},900);
	}, 1000);
}
$('.switcher1').click(function(){
	if($('.switcher1').hasClass('active')){
		$('.switcher1').removeClass('active');
		$('.switcher1').addClass('notactive');
		$('.container-notification>ul>li:nth-child(1)').css({'color' : '#919191'});
	}else{
		$('.switcher1').removeClass('notactive');
		$('.switcher1').addClass('active');
		$('.container-notification>ul>li:nth-child(1)').css({'color' : '#3D3D3D'});
	}
});
$('.switcher2').click(function(){
	if($('.switcher2').hasClass('active')){
		$('.switcher2').removeClass('active');
		$('.switcher2').addClass('notactive');
		$('.container-notification>ul>li:nth-child(2)').css({'color' : '#919191'});
	}else{
		$('.switcher2').removeClass('notactive');
		$('.switcher2').addClass('active');
		$('.container-notification>ul>li:nth-child(2)').css({'color' : '#3D3D3D'});
	}
});
$('.switcher3').click(function(){
	if($('.switcher3').hasClass('active')){
		$('.switcher3').removeClass('active');
		$('.switcher3').addClass('notactive');
		$('.container-notification>ul>li:nth-child(3)').css({'color' : '#919191'});
	}else{
		$('.switcher3').removeClass('notactive');
		$('.switcher3').addClass('active');
		$('.container-notification>ul>li:nth-child(3)').css({'color' : '#3D3D3D'});
	}
});
$('.switcher4').click(function(){
	if($('.switcher4').hasClass('active')){
		$('.switcher4').removeClass('active');
		$('.switcher4').addClass('notactive');
		$('.container-notification>ul>li:nth-child(4)').css({'color' : '#919191'});
	}else{
		$('.switcher4').removeClass('notactive');
		$('.switcher4').addClass('active');
		$('.container-notification>ul>li:nth-child(4)').css({'color' : '#3D3D3D'});
	}
});
function player(){
	wavesurfer = WaveSurfer.create({
	  container: '#waveform',
	  waveColor: '#5f6161',
	  progressColor: '#6b6bdd'
	});
	wavesurfer.load('http://www.movanoncem.be/libia.mp3');
}
function changeBack(){
	if(play == true){
		$('#PlayPause').attr('src','_images/pause.png');
		play = false;
	}else{
		$('#PlayPause').attr('src','_images/play.png');
		play = true;
	}
}
google.maps.event.addDomListener(window, 'load', initialize); 
var newStyle = [
  {
    "featureType": "road.highway",
    "stylers": [
      { "color": "#fecc9f" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "color": "#f6ead8" }
    ]
  },{
    "featureType": "poi.attraction",
    "elementType": "geometry.fill",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi.business",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#aad4f3" }
    ]
  },{
    "featureType": "poi.park",
    "stylers": [
      { "color": "#BFD7BC" }
    ]
  },{
    "featureType": "road.local",
    "elementType": "geometry.stroke",
    "stylers": [
      { "color": "#fac48e" }
    ]
  },{
  }
]
function initializeZero(){
 	var mapOptions = {
 		zoom: 15,
 		center: new google.maps.LatLng(50.463999, 4.871476),
 		mapTypeId: google.maps.MapTypeId.ROADMAP,
 		disableDefaultUI: true,
 		draggable: false,
 		scrollwheel: false
 	}
 	var map = new google.maps.Map(document.getElementById("map_canvasZero"), mapOptions);
	map.setOptions({styles: newStyle});
}
function initialize(){
 	var mapOptions = {
 		zoom: 15,
 		center: new google.maps.LatLng(50.464821, 4.870639),
 		mapTypeId: google.maps.MapTypeId.ROADMAP,
 		disableDefaultUI: true
 	}
 	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	map.setOptions({styles: newStyle});
}
function initializeThree(){
 	var mapOptions = {
 		zoom: 17,
 		center: new google.maps.LatLng(50.463629, 4.867769),
 		mapTypeId: google.maps.MapTypeId.ROADMAP,
 		disableDefaultUI: true
 	}
 	var map = new google.maps.Map(document.getElementById("map_canvasTwo"), mapOptions);
	map.setOptions({styles: newStyle});
}
function designPath(){
	var path = document.querySelector('.path');
	var length = path.getTotalLength();
	path.style.transition = path.style.WebkitTransition = 'none';
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	path.getBoundingClientRect();
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
	path.style.strokeDashoffset = '0';
}
function designPathBis(){
	var path = document.querySelector('.pathBis');
	var length = path.getTotalLength();
	path.style.transition = path.style.WebkitTransition = 'none';
	path.style.strokeDasharray = length + ' ' + length;
	path.style.strokeDashoffset = length;
	path.getBoundingClientRect();
	path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
	path.style.strokeDashoffset = '0';
}
function pin0Bis(elmnt){
	if(elmnt == 'here'){
		if ( $('.pin0Bis').hasClass('pin0BisAnim') ) {
			$('.pin0Bis').removeClass('pin0BisAnim');
			$('.pin0Bis').removeClass('pin0BisRemove');
			$('.pin0A').css({'background-color': '#6B6BDD'});
			$('.pin0B').css({'background-color': '#6B6BDD'});
			$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
			$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
			setTimeout(function(){
				$('.pin0Bis').css({'display':'none'});
			},200);
	    }else{
	    	$('.pin0ABis').removeClass('pin0BisAnim');
			$('.pin0ABis').removeClass('pin0BisRemove');
			$('.pin0B').css({'background-color': '#6B6BDD'});
			$('.pin0').css({'background-color': '#6B6BDD'});
	  		$('.pin0')[0].onclick = function(){pin0Bis('here')};
			$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
			setTimeout(function(){
				$('.pin0ABis').css({'display':'none'});
			},200);
			$('.pin0BBis').removeClass('pin0BisAnim');
			$('.pin0BBis').removeClass('pin0BisRemove');
			$('.pin0A').css({'background-color': '#6B6BDD'});
	    	$('.pin0').css({'background-color': '#6B6BDD'});
	    	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
			$('.pin0')[0].onclick = function(){pin0Bis('here')};
			setTimeout(function(){
				$('.pin0BBis').css({'display':'none'});
			},200);
	    	$('.pin0B').css({'background-color': '#BABABA'});
	    	$('.pin0A').css({'background-color': '#BABABA'});
	    	$('.pin0Bis').css({'display':'block'});
			$('.pin0Bis').addClass('pin0BisAnim');
	    }
	}else if(elmnt == 'Armes'){
		if ( $('.pin0ABis').hasClass('pin0BisAnim') ) {
			$('.pin0ABis').removeClass('pin0BisAnim');
			$('.pin0ABis').removeClass('pin0BisRemove');
			$('.pin0B').css({'background-color': '#6B6BDD'});
			$('.pin0').css({'background-color': '#6B6BDD'});
	  		$('.pin0')[0].onclick = function(){pin0Bis('here')};
			$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
			setTimeout(function(){
				$('.pin0ABis').css({'display':'none'});
			},200);
	    }else{
			$('.pin0BBis').removeClass('pin0BisAnim');
			$('.pin0BBis').removeClass('pin0BisRemove');
			$('.pin0A').css({'background-color': '#6B6BDD'});
	    	$('.pin0').css({'background-color': '#6B6BDD'});
	    	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
			$('.pin0')[0].onclick = function(){pin0Bis('here')};
			setTimeout(function(){
				$('.pin0BBis').css({'display':'none'});
			},200);
			$('.pin0Bis').removeClass('pin0BisAnim');
			$('.pin0Bis').removeClass('pin0BisRemove');
			$('.pin0A').css({'background-color': '#6B6BDD'});
			$('.pin0B').css({'background-color': '#6B6BDD'});
			$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
			$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
			setTimeout(function(){
				$('.pin0Bis').css({'display':'none'});
			},200);
	    	$('.pin0B').css({'background-color': '#BABABA'});
	    	$('.pin0').css({'background-color': '#BABABA'});
	    	$('.pin0ABis').css({'display':'block'});
			$('.pin0ABis').addClass('pin0BisAnim');
	    }
	}else if(elmnt == 'Theatre'){
		if ( $('.pin0BBis').hasClass('pin0BisAnim') ) {
			$('.pin0BBis').removeClass('pin0BisAnim');
			$('.pin0BBis').removeClass('pin0BisRemove');
			$('.pin0A').css({'background-color': '#6B6BDD'});
	    	$('.pin0').css({'background-color': '#6B6BDD'});
	    	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
			$('.pin0')[0].onclick = function(){pin0Bis('here')};

			setTimeout(function(){
				$('.pin0BBis').css({'display':'none'});
			},200);
	    }else{
	    	$('.pin0Bis').removeClass('pin0BisAnim');
			$('.pin0Bis').removeClass('pin0BisRemove');
			$('.pin0A').css({'background-color': '#6B6BDD'});
			$('.pin0B').css({'background-color': '#6B6BDD'});
			$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
			$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
			setTimeout(function(){
				$('.pin0Bis').css({'display':'none'});
			},200);
			$('.pin0ABis').removeClass('pin0BisAnim');
			$('.pin0ABis').removeClass('pin0BisRemove');
			$('.pin0B').css({'background-color': '#6B6BDD'});
			$('.pin0').css({'background-color': '#6B6BDD'});
	  		$('.pin0')[0].onclick = function(){pin0Bis('here')};
			$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
			setTimeout(function(){
				$('.pin0ABis').css({'display':'none'});
			},200);
	    	$('.pin0A').css({'background-color': '#BABABA'});
	    	$('.pin0').css({'background-color': '#BABABA'});
	    	$('.pin0BBis').css({'display':'block'});
			$('.pin0BBis').addClass('pin0BisAnim');
	    }
	}
}
$( "#map_canvasZero").click(function() {
	$('.pin0ABis').removeClass('pin0BisAnim');
	$('.pin0ABis').removeClass('pin0BisRemove');
	$('.pin0B').css({'background-color': '#6B6BDD'});
	$('.pin0').css({'background-color': '#6B6BDD'});
		$('.pin0')[0].onclick = function(){pin0Bis('here')};
	$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
	setTimeout(function(){
		$('.pin0ABis').css({'display':'none'});
	},200);
	$('.pin0Bis').removeClass('pin0BisAnim');
	$('.pin0Bis').removeClass('pin0BisRemove');
	$('.pin0A').css({'background-color': '#6B6BDD'});
	$('.pin0B').css({'background-color': '#6B6BDD'});
	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
	$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
	setTimeout(function(){
		$('.pin0Bis').css({'display':'none'});
	},200);
	$('.pin0BBis').removeClass('pin0BisAnim');
	$('.pin0BBis').removeClass('pin0BisRemove');
	$('.pin0A').css({'background-color': '#6B6BDD'});
	$('.pin0').css({'background-color': '#6B6BDD'});
	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
	$('.pin0')[0].onclick = function(){pin0Bis('here')};
	setTimeout(function(){
		$('.pin0BBis').css({'display':'none'});
	},200);
});
function elementsPlaceBeforeScroll(container){
	positionTop = ($(container).offset().top) - 10;
}
function elementsPlaceAfterScroll(container, message){
	precedentElementOffset = $(message).offset().top;
	precedentElementHeight = ($(message).height())+ 23;
	positionContainer = ($(container).offset().top);

	padding = positionContainer - (precedentElementOffset + precedentElementHeight) + 2;
}
function menu(){
	$('.containerMenu').addClass('menuApparition');
	$('.containerMenu').removeClass('menuDisparition');
	$('.header > h1').animate({opacity: 0}, 400);
	$('.header > h1').css({'display' : 'none'});
	$('.header > h2').html('Personnalisation');
	$('.header > h2').css({'display' : 'block', 'opacity' : '0', 'margin-left' : '35px'});
	$('.header > h2').animate({opacity: 1}, 400);
	$('.menu').animate({opacity: 0}, 400);
	$(".carte").attr('src',"_images/ok-return.png"); 
	$(".carte").css({'opacity' : '0'});
	$('.carte').animate({opacity: 1}, 400);
	$(".carte").attr('onclick',"menuDisparition();"); 
}
function menuDisparition(){
	$('.header > h2').animate({opacity: 0}, 400);
	$('.header > h2').css({'display' : 'none'});
	$('.header > h1').css({'display' : 'block', 'opacity' : '0'});
	$('.header > h1').animate({opacity: 1}, 400);
	$('.carte').css({'display' : 'block'});
	$('.carte').animate({opacity: 1}, 400);
	$(".carte").attr('src',"_images/carte.png"); 
	$('.menu').css({'opacity' : '0'});
	$('.menu').animate({opacity: 1}, 400);
	$(".carte").attr('onclick',"card();");
	$('.containerMenu').removeClass('menuApparition');
	$('.containerMenu').addClass('menuDisparition');
};
function card(){
	if(map == false){
		$('.map0').addClass('mapApparition');
		$('.map0').removeClass('mapDisparition');
		$('.header > h1').animate({opacity: 0}, 400);
		$('.header > h1').css({'display' : 'none'});
		$('.header > h2').html('Carte');
		$('.header > h2').css({'display' : 'block', 'opacity' : '0', 'margin-left' : '90px'});
		$('.header > h2').animate({opacity: 1}, 400);
		$('.carte').animate({opacity: 0}, 400);
		$('.carte').css({'display' : 'none'});
		$(".menu").attr('src',"_images/arrow-return.png"); 
		$(".menu").css({'opacity' : '0'});
		$('.menu').animate({opacity: 1}, 400);
		$(".menu").attr('onclick',"cardDisparition();"); 
		setTimeout(function(){
			$('.pin0').addClass('pinAnim');
		}, 1500);

		initializeZero();
		if(nbrDeLieux == "3"){
			$('.guide01').html("La visite est finie &#128532; &nbsp; <br> On recommence ?");
			$('.guide01').css({"width" : "200px", "left" : "80px"});
			setTimeout(function(){
				$('.pin0').addClass('pinAnim');
			}, 1500);
		}
		if(nbrDeLieux == "1"){
			$('.guide01').html("Hey! Nous visitons <span style='color: #6b6bdd'> le premier </span> lieu.");
			$('.guide01').css({"width" : "160px"});
			setTimeout(function(){
				$('.pin0, .pin0A, .pin0B').addClass('pinAnim');
			}, 1500);

		}
		if(nbrDeLieux == "2"){
			$('.guide01').html("Hey! Nous visitons <span style='color: #6b6bdd'> le second </span> lieu.");
			$('.guide01').css({"width" : "160px"});
			setTimeout(function(){
				$('.pin0, .pin0A, .pin0B').addClass('pinAnim');
			}, 1500);
		}
		if(nbrDeLieux == "0"){
			$('.guide01').html("Hey! Nous n'avons pas encore visité de lieux.");
			$('.guide01').css({"width" : "160px"});
			setTimeout(function(){
				$('.pin0').addClass('pinAnim');
			}, 1500);
		}
	}
};
function cardDisparition(){
	$('.header > h2').animate({opacity: 0}, 400);
	$('.header > h2').css({'display' : 'none'});
	$('.header > h1').css({'display' : 'block', 'opacity' : '0'});
	$('.header > h1').animate({opacity: 1}, 400);
	$('.carte').css({'display' : 'block'});
	$('.carte').animate({opacity: 1}, 400);
	$(".menu").attr('src',"_images/menu.png"); 
	$('.menu').css({'opacity' : '0'});
	$('.menu').animate({opacity: 1}, 400);
	$(".menu").attr('onclick',"menu();");
	$('.map0').removeClass('mapApparition');
	$('.map0').addClass('mapDisparition');
	$('.pin0').removeClass('pinAnim');
	$('.pin0A').removeClass('pinAnim');
	$('.pin0B').removeClass('pinAnim');
	$('.pin0BBis').removeClass('pin0BisAnim');
	$('.pin0BBis').removeClass('pin0BisRemove');
	$('.pin0A').css({'background-color': '#6B6BDD'});
	$('.pin0').css({'background-color': '#6B6BDD'});
	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
	$('.pin0')[0].onclick = function(){pin0Bis('here')};
	setTimeout(function(){
		$('.pin0BBis').css({'display':'none'});
	},200);
	$('.pin0Bis').removeClass('pin0BisAnim');
	$('.pin0Bis').removeClass('pin0BisRemove');
	$('.pin0A').css({'background-color': '#6B6BDD'});
	$('.pin0B').css({'background-color': '#6B6BDD'});
	$('.pin0A')[0].onclick = function(){pin0Bis('Armes')};
	$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
	setTimeout(function(){
		$('.pin0Bis').css({'display':'none'});
	},200);
	$('.pin0ABis').removeClass('pin0BisAnim');
	$('.pin0ABis').removeClass('pin0BisRemove');
	$('.pin0B').css({'background-color': '#6B6BDD'});
	$('.pin0').css({'background-color': '#6B6BDD'});
		$('.pin0')[0].onclick = function(){pin0Bis('here')};
	$('.pin0B')[0].onclick = function(){pin0Bis('Theatre')};
	setTimeout(function(){
		$('.pin0ABis').css({'display':'none'});
	},200);
};
function beginFunctions(){
	setTimeout(function(){
		$('#content').append("<div class='messageTom messageTom1'><div></div><div></div></div>");
    	setTimeout(function(){
	    	$('.messageTom.messageTom1').addClass('message1anim');
	    	$('.messageTom.messageTom1>div').css({'display' : 'none'});
	    	setTimeout(function(){
				$('.messageTom.messageTom1').append('Hey, bienvenue! Ravi de visiter Namur avec vous !');
				setTimeout(function(){
					$('#content').append("<div class='messageTom messageTom2'><div></div><div></div></div>");
					setTimeout(function(){
						$('.messageTom.messageTom2').addClass('message2anim');
	    				$('.messageTom.messageTom2>div').css({'display' : 'none'});
	    				setTimeout(function(){
	    					$('.messageTom.messageTom2').append('Je vous envoie des messages et vous pouvez me répondre ci-dessous 	&#128071; .');
	    					setTimeout(function(){
	    						$('#content').append("<div class='answer answer1 firstAnswerArrive' onclick='firstAnswer();'><p>Comme ceci ?</p></div>")
	    					},1900);
	    				},200);
					}, 700);
				},1200);
	    	},200);
    	}, 700);  
    },500);
}


function firstAnswer(){
	$('.answer1').addClass('answer1valid');
	$('.answer1').attr('onclick', '');
	setTimeout(function(){
		$('#content').append("<div class='messageTom messageTom3'><div></div><div></div></div>");
    	setTimeout(function(){
    		var height = ($('#content').height()) +50;
			$('#content').css({'height' : height});
			$(".container").animate({scrollTop: 180}, 350, 'easeOutCirc', function () {});
	    	$('.messageTom.messageTom3').addClass('message1anim');
	    	$('.messageTom.messageTom3>div').css({'display' : 'none'});
	    	setTimeout(function(){
				$('.messageTom.messageTom3').append('Oui, super ! Combien de temps avez vous pour visiter Namur ?');
				setTimeout(function(){
					$('#content').append("<div class=\"containerTime\"><div class=\"answer answer2 answerArrive\" onclick=\"secondAnswer('little')\">Peu de temps, 30 minutes.</div><div class=\"answerArrive2 answer answer3\" onclick=\"secondAnswer('middle')\">Une demi journée.</div><div class=\"answerArrive3 answer answer4\" onclick=\"secondAnswer('big')\">Une journée entière</div></div>");
				},1400);
	    	},350);
    	}, 700);  
    },1000);
}

function secondAnswer(elmnt){
	$('.answer2, .answer3, .answer4').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerTime');
	$('.containerTime').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +400;
	$('#content').css({'height' : height});
	$(".container").animate({scrollTop: 230}, 350, 'easeOutCirc', function () {});
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerTime', '.messageTom3');
		$('.containerTime').css({'position': 'relative', "top": "0px","padding-top" : padding});
		setTimeout(function(){
			$('.containerTime').animate({padding :'0px'},350);
			if(elmnt == 'little'){
				$('.answer3, .answer4').css('display', "none");
			}
			if(elmnt == 'middle'){
				$('.answer2, .answer4').css('display', "none");
			}
			if(elmnt == 'big'){
				$('.answer2, .answer3').css('display', "none");
			}
			setTimeout(function(){
				if(elmnt == 'little'){
					$('.answer2').addClass('answer2valid');
				}
				if(elmnt == 'middle'){
					$('.answer3').addClass('answer2valid');
				}
				if(elmnt == 'big'){
					$('.answer4').addClass('answer2valid');
				}
				setTimeout(function(){
					$('#content').append("<div class='messageTom messageTom4'><div></div><div></div></div>");
			    	setTimeout(function(){
				    	$('.messageTom.messageTom4').addClass('message1anim');
				    	$('.messageTom.messageTom4>div').css({'display' : 'none'});
				    	setTimeout(function(){
							$('.messageTom.messageTom4').append('&#9200; &nbsp; &#128077; 	&nbsp;Et quel type de lieux allons nous visiter ?');
							setTimeout(function(){
								$('#content').append("<div class=\"containerCat\"><div class=\"answer answer5 answerArrive\" onclick=\"thirdAnswer('histoire')\">Histoire de la ville &nbsp; &#9962;</div><div class=\"answerArrive2 answer answer6\" onclick=\"thirdAnswer('curiosite')\">Curiosités et anecdotes &nbsp; &#10024;</div><div class=\"answerArrive3 answer answer7\" onclick=\"thirdAnswer('folklore')\">Folklore Namurois &nbsp; &#127881;</div></div>");
							},1400);
				    	},200);
			    	}, 700);  
				}, 800);
			},350);
		}, 500);
	},350)
}

function thirdAnswer(elmnt){
	$('.answer5, .answer6, .answer7, .answer8').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerCat');
	$('.containerCat').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +100;
	$('#content').css({'height' : height});
	$(".container").animate({scrollTop: 350}, 350, 'easeOutCirc', function () {});
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerCat', '.messageTom4');
		$('.containerCat').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
			$('.answer5, .answer6, .answer7, .answer8').css({"top": "0px"});
			$('.containerCat').animate({'padding-top' :'0px'},350);

			if(elmnt == 'histoire'){
				$('.answer6, .answer7, .answer8').css('display', "none");
			}
			if(elmnt == 'curiosite'){
				$('.answer7, .answer8, .answer5').css('display', "none");
			}
			if(elmnt == 'folklore'){
				$('.answer8, .answer5, .answer6').css('display', "none");
			}
			if(elmnt == 'gustatif'){
				$('.answer7, .answer5, .answer6').css('display', "none");
			}
			setTimeout(function(){
				if(elmnt == 'histoire'){
					$('.answer5').addClass('answer2valid');
					$('.header>h1').html('Tom &#9962;');
					$('.header>h1').css({'margin-left': '80px'});
				}
				if(elmnt == 'curiosite'){
					$('.answer6').addClass('answer2valid');
					$('.header>h1').html('Tom &#10024;');
					$('.header>h1').css({'margin-left': '80px'});
				}
				if(elmnt == 'folklore'){
					$('.answer7').addClass('answer2valid');
					$('.header>h1').html('Tom &#127881;');
					$('.header>h1').css({'margin-left': '80px'});
				}
				if(elmnt == 'gustatif'){
					$('.answer8').addClass('answer2valid');
					$('.header>h1').html('Tom &#127866;');
					$('.header>h1').css({'margin-left': '80px'});
				}
				setTimeout(function(){
					$('#content').append("<div class='messageTom messageTom6'><div></div><div></div></div>");
			    	setTimeout(function(){
				    	$('.messageTom.messageTom6').addClass('message2anim');
				    	$('.messageTom.messageTom6>div').css({'display' : 'none'});
				    	setTimeout(function(){
							$('.messageTom.messageTom6').append('Super, nous allons rencontrer Françwès et Djoseph, et voir le trone des menteurs.');
							setTimeout(function(){
								$('#content').append("<div class='messageTom messageTom7'><div></div><div></div></div>");
						    	setTimeout(function(){
							    	$('.messageTom.messageTom7').addClass('message1anim');
							    	$('.messageTom.messageTom7>div').css({'display' : 'none'});
							    	setTimeout(function(){
										$('.messageTom.messageTom7').append('Je vais vous guider sur la carte pour vous y rendre. On y va ?');
										setTimeout(function(){
											$('#content').append("<div class=\"containerGo\"><div class=\"answer answer9 answerArrive\" onclick=\"fourthAnswer('go')\">C'est parti ! &#128077;</div><div class=\"answerArrive2 answer answer10\" onclick=\"fourthAnswer('other')\">J\'aimerais choisir un autre type de lieux</div></div>");
										},1400);
							    	},200);
						    	}, 700);  
							}, 1900);
				    	},200);
			    	}, 700);  
				}, 800);
			}, 350);
		}, 500);
	},350)
}
function fourthAnswer(elmnt){
	$('.answer9, .answer10').attr('onclick', '');
	if(elmnt == 'go'){
		elementsPlaceBeforeScroll('.containerGo');
		$('.containerGo').css({'position': 'fixed', 'top' : positionTop});
		var height = ($('#content').height()) + 300;
		$('#content').css({'height' : height});
		$(".container").animate({scrollTop: 630}, 350, 'easeOutCirc', function () {});
		setTimeout(function(){
			elementsPlaceAfterScroll('.containerGo', '.messageTom7')
			$('.containerGo').css({'position': 'relative', "top": "0px", "padding-top" : padding});
			setTimeout(function(){
				$('.containerGo').animate({padding :'0px'},350);
				$('.answer10').css('display', "none");
				setTimeout(function(){
				$('.answer9').addClass('answer2valid');
				setTimeout(function(){
					map = true;
					$('.map').addClass('mapApparition');
					initialize();
					nbrDeLieux = 1;
					setTimeout(function(){
						$('.pin1, .pin2').addClass('pinAnim');
						setTimeout(function(){
							designPath();
							$('.path').css({'opacity' : '1'});
						}, 300);
					}, 2000);
					setTimeout(function(){
						$('.guide1').css({"display" : "none"});
						$('.guide2').css({"display" : "block"});
						$('.way > svg:nth-child(2)').css({'transform' : 'rotate('+ -35 +'deg)'});
						setTimeout(function(){
							$('.guide2').css({"display" : "none"});
							$('.guide3').css({"display" : "block"});
							$('.way > svg:nth-child(2)').css({'transform' : 'rotate('+ 35 +'deg)'});
							setTimeout(function(){
								$('.notification').css({'z-index': '1200'});
								$('.answer').css({'z-index': '500'});
								$('.notification').animate({opacity: .8}, 200);
								setTimeout(function(){
									$('.notifblock').css({'z-index': '1200', "opacity" : "1"});
									$('.notifblock').addClass('notifAnim');
								}, 300);
							}, 3000);
						}, 3000)
					}, 3000);
				}, 1500);
			},350);
			}, 500);
		},350);
	}
	if(elmnt == 'other'){
		elementsPlaceBeforeScroll('.containerGo');
		$('.containerGo').css({'position': 'fixed', 'top' : positionTop});
		var height = ($('#content').height()) + 300;
		$('#content').css({'height' : height});
		$(".container").animate({scrollTop: 630}, 350, 'easeOutCirc', function () {});
		setTimeout(function(){
			elementsPlaceAfterScroll('.containerGo', '.messageTom7')
			$('.containerGo').css({'position': 'relative', "top": "0px", "padding-top" : padding});
			setTimeout(function(){
				$('.containerGo').animate({padding :'0px'},350);
				$('.answer9').css('display', "none");
				setTimeout(function(){
				$('.answer10').addClass('answer2valid');
					setTimeout(function(){
					$('#content').append("<div class='messageTom messageTom8'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTom8').addClass('message1anim');
					    	$('.messageTom.messageTom8>div').css({'display' : 'none'});
					    	setTimeout(function(){
								$('.messageTom.messageTom8').append('Pas de problème, que souhaitez vous visiter ?');
								setTimeout(function(){
									$('#content').append("<div class=\"containerCatBis\"><div class=\"answer answer11 answerArrive\" onclick=\"fifthAnswer('histoire')\">Histoire de la ville &nbsp; &#9962;</div><div class=\"answerArrive2 answer answer12\" onclick=\"fifthAnswer('curiosite')\">Curiosités et anecdotes &nbsp; &#10024;</div><div class=\"answerArrive3 answer answer13\" onclick=\"fifthAnswer('folklore')\">Folklore Namurois &nbsp; &#127881;</div></div>");
					    		},1400);
				    		},200);
			    		}, 700);  
					}, 800);
				}, 200);
			},350);
		}, 500);
	}
}
function fifthAnswer(elmnt){
	$('.answer11, .answer12, .answer13, .answer14').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerCatBis');
	$('.containerCatBis').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +100;
	$('#content').css({'height' : height});
	$(".container").animate({scrollTop: 695}, 350, 'easeOutCirc', function () {});
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerCatBis', '.messageTom8');
		$('.containerCatBis').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
			$('.answer11, .answer12, .answer13, .answer14').css({"top": "0px"});
			$('.containerCatBis').animate({'padding-top' :'0px'},350);

			if(elmnt == 'histoire'){
				$('.answer12, .answer13, .answer14').css('display', "none");
			}
			if(elmnt == 'curiosite'){
				$('.answer13, .answer14, .answer11').css('display', "none");
			}
			if(elmnt == 'folklore'){
				$('.answer14, .answer11, .answer12').css('display', "none");
			}
			if(elmnt == 'gustatif'){
				$('.answer13, .answer11, .answer12').css('display', "none");
			}
			setTimeout(function(){
			if(elmnt == 'histoire'){
				$('.answer11').addClass('answer2valid');
				$('.header>h1').html('Tom &#9962;');
				$('.header>h1').css({'margin-left': '80px'});
			}
			if(elmnt == 'curiosite'){
				$('.answer12').addClass('answer2valid');
				$('.header>h1').html('Tom &#10024;');
				$('.header>h1').css({'margin-left': '80px'});
			}
			if(elmnt == 'folklore'){
				$('.answer13').addClass('answer2valid');
				$('.header>h1').html('Tom &#127881;');
				$('.header>h1').css({'margin-left': '80px'});
			}
			if(elmnt == 'gustatif'){
				$('.answer14').addClass('answer2valid');
				$('.header>h1').html('Tom &#127866;');
				$('.header>h1').css({'margin-left': '80px'});
			}
			setTimeout(function(){
				$('#content').append("<div class='messageTom messageTom9'><div></div><div></div></div>");
		    	setTimeout(function(){
			    	$('.messageTom.messageTom9').addClass('message2anim');
			    	$('.messageTom.messageTom9>div').css({'display' : 'none'});
			    	setTimeout(function(){
						$('.messageTom.messageTom9').append('Cool! Nous allons visiter le trone des menteurs et la place d\'Armes.');
						setTimeout(function(){
							$('#content').append("<div class='messageTom messageTom10'><div></div><div></div></div>");
					    	setTimeout(function(){
						    	$('.messageTom.messageTom10').addClass('message1anim');
						    	$('.messageTom.messageTom10>div').css({'display' : 'none'});
						    	setTimeout(function(){
									$('.messageTom.messageTom10').append('Je vais vous guider sur la carte pour vous y rendre. On y va ?');
									setTimeout(function(){
										$('#content').append("<div class=\"containerGoBis\"><div class=\"answer answer15 answerArrive\" onclick=\"sixthAnswer('go')\">C'est parti ! &#128077;</div></div>");
									},1400);
						    	},200);
					    	}, 700);  
						}, 1900);
			    	},200);
		    	}, 700);  
			}, 800);
		}, 350);
		}, 500);
	},350)
	
}

function sixthAnswer(){
	$('.answer15').attr('onclick', '');
	otherCategory = true;
	elementsPlaceBeforeScroll('.containerGoBis');
	$('.containerGoBis').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) + 300;
	$('#content').css({'height' : height});
	$(".container").animate({scrollTop: 995}, 350, 'easeOutCirc', function () {});
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerGoBis', '.messageTom10')
		$('.containerGoBis').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
			$('.containerGoBis').animate({padding :'0px'},350);
			setTimeout(function(){
			$('.answer15').addClass('answer2valid');
			setTimeout(function(){
				map = true;
				$('.map').addClass('mapApparition');
				initialize();
				setTimeout(function(){
					$('.pin1, .pin2').addClass('pinAnim');
					setTimeout(function(){
						designPath();
						$('.path').css({'opacity' : '1'});
					}, 300);
				}, 2000);
				nbrDeLieux = 1;
				setTimeout(function(){
					$('.guide1').css({"display" : "none"});
					$('.guide2').css({"display" : "block"});
					$('.way > svg:nth-child(2)').css({'transform' : 'rotate('+ -35 +'deg)'});
					setTimeout(function(){
						$('.guide2').css({"display" : "none"});
						$('.guide3').css({"display" : "block"});
						$('.way > svg:nth-child(2)').css({'transform' : 'rotate('+ 35 +'deg)'});
						setTimeout(function(){
							$('.notification').css({'z-index': '1200'});
							$('.answer').css({'z-index': '500'});
							$('.notification').animate({opacity: .8}, 200);
							setTimeout(function(){
								$('.notifblock').css({'z-index': '1200', "opacity" : "1"});
								$('.notifblock').addClass('notifAnim');
							}, 300);
						}, 3000);
					}, 3000)
				}, 3000);
			}, 1500);
		},350);
		}, 500);
	},350);
}

function seventhAnswer(){
	map = false;
	$('.map').addClass('mapDisparition');
	$('.notification').addClass('notifDisparition');
	$('.notifblock').addClass('notifBlockDisparition');
	setTimeout(function(){
		$('#content').append("<div class='messageTom messageTomA'><div></div><div></div></div>");
    	setTimeout(function(){
	    	$('.messageTom.messageTomA').addClass('message3anim');
	    	$('.messageTom.messageTomA>div').css({'display' : 'none'});
	    	setTimeout(function(){
				$('.messageTom.messageTomA').append("<img class='bigPictureImg' onclick='bigPictureArmes()' src='_images/francwesydjoseph.jpg' alt='photo de la place d\'Armes.'><p class='message_text'>La place d'Armes et ses deux namurois Françwès et Djoseph.</p>");
				setTimeout(function(){
					$('#content').append("<div class=\"containerArmesOne\"><div class=\"answer answer16 answerArrive\" onclick=\"eighthAnswer('who')\">Qui sont-ils? &#129300;</div><div class=\"answerArrive2 answer answer17\" onclick=\"eighthAnswer('next')\">Je les connais, on va au lieu suivant ?</div></div>");
	    		},2400);
    		},300);
		}, 800);  
	}, 400);

}

function eighthAnswer(elmnt){
	$('.answer16, .answer17').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerArmesOne');
	$('.containerArmesOne').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) + 300;
	$('#content').css({'height' : height});
	if(otherCategory == true){
		$(".container").animate({scrollTop: 1195}, 350, 'easeOutCirc', function () {});
	}else{
		$(".container").animate({scrollTop: 830}, 350, 'easeOutCirc', function () {});
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerArmesOne', '.messageTomA');
		$('.containerArmesOne').css({'position': 'relative', "top": "0px", "padding-top" : padding+20});
		setTimeout(function(){
			$('.containerArmesOne').animate({padding :'0px'},350);
			if(elmnt == 'who'){
				$('.answer17').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer16').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomB'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomB').addClass('message5anim');
					    	$('.messageTom.messageTomB>div').css({'display' : 'none'});
					    	setTimeout(function(){
								$('.messageTom.messageTomB').append('Anciens héros de la presse quotidienne, ces deux hommes sont connus pour se promener dans les rues de Namur.');
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomC'><div></div><div></div></div>");
							    	setTimeout(function(){
							    		if(otherCategory == true){
											$(".container").animate({scrollTop: 1295}, 350, 'easeOutCirc', function () {});
										}else{
											$(".container").animate({scrollTop: 930}, 350, 'easeOutCirc', function () {});
										}
								    	$('.messageTom.messageTomC').addClass('message5anim');
								    	$('.messageTom.messageTomC>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomC').append('Ils marchent à la vitesse du Lum\'çon et ne se préocupent que de la pluie et du beau temps - l\’pleuve èt l’solia &#9925;');
											setTimeout(function(){
												$('#content').append("<div class=\"containerArmesTwo\"><div class=\"answer answer18 answerArrive\" onclick=\"ninthAnswer('who')\">Qu'est ce que le Lum'çon ?</div><div class=\"answerArrive2 answer answer19\" onclick=\"ninthAnswer('next')\">On va au lieu suivant ?</div></div>");
								    		},2600);
							    		},350);
						    		}, 700);  
								}, 2400);
				    		},200);
			    		}, 700);  
					}, 800);
				},200);
			}
			if(elmnt == 'next'){
				scroll = 'act1';
				$('.answer16').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer17').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomD'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomD').addClass('message2anim');
					    	$('.messageTom.messageTomD>div').css({'display' : 'none'});
					    	setTimeout(function(){
								$('.messageTom.messageTomD').append('Allons-y ! Comme la première fois, je vous guide sur la carte pour nous y rendre. On y va ?');
								setTimeout(function(){
									$('#content').append("<div class=\"containerArmesLeave\"><div class=\"answer answer20 answerArrive\" onclick=\"tenthAnswer('go1')\">C'est parti ! &#128077; </div></div>");
			    				},1600);
			    			},200);
		    			}, 700);  
					}, 800);
				},200);
			}
		},350)
	},350);
}

function ninthAnswer(elmnt){
	$('.answer18, .answer19').attr('onclick', '');
	if(elmnt == 'who' || 'next'){
		elementsPlaceBeforeScroll('.containerArmesTwo');
		$('.containerArmesTwo').css({'position': 'fixed', 'top' : positionTop});
		var height = ($('#content').height()) + 300;
		$('#content').css({'height' : height});
		if(otherCategory == true){
			$(".container").animate({scrollTop: 1495}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1130}, 350, 'easeOutCirc', function () {});
		}
		setTimeout(function(){
			elementsPlaceAfterScroll('.containerArmesTwo', '.messageTomC');
			$('.containerArmesTwo').css({'position': 'relative', "top": "0px", "padding-top" : padding});
			setTimeout(function(){
			if(elmnt == 'who'){
				scroll = 'act2';
				$('.answer19').css({'display' : 'none'});
				$('.containerArmesTwo').animate({padding :'0px'},350);
				setTimeout(function(){
					$('.answer18').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomE'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomE').addClass('message5anim');
					    	$('.messageTom.messageTomE>div').css({'display' : 'none'});
					    	setTimeout(function(){
								$('.messageTom.messageTomE').append('Lum\'çon veut dire \'escargot\' en wallon. Il sont la pour représenter la lenteur bien connue des Namurois  &#128012; ');
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomF'><div></div><div></div></div>");
							    	setTimeout(function(){
								    	$('.messageTom.messageTomF').addClass('message2anim');
								    	$('.messageTom.messageTomF>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomF').append('Je vous ai dit tout ce que je sais à propos de ce lieu, on se dirige vers le lieu suivant ?');
											setTimeout(function(){
												$('#content').append("<div class=\"containerArmesLeaveBis\"><div class=\"answer answer21 answerArrive\" onclick=\"tenthAnswer('go2')\">Allons-y ! &#128694;</div></div>");
								    		},2000);
							    		},200);
						    		}, 700);  
								}, 1900);
				    		},200);
			    		}, 700);  
					}, 800);
				},350);
			};
				if(elmnt == 'next'){
					scroll = 'act3';
					$('.answer18').css({'display' : 'none'});
					$('.containerArmesTwo').animate({padding :'0px'},350);
					setTimeout(function(){
						$('.answer19').addClass('answer2valid');
						$('.answer19').attr('onclick', '');
						setTimeout(function(){
							$('#content').append("<div class='messageTom messageTomE'><div></div><div></div></div>");
					    	setTimeout(function(){
						    	$('.messageTom.messageTomE').addClass('message2anim');
						    	$('.messageTom.messageTomE>div').css({'display' : 'none'});
						    	setTimeout(function(){
									$('.messageTom.messageTomE').append('Allons-y ! Comme la première fois, je vous guide sur la carte pour nous y rendre. On y va ?');
									setTimeout(function(){
										$('#content').append("<div class=\"containerArmesLeaveTres\"><div class=\"answer answer22 answerArrive\" onclick=\"tenthAnswer('go3')\">C'est parti ! &#128077; </div></div>");
				    				},1700);		
					    		},200);
				    		}, 700);  
						}, 800);
					},200);
				};
			},350);
	}, 350);
	};
}
function tenthAnswer(){
	$('.answer20, .answer21, .answer22').attr('onclick', '');
	if(scroll == 'act1'){
		elementsPlaceBeforeScroll('.containerArmesLeave');
		$('.containerArmesLeave').css({'position': 'fixed', 'top' : positionTop});
		var height = ($('#content').height()) + 300;
		$('#content').css({'height' : height});

		if(otherCategory == true){
			$(".container").animate({scrollTop: 1485}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1120}, 350, 'easeOutCirc', function () {});
		}
		setTimeout(function(){
			elementsPlaceAfterScroll('.containerArmesLeave', '.messageTomD');
			$('.containerArmesLeave').css({'position': 'relative', "top": "0px", "padding-top" : padding});
			setTimeout(function(){
				$('.containerArmesLeave').animate({padding :'0px'},350);
				setTimeout(function(){
					$('.answer20').addClass('answer2valid');
				},350);
			},350);
		},350);
	}
	if(scroll == 'act2'){
		elementsPlaceBeforeScroll('.containerArmesLeaveBis');
		$('.containerArmesLeaveBis').css({'position': 'fixed', 'top' : positionTop});
		var height = ($('#content').height()) + 300;
		$('#content').css({'height' : height});
		if(otherCategory == true){
			$(".container").animate({scrollTop: 1855}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1490}, 350, 'easeOutCirc', function () {});
		}
		setTimeout(function(){
			elementsPlaceAfterScroll('.containerArmesLeaveBis', '.messageTomF');
			$('.containerArmesLeaveBis').css({'position': 'relative', "top": "0px", "padding-top" : padding});
			setTimeout(function(){
				$('.containerArmesLeaveBis').animate({padding :'0px'},350);
				setTimeout(function(){
					$('.answer21').addClass('answer2valid');
				},350);
			},350);
		},350);
	}
	if(scroll == 'act3'){
		elementsPlaceBeforeScroll('.containerArmesLeaveTres');
		$('.containerArmesLeaveTres').css({'position': 'fixed', 'top' : positionTop});
		var height = ($('#content').height()) + 300;
		$('#content').css({'height' : height});
		if(otherCategory == true){
			$(".container").animate({scrollTop: 1740}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1375}, 350, 'easeOutCirc', function () {});
		}
		setTimeout(function(){
			elementsPlaceAfterScroll('.containerArmesLeaveTres', '.messageTomE');
			$('.containerArmesLeaveTres').css({'position': 'relative', "top": "0px", "padding-top" : padding});
			setTimeout(function(){
				$('.containerArmesLeaveTres').animate({padding :'0px'},350);
				setTimeout(function(){
					$('.answer22').addClass('answer2valid');
				},350);
			},350);
		},350);
	}
	setTimeout(function(){
		map = true;
		$('.map2').addClass('mapApparition');
		initializeThree();
		setTimeout(function(){
			$('.pin3').addClass('pinAnim');
			$('.pin4').addClass('pinAnim');
			setTimeout(function(){
				designPath();
				$('.pathBis').css({'opacity' : '1'});
			}, 300);
		}, 2000);
		nbrDeLieux=2;
		setTimeout(function(){
			$('.guide12').css({"display" : "none"});
			$('.guide22').css({"display" : "block"});
			$('.way2 > svg:nth-child(2)').css({'transform' : 'rotate('+ -35 +'deg)'});
				setTimeout(function(){
					$('.notification2').css({'z-index': '1200'});
					$('.answer').css({'z-index': '500'});
					$('.notification2').animate({opacity: .8}, 200);
					setTimeout(function(){
						$('.notifblock2').css({'z-index': '1200', "opacity" : "1"});
						$('.notifblock2').addClass('notifAnim');
					}, 300);
				}, 3000);
		}, 3000);
	},2000);
}
function elevenAnswer(){
	map = false;
	$('.map2').addClass('mapDisparition');
	$('.notification2').addClass('notifDisparition');
	$('.notifblock2').addClass('notifBlockDisparition');
	setTimeout(function(){
		$('#content').append("<div class='betweenPlaces'><div class='border'></div><p>Place du théâtre, second lieu de la visite.</p><div class='border margin'></div></div>");
		setTimeout(function(){
			$('#content').append("<div class='messageTom messageTomG'><div></div><div></div></div>");
	    	setTimeout(function(){
		    	$('.messageTom.messageTomG').addClass('message3anim');
		    	$('.messageTom.messageTomG>div').css({'display' : 'none'});
		    	setTimeout(function(){
					$('.messageTom.messageTomG').append("<img class='bigPictureImg' onclick='bigPictureTrone()' src='_images/tronedesmenteurs.jpg' alt='photo du trone des menteurs.'><p class='message_text'>La place du théâtre et le célèbre trone. Pourriez vous être le roi? &#128081;</p>");
					setTimeout(function(){
						$('#content').append("<div class=\"containerTheatreOne\"><div class=\"answer answer23 answerArrive\" onclick=\"twelveAnswer('who')\">Qu'est ce que le roi des menteurs ?</div><div class=\"answer answer24 answerArrive2\" onclick=\"twelveAnswer('next')\">On va au lieu suivant ?</div></div>");
			   		},2400);
	    		},200);
			}, 700);  
		}, 400);
	}, 400);
}
function twelveAnswer(elmnt){
	$('.answer23, .answer24').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerTheatreOne');
	$('.containerTheatreOne').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) + 300;
	$('#content').css({'height' : height});
	if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 1705}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1340}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2075}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1710}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 1960}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1595}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerTheatreOne', '.messageTomG');
		$('.containerTheatreOne').css({'position': 'relative', "top": "0px", "padding-top" : padding+20});
		setTimeout(function(){
			$('.containerTheatreOne').animate({padding :'0px'},350);
			if(elmnt == 'who'){
				$('.answer24').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer23').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomH'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomH').addClass('message4anim');
					    	$('.messageTom.messageTomH>div').css({'display' : 'none'});
					    	setTimeout(function(){
								$('.messageTom.messageTomH').append('A l\'époque, des bourgeois se réunissaient près du trone et se racontaient des histoires. Chacun participait en fonction de son vécu, de sa vie.');
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomI'><div></div><div></div></div>");
							    	setTimeout(function(){
							    			if(scroll == 'act1'){
												if(otherCategory == true){
													$(".container").animate({scrollTop: 1805}, 350, 'easeOutCirc', function () {});
												}else{
													$(".container").animate({scrollTop: 1440}, 350, 'easeOutCirc', function () {});
												}
											}
											if(scroll == 'act2'){
												if(otherCategory == true){
													$(".container").animate({scrollTop: 2175}, 350, 'easeOutCirc', function () {});
												}else{
													$(".container").animate({scrollTop: 1810}, 350, 'easeOutCirc', function () {});
												}
											}
											if(scroll == 'act3'){
												if(otherCategory == true){
													$(".container").animate({scrollTop: 2060}, 350, 'easeOutCirc', function () {});
												}else{
													$(".container").animate({scrollTop: 1695}, 350, 'easeOutCirc', function () {});
												}
											}
								    	$('.messageTom.messageTomI').addClass('message2anim');
								    	$('.messageTom.messageTomI>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomI').append('Celui qui racontait l\'histoire la plus loufoque était élu roi des menteurs &#128079; &nbsp;');
											setTimeout(function(){
												$('#content').append("<div class=\"containerTheatreTwo\"><div class=\"answer answer25 answerArrive\" onclick=\"thirteenAnswer('who')\">A qui appartient le buste au dessus ?</div><div class=\"answerArrive2 answer answer26\" onclick=\"thirteenAnswer('next')\">On va au lieu suivant ?</div></div>");
								    		},2200);
							    		},350);
						    		}, 1400);  
								}, 2800);
				    		},200);
			    		}, 700);  
					}, 800);
				},350);
			}
			if(elmnt == 'next'){
				$('.answer23').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer24').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomJ'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomJ').addClass('message2anim');
					    	$('.messageTom.messageTomJ>div').css({'display' : 'none'});
					    	setTimeout(function(){
					    		nbrDeLieux = "3";
								$('.messageTom.messageTomJ').append('La visite se termine ici, mais je pourrais encore vous présenter bien d\'autres lieux.');
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomK'><div></div><div></div></div>");
							    	setTimeout(function(){
							    			if(scroll == 'act1'){
												if(otherCategory == true){
													$(".container").animate({scrollTop: 1745}, 350, 'easeOutCirc', function () {});
												}else{
													$(".container").animate({scrollTop: 1380}, 350, 'easeOutCirc', function () {});
												}
											}
											if(scroll == 'act2'){
												if(otherCategory == true){
													$(".container").animate({scrollTop: 2115}, 350, 'easeOutCirc', function () {});
												}else{
													$(".container").animate({scrollTop: 1750}, 350, 'easeOutCirc', function () {});
												}
											}
											if(scroll == 'act3'){
												if(otherCategory == true){
													$(".container").animate({scrollTop: 2000}, 350, 'easeOutCirc', function () {});
												}else{
													$(".container").animate({scrollTop: 1635}, 350, 'easeOutCirc', function () {});
												}
											}
						    			$('.messageTom.messageTomK').addClass('message1anim');
								    	$('.messageTom.messageTomK>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomK').append('Auriez vous encore un peu de temps pour visiter ? &#128522; ');
											setTimeout(function(){
												end = 'first';
												$('#content').append("<div class=\"containerEnd\"><div class=\"answer answer27 answerArrive\" onclick=\"endAnswer('endOne')\">Oui, encore un lieu !</div><div class=\"answerArrive2 answer answer28\" onclick=\"endAnswer('endTwo')\">Recommençons une visite !</div><div class=\"answer answer29 answerArrive3\" onclick=\"endAnswer('endThree')\">Une prochaine fois! </div></div>");
								    		},1400);
							    		},350);
						    		}, 700);  
								}, 1900);
				    		},200);
			    		}, 700);  
					}, 1000);
				},350);
			}
		},350);
	},350);
}

function thirteenAnswer(elmnt){
	$('.answer26, .answer25').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerTheatreTwo');
	$('.containerTheatreTwo').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) + 300;
	$('#content').css({'height' : height});
	if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2025}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1660}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2395}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2030}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2280}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1915}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerTheatreTwo', '.messageTomI');
		$('.containerTheatreTwo').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
			$('.containerTheatreTwo').animate({padding :'0px'},350);
			if(elmnt == 'who'){
				$('.answer26').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer25').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomL'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomL').addClass('message2anim');
					    	$('.messageTom.messageTomL>div').css({'display' : 'none'});
					    	setTimeout(function(){
								$('.messageTom.messageTomL').append('C\'est Nicolas Bosret, auteur de l’hymne Namurois, "Li bia bouquet", rédigé en 1851.');
								setTimeout(function(){
									$('#content').append("<div class=\"containerTheatreThree\"><div class=\"answer answer30 answerArrive\" onclick=\"fourteenAnswer('who')\">Peut on écouter l'hymne &#127930; &nbsp;? </div><div class=\"answerArrive2 answer answer31\" onclick=\"fourteenAnswer('next')\">On poursuit la visite ?</div></div>");
					    		},1900);
				    		},200);
			    		}, 700);  
					}, 800);
				},350);
			}
			if(elmnt == 'next'){
				$('.answer25').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer26').addClass('answer2valid');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomM'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomM').addClass('message2anim');
					    	$('.messageTom.messageTomM>div').css({'display' : 'none'});
					    	setTimeout(function(){
					    		nbrDeLieux = "3";
								$('.messageTom.messageTomM').append('La visite se termine ici, mais je pourrais encore vous présenter bien d\'autres lieux.');
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomN'><div></div><div></div></div>");
							    	setTimeout(function(){
						    			$('.messageTom.messageTomN').addClass('message1anim');
								    	$('.messageTom.messageTomN>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomN').append('Auriez vous encore un peu de temps pour visiter ? &#128522; ');
											setTimeout(function(){
												end = 'bis';
												$('#content').append("<div class=\"containerEndBis\"><div class=\"answer answer32 answerArrive\" onclick=\"endAnswer('endOne')\">Oui, encore un lieu !</div><div class=\"answerArrive2 answer answer33\" onclick=\"endAnswer('endTwo')\">Recommençons une visite !</div><div class=\"answer answer34 answerArrive3\" onclick=\"endAnswer('endThree')\">Une prochaine fois! </div></div>");
								    		},1400);
							    		},200);
						    		}, 700);  
								}, 1900);
				    		},200);
			    		}, 700);  
					}, 800);
				},350);
			}
		},350);
	},350);
}
function fourteenAnswer(elmnt){
	$('.answer30, .answer31').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerTheatreThree');
	$('.containerTheatreThree').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) + 300;
	$('#content').css({'height' : height});
	if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2225}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1860}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2595}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2230}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2480}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2115}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerTheatreThree', '.messageTomL');
		$('.containerTheatreThree').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
			$('.containerTheatreThree').animate({padding :'0px'},350);
			if(elmnt == 'who'){
				$('.answer31').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer30').addClass('answer2valid');
					$('.answer30').attr('onclick', '');
					$('#content').append("<div class='player'><div onclick='changeBack()'><img id='PlayPause' src='_images/play.png' alt='bouton play' onclick='wavesurfer.playPause()' onclick='changeBackground();'style='width:25px'/></div><div id='waveform'></div></div>");
					player();
					setTimeout(function(){
						$('.player').css({'opacity' : '1'});
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomO'><div></div><div></div></div>");
							    	setTimeout(function(){
								    	$('.messageTom.messageTomO').addClass('message1anim');
								    	$('.messageTom.messageTomO>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomO').append('Evidement. Appuyez sur le play ci-dessus &#128070; pour écouter.');
											setTimeout(function(){
												$('#content').append("<div class='messageTom messageTomP'><div></div><div></div></div>");
										    	setTimeout(function(){
										    		if(scroll == 'act1'){
														if(otherCategory == true){
															$(".container").animate({scrollTop: 2325}, 350, 'easeOutCirc', function () {});
														}else{
															$(".container").animate({scrollTop: 1960}, 350, 'easeOutCirc', function () {});
														}
													}
													if(scroll == 'act2'){
														if(otherCategory == true){
															$(".container").animate({scrollTop: 2695}, 350, 'easeOutCirc', function () {});
														}else{
															$(".container").animate({scrollTop: 2330}, 350, 'easeOutCirc', function () {});
														}
													}
													if(scroll == 'act3'){
														if(otherCategory == true){
															$(".container").animate({scrollTop: 2580}, 350, 'easeOutCirc', function () {});
														}else{
															$(".container").animate({scrollTop: 2215}, 350, 'easeOutCirc', function () {});
														}
													}
											    	$('.messageTom.messageTomP').addClass('message5anim');
											    	$('.messageTom.messageTomP>div').css({'display' : 'none'});
											    	setTimeout(function(){
														$('.messageTom.messageTomP').append('Je vous ai dit tout ce que je sais à propos de cet endroit, et notre visite se termine maintenant.');
														nbrDeLieux = "3";
														setTimeout(function(){
															$('#content').append("<div class='messageTom messageTomQ'><div></div><div></div></div>");
													    	setTimeout(function(){
													    			if(scroll == 'act1'){
																		if(otherCategory == true){
																			$(".container").animate({scrollTop: 2425}, 350, 'easeOutCirc', function () {});
																		}else{
																			$(".container").animate({scrollTop: 2060}, 350, 'easeOutCirc', function () {});
																		}
																	}
																	if(scroll == 'act2'){
																		if(otherCategory == true){
																			$(".container").animate({scrollTop: 2795}, 350, 'easeOutCirc', function () {});
																		}else{
																			$(".container").animate({scrollTop: 2430}, 350, 'easeOutCirc', function () {});
																		}
																	}
																	if(scroll == 'act3'){
																		if(otherCategory == true){
																			$(".container").animate({scrollTop: 2680}, 350, 'easeOutCirc', function () {});
																		}else{
																			$(".container").animate({scrollTop: 2315}, 350, 'easeOutCirc', function () {});
																		}
																	}
														    	$('.messageTom.messageTomQ').addClass('message5anim');
														    	$('.messageTom.messageTomQ>div').css({'display' : 'none'});
														    	setTimeout(function(){
																	$('.messageTom.messageTomQ').append('Je pourrais encore vous parler de bien d\'autres lieux. Auriez vous encore un peu de temps pour visiter? &#128522;');
																	setTimeout(function(){
																		end = 'tres';
																		$('#content').append("<div class=\"containerEndTres\"><div class=\"answer answer36 answerArrive\" onclick=\"endAnswer('endOne')\">Oui, encore un lieu !</div><div class=\"answerArrive2 answer answer37\" onclick=\"endAnswer('endTwo')\">Recommençons une visite !</div><div class=\"answer answer38 answerArrive3\" onclick=\"endAnswer('endThree')\">Une prochaine fois! </div></div>");
														    		},1900);
													    		},350);
												    		}, 2400);  
														}, 800);
										    		},350);
									    		}, 700);  
											}, 7000);
							    		},200);
						    		}, 700);  
								}, 800);
					}, 400);
				},350);
			}
			if(elmnt == 'next'){
				$('.answer30').css({'display' : 'none'});
				setTimeout(function(){
					$('.answer31').addClass('answer2valid');
					$('.answer31').attr('onclick', '');
					setTimeout(function(){
						$('#content').append("<div class='messageTom messageTomR'><div></div><div></div></div>");
				    	setTimeout(function(){
					    	$('.messageTom.messageTomR').addClass('message2anim');
					    	$('.messageTom.messageTomR>div').css({'display' : 'none'});
					    	setTimeout(function(){
					    		nbrDeLieux = "3";
								$('.messageTom.messageTomR').append('La visite se termine ici, mais je pourrais encore vous présenter bien d\'autres lieux.');
								setTimeout(function(){
									$('#content').append("<div class='messageTom messageTomS'><div></div><div></div></div>");
							    	setTimeout(function(){
						    			$('.messageTom.messageTomS').addClass('message1anim');
								    	$('.messageTom.messageTomS>div').css({'display' : 'none'});
								    	setTimeout(function(){
											$('.messageTom.messageTomS').append('Auriez vous encore un peu de temps pour visiter ? &#128522; ');
											setTimeout(function(){
												end = 'four';
												$('#content').append("<div class=\"containerEndFour\"><div class=\"answer answer39 answerArrive\" onclick=\"endAnswer('endOne')\">Oui, encore un lieu !</div><div class=\"answerArrive2 answer answer40\" onclick=\"endAnswer('endTwo')\">Recommençons une visite !</div><div class=\"answer answer41 answerArrive3\" onclick=\"endAnswer('endThree')\">Une prochaine fois! </div></div>");
								    		},1400);
							    		},200);
						    		}, 700);  
								}, 1800);
				    		},200);
			    		}, 700);  
					}, 800);
				},350);
			}
		},350);
	},350);
}
function endAnswer(elmnt){
	if(end == 'first'){
	$('.answer27, .answer28, .anwer29').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerEnd');
	$('.containerEnd').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +400;
	$('#content').css({'height' : height});
	if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 1945}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1580}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2315}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1950}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2200}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1835}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerEnd', '.messageTomK');
		$('.containerEnd').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
		$('.containerEnd').animate({padding :'0px'},350);
		if(elmnt == 'endOne'){
			$('.answer28, .answer29').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer27').addClass('answer2valid');
			},350);
		}
		if(elmnt == 'endTwo'){
			$('.containerEnd').animate({padding :'0px'},350);
			$('.answer27, .answer29').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer28').addClass('answer2valid');
			},350);
		}
		if(elmnt == 'endThree'){
			$('.answer28, .answer27').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer29').addClass('answer2valid');
			},350);
		}
		setTimeout(function(){
			$('#content').append("<div class='messageTom messageTomEnd1'><div></div><div></div></div>");
	    	setTimeout(function(){
		    	$('.messageTom.messageTomEnd1').addClass('message5anim');
		    	$('.messageTom.messageTomEnd1>div').css({'display' : 'none'});
		    	setTimeout(function(){
					$('.messageTom.messageTomEnd1').append("Malheureusement la version Beta s'arrête ici, mais j'espère vous revoir bientot pour de nouvelles visites ! ");
	    		},200);
			}, 700);  
		}, 400);
		},350);
	},750);
	}else if(end == 'bis'){
		$('.answer32, .answer33, .anwer34').attr('onclick', '');
		elementsPlaceBeforeScroll('.containerEndBis');
	$('.containerEndBis').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +400;
	$('#content').css({'height' : height});
	if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2225}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 1860}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2595}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2230}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2480}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2115}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerEndBis', '.messageTomN');
		$('.containerEndBis').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
		$('.containerEndBis').animate({padding :'0px'},350);
		if(elmnt == 'endOne'){
			$('.answer33, .answer34').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer32').addClass('answer2valid');
				$('.answer32').attr('onclick', '');
			},350);
		}
		if(elmnt == 'endTwo'){
			$('.containerEnd').animate({padding :'0px'},350);
			$('.answer32, .answer34').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer33').addClass('answer2valid');
				$('.answer33').attr('onclick', '');
			},350);
		}
		if(elmnt == 'endThree'){
			$('.answer32, .answer33').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer34').addClass('answer2valid');
				$('.answer34').attr('onclick', '');
			},350);
		}
		setTimeout(function(){
			$('#content').append("<div class='messageTom messageTomEnd2'><div></div><div></div></div>");
	    	setTimeout(function(){
		    	$('.messageTom.messageTomEnd2').addClass('message5anim');
		    	$('.messageTom.messageTomEnd2>div').css({'display' : 'none'});
		    	setTimeout(function(){
					$('.messageTom.messageTomEnd2').append("Malheureusement la version Beta s'arrête ici, mais j'espère vous revoir bientot pour de nouvelles visites ! ");
	    		},200);
			}, 700);  
		}, 800);
		},350);
	},750);
	}else if(end == 'tres'){
		$('.answer36, .answer37, .anwer38').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerEndTres');
	$('.containerEndTres').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +400;
	$('#content').css({'height' : height});
		if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2625}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2260}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2995}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2630}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2880}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2515}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerEndTres', '.messageTomQ');
		$('.containerEndTres').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
		$('.containerEndTres').animate({padding :'0px'},350);
		if(elmnt == 'endOne'){
			$('.answer37, .answer38').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer36').addClass('answer2valid');
				$('.answer36').attr('onclick', '');
			},350);
		}
		if(elmnt == 'endTwo'){
			$('.containerEnd').animate({padding :'0px'},350);
			$('.answer36, .answer38').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer37').addClass('answer2valid');
				$('.answer37').attr('onclick', '');
			},350);
		}
		if(elmnt == 'endThree'){
			$('.answer36, .answer37').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer38').addClass('answer2valid');
				$('.answer38').attr('onclick', '');
			},350);
		}
		setTimeout(function(){
			$('#content').append("<div class='messageTom messageTomEnd3'><div></div><div></div></div>");
	    	setTimeout(function(){
		    	$('.messageTom.messageTomEnd3').addClass('message5anim');
		    	$('.messageTom.messageTomEnd3>div').css({'display' : 'none'});
		    	setTimeout(function(){
					$('.messageTom.messageTomEnd3').append("Malheureusement la version Beta s'arrête ici, mais j'espère vous revoir bientot pour de nouvelles visites ! ");
	    		},200);
			}, 700);  
		}, 800);
		},350);
	},750);
	}else if(end == 'four'){
	$('.answer39, .answer40, .anwer41').attr('onclick', '');
	elementsPlaceBeforeScroll('.containerEndFour');
	$('.containerEndFour').css({'position': 'fixed', 'top' : positionTop});
	var height = ($('#content').height()) +400;
	$('#content').css({'height' : height});
	if(scroll == 'act1'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2325}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2060}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act2'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2795}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2430}, 350, 'easeOutCirc', function () {});
		}
	}
	if(scroll == 'act3'){
		if(otherCategory == true){
			$(".container").animate({scrollTop: 2680}, 350, 'easeOutCirc', function () {});
		}else{
			$(".container").animate({scrollTop: 2315}, 350, 'easeOutCirc', function () {});
		}
	}
	setTimeout(function(){
		elementsPlaceAfterScroll('.containerEndFour', '.messageTomS');
		$('.containerEndFour').css({'position': 'relative', "top": "0px", "padding-top" : padding});
		setTimeout(function(){
		$('.containerEndFour').animate({padding :'0px'},350);
		if(elmnt == 'endOne'){
			$('.answer40, .answer41').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer39').addClass('answer2valid');
				$('.answer39').attr('onclick', '');
			},350);
		}
		if(elmnt == 'endTwo'){
			$('.containerEnd').animate({padding :'0px'},350);
			$('.answer39, .answer41').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer40').addClass('answer2valid');
				$('.answer40').attr('onclick', '');
			},350);
		}
		if(elmnt == 'endThree'){
			$('.answer39, .answer40').css({'display' : 'none'});
			setTimeout(function(){
				$('.answer41').addClass('answer2valid');
				$('.answer41').attr('onclick', '');
			},350);
		}
		setTimeout(function(){
			$('#content').append("<div class='messageTom messageTomEnd4'><div></div><div></div></div>");
	    	setTimeout(function(){
		    	$('.messageTom.messageTomEnd4').addClass('message5anim');
		    	$('.messageTom.messageTomEnd4>div').css({'display' : 'none'});
		    	setTimeout(function(){
					$('.messageTom.messageTomEnd4').append("Malheureusement la version Beta s'arrête ici, mais j'espère vous revoir bientot pour de nouvelles visites ! ");
	    		},200);
			}, 700);  
		}, 800);
		},350);
	},750);
	}
}



