var slider1 = true;
var slider2 = false;
var slider3 = false;
var ctp=0;
var compteur = 0;
/*Défini les variables pour empècher un second onclick*/
var Cpt1 = false;
var Cpt2= false; 
var Cpt3= false;
var Cpt4= false;
var Cpt5= false;
var Cpt6= false;
var Cpt7= false;
var Cpt8= false;
var Answer = 0;  
var open = false;
var containerAnswer;  
var positionAnswer;
var positionFutureAnswer;
var heightDialog;
var heightContainer;
var heightMessage;
var y;
$(document).ready(function(){

  $('.nav-mobile > .menu').click(function(){
    if(open == false){
      open = true;
      $(".nav-mobile > .menu-open").removeClass('openMenu');
      $(".nav-mobile > .menu-open").removeClass('closeMenu');
      $(".nav-mobile > .menu").toggleClass('open');
      $(".nav-mobile > .menu-open").css({'display' : 'block'});
      $(".nav-mobile > .menu-open").css({'height': $(window).height()});
      $(".nav-mobile > .menu-open").addClass('openMenu');
    }else if (open == true){
      open = false;
      $(".nav-mobile > .menu-open").removeClass('openMenu');
      $(".nav-mobile > .menu-open").removeClass('closeMenu');
      $(".nav-mobile > .menu").toggleClass('open');
      $(".nav-mobile > .menu-open").addClass('closeMenu');
    }
  });
  $(window).resize(function() {
    delay(function(){
      if(open == true){
        open = false;
        $(".nav-mobile > .menu-open").removeClass('openMenu');
        $(".nav-mobile > .menu-open").removeClass('closeMenu');
        $(".nav-mobile > .menu").toggleClass('open');
        $(".nav-mobile > .menu-open").addClass('closeMenu');
      }
      if(Answer == 1){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
      }
      if(Answer == 2){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
      }
      if(Answer == 3){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
        $(".answerUser.Three").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Three").width() - 50;
        $(".answerUser.Three").css({'margin-left' : positionAfterResize});
        answerPlace('.messageTom.Six');
        $('.answerBis').css({'position': 'relative', 'top' : a});
      }
      if(Answer == 4){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
        $(".answerUser.Three").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Three").width() - 50;
        $(".answerUser.Three").css({'margin-left' : positionAfterResize});
        $(".answerUser.Four").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Four").width() - 50;
        $(".answerUser.Four").css({'margin-left' : positionAfterResize});
        answerPlace('.messageTom.Six');
        $('.answerBis').css({'position': 'relative', 'top' : a});
      }
      if(Answer == 5){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
        $(".answerUser.Three").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Three").width() - 50;
        $(".answerUser.Three").css({'margin-left' : positionAfterResize});
        $(".answerUser.Four").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Four").width() - 50;
        $(".answerUser.Four").css({'margin-left' : positionAfterResize});
        $(".answerUser.Five").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Five").width() - 50;
        $(".answerUser.Five").css({'margin-left' : positionAfterResize});
      }        
      if(Answer == 6){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
        $(".answerUser.Three").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Three").width() - 50;
        $(".answerUser.Three").css({'margin-left' : positionAfterResize});
        $(".answerUser.Four").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Four").width() - 50;
        $(".answerUser.Four").css({'margin-left' : positionAfterResize});
        $(".answerUser.Five").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Five").width() - 50;
        $(".answerUser.Five").css({'margin-left' : positionAfterResize});
        $(".answerUser.Six").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Six").width() - 50;
        $(".answerUser.Six").css({'margin-left' : positionAfterResize});
      }        
      if(Answer == 7){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
        $(".answerUser.Three").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Three").width() - 50;
        $(".answerUser.Three").css({'margin-left' : positionAfterResize});
        $(".answerUser.Four").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Four").width() - 50;
        $(".answerUser.Four").css({'margin-left' : positionAfterResize});
        $(".answerUser.Five").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Five").width() - 50;
        $(".answerUser.Five").css({'margin-left' : positionAfterResize});
        $(".answerUser.Six").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Six").width() - 50;
        $(".answerUser.Six").css({'margin-left' : positionAfterResize});
        $(".answerUser.Seven").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Seven").width() - 50;
        $(".answerUser.Seven").css({'margin-left' : positionAfterResize});
      }
      if(Answer == 8){
        $(".answerUser.One").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.One").width() - 50;
        $(".answerUser.One").css({'margin-left' : positionAfterResize});
        $(".answerUser.Two").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Two").width() - 50;
        $(".answerUser.Two").css({'margin-left' : positionAfterResize});
        $(".answerUser.Three").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Three").width() - 50;
        $(".answerUser.Three").css({'margin-left' : positionAfterResize});
        $(".answerUser.Four").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Four").width() - 50;
        $(".answerUser.Four").css({'margin-left' : positionAfterResize});
        $(".answerUser.Five").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Five").width() - 50;
        $(".answerUser.Five").css({'margin-left' : positionAfterResize});
        $(".answerUser.Six").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Six").width() - 50;
        $(".answerUser.Six").css({'margin-left' : positionAfterResize});
        $(".answerUser.Seven").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Seven").width() - 50;
        $(".answerUser.Seven").css({'margin-left' : positionAfterResize});
        $(".answerUser.Eight").css({'margin-left' : '0px'});
        var positionAfterResize = $('.dialog').width() - $(".answerUser.Eight").width() - 50;
        $(".answerUser.Eight").css({'margin-left' : positionAfterResize});
      }
    }, 10);
  });
  /*Smooth Scroll*/
  $('a[href^="#"]').click(function(){
    var the_id = $(this).attr("href");
    $('html, body').animate({
      scrollTop:$(the_id).offset().top
    }, 1400, 'easeInSine', function () {});
    return false;
  });
  /*Resize de la fenêtre, le slider ne s'affiche pas*/
  $( window ).resize(function() {
    if($(window).width() < 760){
      $( ".arrow-left, .arrow-right, .slider-num" ).css({'display' : 'none'});
      $( ".download" ).css({'display' : 'none'});
    }else{
      $( ".arrow-left, .arrow-right, .slider-num" ).css({'display' : 'block'});
      $( ".download, .arrow-right, .slider-num" ).css({'display' : 'block'});    }
  });
  if($(window).width() < 760){
    $( ".arrow-left, .arrow-right, .slider-num" ).css({'display' : 'none'});
    $( ".download" ).css({'display' : 'none'});
  }else{
    $( ".arrow-left, .arrow-right, .slider-num" ).css({'display' : 'block'});
     $( ".download" ).css({'display' : 'block'});
  }
  $('.container-conversation').css({'height' : '100vh'});
  $('.container-conversation').append('<div class="dialog"></div>');
    setTimeout(function(){
      waypoint();
      $('.dialog').append("<div class='messageTom margin One messageTomAnim'>Hey, je suis Tom !</div>");
      setTimeout(function(){
          $('.dialog').append("<div class='messageTom Two messageTomAnim'>Votre compagnon mobile et guide touristique.</div>");
          setTimeout(function(){
             $('.dialog').append("<div class='messageTom Three messageTomAnim'>Voulez-vous que je vous fasse découvrir la Belgique de manière insolite ?</div>");
              bigWindowScroll('.messageTom.Three');
                setTimeout(function(){
                  $('.dialog').append("<div class='answer'></div>");
                  var positionAnswer = ($(window).height()) - ($('.dialog').height()) - 250;
                  if (positionAnswer<0){
                    positionAnswer = ($(window).height()) - ($('.dialog').height()) - 150;
                    windowScroll(120);
                  }
                  $('.answer').css({'position': 'relative', 'top' : positionAnswer});
                  $('.answer').append("<div class='answerUser One answerUserAnim' onclick='One();'>Oui, super !  &#128077; </div>");
                  $('.answer').append("<div class='answerUser Two answerUserAnimDelay' onclick='Two();'>En savoir plus ? &#129300;</div>");
                },1500);
          }, 1500);
      }, 700);  
    },500);
});
// Formulaire pour devenir beta user
$("#contact").submit(function(event){
$('.loading').css({'opacity':'1'});
  var email = $("#email").val();
  var message    = $("#message").val();
if (email == "") {
  $("#msg_email").html('<p>Hey, il faut renseigner votre adresse mail si vous voulez un accès à la version Beta...</p>');
  $('.loading').css({'opacity':'0'});
}else {
  if(message == ''){
    $.ajax({
      type : "POST",
      url: $(this).attr("action"),
      data: $(this).serialize(),
      success : function(msg) {
        if(msg == 1){
          $("#msg_email").html("<p>Hey, votre adresse email n'est pas valide...</p>");
          $('.loading').css({'opacity':'0'});
        }
        if(msg == 2){
          $('.submitBtn').addClass('submitBtnAnim');
          setTimeout(function(){
            $('#msg_email').html('');
            $('.submitBtn').attr("value", "Accéder à la version beta");
            $('.submitBtn').attr("onclick", "redirection()");
            $('.submitBtn').attr("type", "button");
            $('.loading').css({'opacity':'0'});
          },400);
        }
        if(msg == 3){
          // $("#msg_email").html("<p>Il y a eut un problème avec l'envoi de votre message, veuillez remplir à nouveau le formulaire</p>");
        }
      },
      error: function() {
         $("#msg_email").html("<p>Le formulaire n'a pas fonctionné, vous pouvez recommencer ?</p>");
         $('.loading').css({'display':'none'});
      }
    });
  }else{
    $("#msg_email").html("<p>Vous êtes un spammeur !</p>");
    $('.loading').css({'display':'none'});
  }          
}
return false;
});
// Redirect to access beta app
function redirection(){
  window.location="http://movanoncem.be/tfe/juin/app/index.html";
}
// Slider for bubbles
function sliderNum(elmnt){
  if(slider1 == true && elmnt == 'recyclart'){
    $('.slider1').removeClass('comeFromLeft');
    $('.slider1').removeClass('comeFromRight');
    $('.slider2').removeClass('goToLeft');
    $('.slider2').removeClass('goToRight');
    $('.namur, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.recyclart').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider1').addClass('goToLeft');
    $('.slider2').addClass('comeFromRight');
    slider1 =false;
    slider2 = true;
    slider3 = false;
  }
  if(slider1 == true && elmnt == 'boerentoren'){
    $('.slider1').removeClass('comeFromRight');
    $('.slider1').removeClass('comeFromLeft');
    $('.slider3').removeClass('goToLeft');
    $('.slider3').removeClass('goToRight');
    $('.recyclart, .namur').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider1').addClass('goToRight');
    $('.slider3').addClass('comeFromLeft');
    slider1 = false;
    slider2 = false;
    slider3 = true;
  }
  if(slider2 == true && elmnt == 'boerentoren'){
    $('.slider2').removeClass('comeFromLeft');
    $('.slider2').removeClass('comeFromRight');
    $('.slider3').removeClass('goToLeft');
    $('.slider3').removeClass('goToRight');
    $('.namur, .recyclart').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider2').addClass('goToLeft');
    $('.slider3').addClass('comeFromRight');
    slider1 = false;
    slider2 = false;
    slider3 = true;
  }
   if(slider2 == true && elmnt == 'namur'){
    $('.slider2').removeClass('comeFromRight');
    $('.slider2').removeClass('comeFromLeft');
    $('.slider1').removeClass('goToLeft');
    $('.slider1').removeClass('goToRight');
    $('.recyclart, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.namur').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider2').addClass('goToRight');
    $('.slider1').addClass('comeFromLeft');
    slider1 = true;
    slider2 = false;
    slider3 = false;
  }
  if(slider3 == true && elmnt == 'namur'){
    $('.slider3').removeClass('comeFromLeft');
    $('.slider3').removeClass('comeFromRight');
    $('.slider1').removeClass('goToLeft');
    $('.slider1').removeClass('goToRight');
    $('.recyclart, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.namur').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider3').addClass('goToLeft');
    $('.slider1').addClass('comeFromRight');
    slider1 = true;
    slider2 = false;
    slider3 = false;
  }
  if(slider3 == true && elmnt == 'recyclart'){
    $('.slider3').removeClass('comeFromRight');
    $('.slider3').removeClass('comeFromLeft');
    $('.slider2').removeClass('goToLeft');
    $('.slider2').removeClass('goToRight');
    $('.namur, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.recyclart').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider3').addClass('goToRight');
    $('.slider2').addClass('comeFromLeft');
    slider1 = false;
    slider2 = true;
    slider3 = false;
  }
}
// Slide function To Right
function slidefunctionRight(){
  if(slider1 == true){
    $('.slider1').removeClass('comeFromLeft');
    $('.slider1').removeClass('comeFromRight');
    $('.slider2').removeClass('goToLeft');
    $('.slider2').removeClass('goToRight');
    $('.namur, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.recyclart').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider1').addClass('goToLeft');
    $('.slider2').addClass('comeFromRight');
    slider1 =false;
    slider2 = true;
    slider3 = false;
  }else if(slider2 == true){
    $('.slider2').removeClass('comeFromLeft');
    $('.slider2').removeClass('comeFromRight');
    $('.slider3').removeClass('goToLeft');
    $('.slider3').removeClass('goToRight');
    $('.namur, .recyclart').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider2').addClass('goToLeft');
    $('.slider3').addClass('comeFromRight');
    slider1 = false;
    slider2 = false;
    slider3 = true;
  }else if(slider3 == true){
    $('.slider3').removeClass('comeFromLeft');
    $('.slider3').removeClass('comeFromRight');
    $('.slider1').removeClass('goToLeft');
    $('.slider1').removeClass('goToRight');
    $('.recyclart, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.namur').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider3').addClass('goToLeft');
    $('.slider1').addClass('comeFromRight');
    slider1 = true;
    slider2 = false;
    slider3 = false;
  }
}
// Slide function to left
function slidefunctionLeft(){
  if(slider1 == true){
    $('.slider1').removeClass('comeFromRight');
    $('.slider1').removeClass('comeFromLeft');
    $('.slider3').removeClass('goToLeft');
    $('.slider3').removeClass('goToRight');
    $('.recyclart, .namur').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider1').addClass('goToRight');
    $('.slider3').addClass('comeFromLeft');
    slider1 = false;
    slider2 = false;
    slider3 = true;
  } else if(slider3 == true){
    $('.slider3').removeClass('comeFromRight');
    $('.slider3').removeClass('comeFromLeft');
    $('.slider2').removeClass('goToLeft');
    $('.slider2').removeClass('goToRight');
    $('.namur, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.recyclart').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider3').addClass('goToRight');
    $('.slider2').addClass('comeFromLeft');
    slider1 = false;
    slider2 = true;
    slider3 = false;
  }else if(slider2 == true){
    $('.slider2').removeClass('comeFromRight');
    $('.slider2').removeClass('comeFromLeft');
    $('.slider1').removeClass('goToLeft');
    $('.slider1').removeClass('goToRight');
    $('.recyclart, .boerentoren').css({"border" : "1px solid #6B6BDD","background-color":"#ffffff"});
    $('.namur').css({"border" : "1px solid #6B6BDD","background-color":"#6B6BDD"});
    $('.slider2').addClass('goToRight');
    $('.slider1').addClass('comeFromLeft');
    slider1 = true;
    slider2 = false;
    slider3 = false;
  }
}
// Hover de tom
$('.logo').mouseenter(function() { 
  compteur = compteur + 1;
  if(compteur == 1){
      $('.hello').html('Hello !');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur == 2){
      $('.hello').html('Salut !');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur == 3){
      $('.hello').html('Hey !');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur == 4){
      $('.hello').html('Moi c\'est Tom!');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  } else if(compteur == 5){
      $('.hello').html('On visite ensemble ?');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  } else if(compteur == 6){
      $('.hello').html('Allons y ! &#128077;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==7){
      $('.hello').html('Vous n\'êtes pas encore parti ? ');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==8){
      $('.hello').html('Allez allez, on va visiter ! &#128640; ');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==9){
      $('.hello').html('On y va ?');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==10){
      $('.hello').html('C\'est partiii &#128522;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==11){
      $('.hello').html('Rendez vous en ville !');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==16){
      $('.hello').html('Mais, vous êtes encore là ? &#128563;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==17){
      $('.hello').html('Vous n\'arrêtez jamais alors ? &#128519;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==18){
      $('.hello').html('Il faut aller visiter, je peux vous guider !');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==19){
      $('.hello').html('Rendez-vous en ville ! &#128526;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==25){  
      $('.hello').html('Vous n\'arretez vraiment jamais alors ? &#128513;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==26){
      $('.hello').html('Je vous attend en ville !');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }else if(compteur ==27){
      $('.hello').html('A tout de suite ! &#9995;');
      $('.hello').removeClass('helloanimEnd');
      $('.hello').addClass('helloanim');
  }
})
$('.logo').on('mouseleave', function(e) {
    $('.hello').removeClass('helloanim');
    $('.hello').addClass('helloanimEnd');
})
// Happy face Tom
$('.submitBtn').mouseenter(function(){
  $('.eyes').animate({opacity: '0'}, 250);
})
$('.submitBtn').on('mouseleave', function(e) {
     $('.eyes').animate({opacity: '1'}, 250);
})
// Hover de tom 2 'telchargez l'app et nous pourrons continuer de discuter
$('.logobis').mouseenter(function(){
    $('.download').removeClass('helloanimEnd');
    $('.download').addClass('helloanim');
})
$('.logobis').on('mouseleave', function(e) {
    $('.download').removeClass('helloanim');
    $('.download').addClass('helloanimEnd');
})
// Scroll to bottom
function scrollToBottom(){
  div_height = $(".container-conversation").height();
  div_offset = $(".container-conversation").offset().top;
  window_height = $(window).height();
  $('html,body').animate({
    scrollTop: div_offset-window_height+div_height
  },1000);
}
// Scroll si dialog est plus grand que hauteur de la fenêtre
function bigWindowScroll(elmnt){
  heightDialog = $('.dialog').height();
  heightContainer = $('.container-conversation').height();
  heightMessage = $(elmnt).height();
  if((heightDialog + heightMessage + 100) > heightContainer){
    setTimeout(function(){
    y = heightDialog + 200;
    $('.container-conversation').css({"height": y});
      scrollToBottom();
    },500)
  }
}
// Window scroll
function windowScroll(elmnt){
  heightContainer = ($('.container-conversation').height())+elmnt;
  $('.container-conversation').css({'height': heightContainer});
  scrollToBottom();
}
// Get position of container Answer
function getPosition(elmnt){
  positionFutureAnswer = ($('.dialog').width()) - (($(elmnt).width()) + 49);
  positionAnswer = $(elmnt).position();
  positionAnswer = positionAnswer.left + 20;
}
// Get position for the answer place
var a;
function answerPlace(elmnt){
    var offset = $(elmnt).offset();
    var positionLastElement = offset.top - $(document).scrollTop();
    var heightWindow = $(window).height();
    var heightElement = $(elmnt).height() + 20;
    a = heightWindow - positionLastElement - heightElement - 150;
    if (a<0){
      windowScroll(100);
      a = heightWindow - positionLastElement - heightElement - 30;
    }
    if(a > 300){
      a = 100;
    }
}
// Scroll for mobile nav
function goTo(elmnt){
    open = false;
     $(".nav-mobile > .menu-open").removeClass('openMenu');
      $(".nav-mobile > .menu-open").removeClass('closeMenu');
      $(".nav-mobile > .menu").toggleClass('open');
      $(".nav-mobile > .menu-open").addClass('closeMenu');
    setTimeout(function(){
      $('html, body').animate({scrollTop: $(elmnt).position().top }, 1400, 'easeInSine', function () {});
    },1000);
} 
// Scroll for non mobile map 
function letsGo(elmnt){
   $('html, body').animate({scrollTop: $(elmnt).position().top }, 1400, 'easeInSine', function () {});
}
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();
/*Première réponse*/
function One(){
    Answer = 1;  
    if(Cpt1 == false){
    getPosition('.answerUser.One');    
    $('.answer').css({'text-align': 'left'});
    $('.answerUser.One').css({'margin-left': positionAnswer});
    $(".answerUser.Two").css({'display' : 'none'});
    setTimeout(function(){
      $(".answer").animate({top: '0'}, 500);
      $(".answerUser.One").animate({'margin-left' : positionFutureAnswer}, 500);  
      $(".answerUser.One").hover(function(){
        $(".answerUser.One").css("background-color", "#6B6BDD;");
      }, function(){
        $(".answerUser.One").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
      });
      setTimeout(function(){
          windowScroll(50);
          $('.dialog').append("<div class='messageTom Four'>Laissez-moi vous guider !</div>");
          bigWindowScroll('.messageTom.Four');
          waypoint();
          setTimeout(function(){
            $('.messageTom.Four').addClass('messageTomAnim');
              setTimeout(function(){
                windowScroll(100);
                $('.dialog').append("<div class='messageTom Five'>En fonction de vos envies, je vous ferai découvrir les meilleurs endroits ! &#10024;</div>");
                bigWindowScroll('.messageTom.Five');
                waypoint();
                setTimeout(function(){
                  $('.messageTom.Five').addClass('messageTomAnim');
                    setTimeout(function(){
                      windowScroll(100);
                      $('.dialog').append("<div class='messageTom Six'>Saviez-vous qu'a Namur il est possible d'acheter des vêtements dans une église ?</div>");
                      bigWindowScroll('.messageTom.Six');
                      waypoint();
                      setTimeout(function(){
                        $('.messageTom.Six').addClass('messageTomAnim');
                        setTimeout(function(){
                          answerPlace('.messageTom.Six');
                          $('.dialog').append("<div class='answerBis'></div>");
                          $('.answerBis').css({'position': 'relative', 'top' : a});
                          $('.answerBis').append("<div class='answerUser Three answerUserAnim' onclick='Three();'>Racontes moi !  &#128077; </div>");
                          $('.answerBis').append("<div class='answerUser Four answerUserAnimDelay' onclick='Four();'>Une autre anecdote ?</div>");
                        },2000);
                      },1000);
                    },2500);
                },500);
              },1000);
          },500);
      },1000);
    },300);
    }
    Cpt1 = true;
}
function Two(){
   Answer = 2;  
  if(Cpt2 == false){
  getPosition('.answerUser.Two');    
  $('.answer').css({'text-align': 'left'});
  $('.answerUser.Two').css({'margin-left': positionAnswer});
  $(".answerUser.One").css({'display' : 'none'});
  $(".answerUser.One").hover(function(){
      $(".answerUser.Two").css("background-color", "#6B6BDD;");
    }, function(){
      $(".answerUser.Two").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
    });
  setTimeout(function(){
    $(".answer").animate({top: '0'}, 500);
    $(".answerUser.Two").animate({'margin-left' : positionFutureAnswer}, 500);  
    setTimeout(function(){
        $('.dialog').append("<div class='messageTom Four'>Laissez-moi vous guider !</div>");
        bigWindowScroll('.messageTom.Four');
        waypoint();
        setTimeout(function(){
          $('.messageTom.Four').addClass('messageTomAnim');
            setTimeout(function(){
              windowScroll(80);
              $('.dialog').append("<div class='messageTom Five'>En fonction de vos envies, je vous ferai découvrir les meilleurs endroits ! &#10024;</div>");
              bigWindowScroll('.messageTom.Five');
              waypoint();
              setTimeout(function(){
                $('.messageTom.Five').addClass('messageTomAnim');
                  setTimeout(function(){
                    windowScroll(80);
                    $('.dialog').append("<div class='messageTom Six'>Saviez-vous qu'a Namur il est possible d'acheter des vêtements dans une église ?</div>");
                    bigWindowScroll('.messageTom.Six');
                    waypoint();
                    setTimeout(function(){
                      $('.messageTom.Six').addClass('messageTomAnim');
                       setTimeout(function(){
                        answerPlace('.messageTom.Six');
                        $('.dialog').append("<div class='answerBis'></div>");
                        $('.answerBis').css({'position': 'relative', 'top' : a});
                        $('.answerBis').append("<div class='answerUser Three answerUserAnim' onclick='Three();'>Raconte-moi !  &#128077; </div>");
                        $('.answerBis').append("<div class='answerUser Four answerUserAnimDelay' onclick='Four();'>Une autre anecdote ?</div>");
                      },2000);
                    },1000);
                  },2500);
              },500);
            },1000);
        },500);
    },1000);
  },300);
  }
Cpt2 = true;
}

function Three(){
  if(Cpt3 == false){
  Answer = 3;    
  getPosition('.answerUser.Three');    
  $('.answerBis').css({'text-align': 'left'});
  $('.answerUser.Three').css({'margin-left': positionAnswer});
  $(".answerUser.Four").css({'display' : 'none'});
  $(".answerUser.Three").hover(function(){
  $(".answerUser.Three").css("background-color", "#6B6BDD;");}, function(){
    $(".answerUser.Three").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
  });
  setTimeout(function(){
    $(".answerBis").animate({top: '0'}, 500);
    $(".answerUser.Three").animate({'margin-left' : positionFutureAnswer}, 500);
           setTimeout(function(){
            windowScroll(230);
            $('.dialog').append("<div class='messageTom Seven img'><img class='messageImage' src='_images/namur.jpg' alt='Photo de l\'église Saint Jacques'></div>");
            waypoint();
            setTimeout(function(){
              $('.messageTom.Seven').addClass('messageTomAnim');
                setTimeout(function(){
                  windowScroll(130);
                  $('.dialog').append("<div class='messageTom Eight'>L'église Saint Jacques de Namur &#9962;</div>");
                  waypoint();
                  setTimeout(function(){
                    $('.messageTom.Eight').addClass('messageTomAnim');
                      setTimeout(function(){
                        windowScroll(130);
                        $('.dialog').append("<div class='messageTom Nine'>Désacralisée en 2013, elle accueille aujourd'hui le magasin de vêtements Scotch & Soda &#128085; &#128087;</div>");
                        bigWindowScroll('.messageTom.Nine');
                        waypoint();
                        setTimeout(function(){
                          $('.messageTom.Nine').addClass('messageTomAnim');
                           setTimeout(function(){
                            answerPlace('.messageTom.Nine');
                            $('.dialog').append("<div class='answerTres'></div>");
                            $('.answerTres').css({'position': 'relative', 'top' : a});
                            $('.answerTres').append("<div class='answerUser Five answerUserAnim' onclick='Five();'>En savoir plus !</div>");
                            $('.answerTres').append("<div class='answerUser Six answerUserAnimDelay' onclick='Six();'>Une autre anecdote ? &#128522;</div>");
                          },1000);
                        },1000);
                      },1000);
                  },800);
                },1000);
            },500);
        },1000);
  },300);
}
Cpt3 = true;
} 

function Four(){
  if(Cpt4 == false){
  Answer = 4;    
  getPosition('.answerUser.Four');    
  $('.answerBis').css({'text-align': 'left'});
  $('.answerUser.Four').css({'margin-left': positionAnswer});
  $(".answerUser.Three").css({'display' : 'none'});
  setTimeout(function(){
    $(".answerBis").animate({top: '0'}, 500);
    $(".answerUser.Four").animate({'margin-left' : positionFutureAnswer}, 500);
    $(".answerUser.Four").hover(function(){
      $(".answerUser.Four").css("background-color", "#6B6BDD;");
    }, function(){
      $(".answerUser.Four").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
    });
    setTimeout(function(){
            $('.dialog').append("<div class='messageTom Seven'>Oui, avec plaisir ! </div>");
            waypoint();
            setTimeout(function(){
              $('.messageTom.Seven').addClass('messageTomAnim');
                setTimeout(function(){
                  windowScroll(350);
                  $('.dialog').append("<div class='messageTom Eight img'><img class='messageImage' src='_images/boerentoren.jpg' alt='Photo du boerentoren'></div>");
                  bigWindowScroll('.messageTom.Eight');
                  waypoint();
                  setTimeout(function(){
                    $('.messageTom.Eight').addClass('messageTomAnim');
                      setTimeout(function(){
                        windowScroll(130);
                        $('.dialog').append("<div class='messageTom Nine'>Voici l'immeuble 'Boerentoren' de Anvers, premier gratte-ciel construit sur le sol européen.</div>");
                        bigWindowScroll('.messageTom.Nine');
                        waypoint();
                        setTimeout(function(){
                          $('.messageTom.Nine').addClass('messageTomAnim');
                             setTimeout(function(){
                              windowScroll(130);
                              $('.dialog').append("<div class='messageTom Ten'>Actuellement, il mesure 93,75 mètres ! &#128563;</div>");
                              bigWindowScroll('.messageTom.Ten');
                              waypoint();
                              setTimeout(function(){
                                $('.messageTom.Ten').addClass('messageTomAnim');
                                   setTimeout(function(){
                                    answerPlace('.messageTom.Ten');
                                    $('.dialog').append("<div class='answerQuatro'></div>");
                                    $('.answerQuatro').css({'position': 'relative', 'top' : a});
                                    $('.answerQuatro').append("<div class='answerUser Seven answerUserAnim' onclick='Seven();'>En savoir plus ! &#128077; </div>");
                                    $('.answerQuatro').append("<div class='answerUser Eight answerUserAnimDelay' onclick='Eight();'>Une autre anecdote ?</div>");
                                  },1000); 
                              },1000);
                           },2000);
                        },800);
                      },2000);
                  },500);
                },1500);
            },1000);
        },1000);
  },300);
} 
Cpt4 = true;
} 

function Five(){
   if(Cpt5 == false){
    Answer = 5;   
   getPosition('.answerUser.Five');    
  $('.answerTres').css({'text-align': 'left'});
  $('.answerUser.Five').css({'margin-left': positionAnswer});
  $(".answerUser.Six").css({'display' : 'none'});
  setTimeout(function(){
    $(".answerTres").animate({top: '0'}, 500);
    $(".answerUser.Five").animate({'margin-left' : positionFutureAnswer}, 500); 
    $(".answerUser.Five").hover(function(){
      $(".answerUser.Five").css("background-color", "#6B6BDD;");
    }, function(){
      $(".answerUser.Five").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
    });
    setTimeout(function(){
            windowScroll(100);
            $('.dialog').append("<div class='messageTom Eleven'>Vous êtes curieux, j'adore ça ! &#128076;</div>");
            bigWindowScroll('.messageTom.Eleven');
            waypoint();
            setTimeout(function(){
              $('.messageTom.Eleven').addClass('messageTomAnim');
                setTimeout(function(){
                  windowScroll(80);
                  $('.dialog').append("<div class='messageTom Twelve'>J'aimerais pouvoir vous en dire plus ! </div>");
                  bigWindowScroll('.messageTom.Twelve');
                  waypoint();
                  setTimeout(function(){
                    $('.messageTom.Twelve').addClass('messageTomAnim');
                      setTimeout(function(){
                        windowScroll(130);
                        $('.dialog').append("<div class='messageTom Thirteen'>Apprenez en plus sur moi, ou téléchargez l’application et nous continueront à discuter &#128522;  </div>");
                        bigWindowScroll('.messageTom.Thirteen');
                        waypoint();
                        setTimeout(function(){
                          $('.messageTom.Thirteen').addClass('messageTomAnim');
                             setTimeout(function(){
                              answerPlace('.messageTom.Thirteen');
                              $('.dialog').append("<div class='answerCinco'></div>");
                              $('.answerCinco').css({'position': 'relative', 'top' : a});
                              $('.answerCinco').append("<div class='answerUser Nine answerUserAnim' onclick='letsGo(\"#container5\")'>Télécharger l'app</div>");
                              $('.answerCinco').append("<div class='answerUser Ten answerUserAnimDelay' onclick='letsGo(\"#container2\")'>En savoir plus !</div>");
                            },1300); 
                        },800);
                      },1300);
                  },500);
                },1300);
            },500);
        },1000);
  },300);
}
Cpt5=true;
}
function Six(){
   if(Cpt6 == false){
     Answer = 6;    
   getPosition('.answerUser.Six');    
  $('.answerTres').css({'text-align': 'left'});
  $('.answerUser.Six').css({'margin-left': positionAnswer});
  $(".answerUser.Five").css({'display' : 'none'});
  setTimeout(function(){
    $(".answerTres").animate({top: '0'}, 500);
    $(".answerUser.Six").animate({'margin-left' : positionFutureAnswer}, 500);
    $(".answerUser.Six").hover(function(){
      $(".answerUser.Six").css("background-color", "#6B6BDD;");
    }, function(){
      $(".answerUser.Six").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
    });
    setTimeout(function(){
            $('.dialog').append("<div class='messageTom Seven'>Oui, avec plaisir ! </div>");
            setTimeout(function(){
              $('.messageTom.Seven').addClass('messageTomAnim');
              waypoint();
                setTimeout(function(){
                  windowScroll(330);
                  $('.dialog').append("<div class='messageTom Eight img'><img class='messageImage' src='_images/boerentoren.jpg' alt='Photo du boerentoren'></div>");
                  bigWindowScroll('.messageTom.Eight');
                  waypoint();
                  setTimeout(function(){
                    $('.messageTom.Eight').addClass('messageTomAnim');
                      setTimeout(function(){
                        windowScroll(150);
                        $('.dialog').append("<div class='messageTom Nine'>Voici l'immeuble 'Boerentoren' de Anvers, premier gratte-ciel construit sur le sol européen.</div>");
                        bigWindowScroll('.messageTom.Nine');
                        waypoint();
                        setTimeout(function(){
                          $('.messageTom.Nine').addClass('messageTomAnim');
                             setTimeout(function(){
                              windowScroll(150);
                              $('.dialog').append("<div class='messageTom Ten'>Actuellement, il mesure 93,75 mètres ! &#128563;</div>");
                              bigWindowScroll('.messageTom.Ten');
                              waypoint();
                              setTimeout(function(){
                                $('.messageTom.Ten').addClass('messageTomAnim');
                                   setTimeout(function(){
                                    answerPlace('.messageTom.Ten');
                                    $('.dialog').append("<div class='answerQuatro'></div>");
                                    $('.answerQuatro').css({'position': 'relative', 'top' : a});
                                    $('.answerQuatro').append("<div class='answerUser Seven answerUserAnim' onclick='Seven();'>En savoir plus ! &#128077; </div>");
                                    $('.answerQuatro').append("<div class='answerUser Eight answerUserAnimDelay' onclick='Eight();'>Une autre anecdote ?</div>");
                                  },1000); 
                              },1000);
                           },2000);
                        },800);
                      },2000);
                  },500);
                },1500);
            },1000);
        },1000);
  },300);
}
Cpt6=true;
}



function Seven(){
   if(Cpt7 == false){
    Answer = 7;    
   getPosition('.answerUser.Seven');    
  $('.answerQuatro').css({'text-align': 'left'});
  $('.answerUser.Seven').css({'margin-left': positionAnswer});
  $(".answerUser.Eight").css({'display' : 'none'});
  setTimeout(function(){
    $(".answerQuatro").animate({top: '0'}, 500);
    $(".answerUser.Seven").animate({'margin-left' : positionFutureAnswer}, 500);
    $(".answerUser.Seven").hover(function(){
      $(".answerUser.Seven").css("background-color", "#6B6BDD;");
    }, function(){
      $(".answerUser.Seven").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
    });
    setTimeout(function(){
            windowScroll(100);
            $('.dialog').append("<div class='messageTom Eleven'>Vous êtes curieux, j'adore ça ! &#128076;</div>");
            bigWindowScroll('.messageTom.Eleven');
            waypoint();
            setTimeout(function(){
              $('.messageTom.Eleven').addClass('messageTomAnim');
                setTimeout(function(){
                  windowScroll(80);
                  $('.dialog').append("<div class='messageTom Twelve'>J'aimerais pouvoir vous en dire plus ! </div>");
                  bigWindowScroll('.messageTom.Twelve');
                  waypoint();
                  setTimeout(function(){
                    $('.messageTom.Twelve').addClass('messageTomAnim');
                      setTimeout(function(){
                        windowScroll(130);
                        $('.dialog').append("<div class='messageTom Thirteen'>Apprenez en plus sur moi, ou téléchargez l’application et nous continueront à discuter &#128522;</div>");
                        bigWindowScroll('.messageTom.Thirteen');
                        waypoint();
                        setTimeout(function(){
                          $('.messageTom.Thirteen').addClass('messageTomAnim');
                             setTimeout(function(){
                              answerPlace('.messageTom.Thirteen');
                              $('.dialog').append("<div class='answerCinco'></div>");
                              $('.answerCinco').css({'position': 'relative', 'top' : a});
                              $('.answerCinco').append("<div class='answerUser Nine answerUserAnim' onclick='letsGo(\"#container5\")'>Télécharger l'app</div>");
                              $('.answerCinco').append("<div class='answerUser Ten answerUserAnimDelay' onclick='letsGo(\"#container2\")'>En savoir plus !</div>");
                            },1300); 
                        },800);
                      },1300);
                  },500);
                },1300);
            },500);
        },1000);
  },300);
}
Cpt7 = true;
}
function Eight(){
   if(Cpt8 == false){
    Answer = 8;
   getPosition('.answerUser.Eight');    
  $('.answerQuatro').css({'text-align': 'left'});
  $('.answerUser.Eight').css({'margin-left': positionAnswer});
  $(".answerUser.Seven").css({'display' : 'none'});
  setTimeout(function(){
    $(".answerQuatro").animate({top: '0'}, 500);
    $(".answerUser.Eight").animate({'margin-left' : positionFutureAnswer}, 500);    
    $(".answerUser.Eight").hover(function(){
      $(".answerUser.Eight").css("background-color", "#6B6BDD;");
    }, function(){
      $(".answerUser.Eight").css({'box-shadow': '0 5px 20px -10px #FFFFFF', 'cursor' : 'auto'});
    });
    setTimeout(function(){
            windowScroll(100);
            $('.dialog').append("<div class='messageTom Eleven'>Vous aimez les anecdotes ? C'est super  &#128076;</div>");
            bigWindowScroll('.messageTom.Eleven');
            waypoint();
            setTimeout(function(){
              $('.messageTom.Eleven').addClass('messageTomAnim');
                setTimeout(function(){
                  windowScroll(80);
                  $('.dialog').append("<div class='messageTom Twelve'>J'aimerais pouvoir vous en dire plus ! </div>");
                  bigWindowScroll('.messageTom.Twelve');
                  waypoint();
                  setTimeout(function(){
                    $('.messageTom.Twelve').addClass('messageTomAnim');
                      setTimeout(function(){
                        windowScroll(130);
                        $('.dialog').append("<div class='messageTom Thirteen'>Apprenez en plus sur moi, ou téléchargez l’application et nous continueront à discuter &#128522;</div>");
                        bigWindowScroll('.messageTom.Thirteen');
                        waypoint();
                        setTimeout(function(){
                          $('.messageTom.Thirteen').addClass('messageTomAnim');
                             setTimeout(function(){
                              answerPlace('.messageTom.Thirteen');
                              $('.dialog').append("<div class='answerCinco'></div>");
                              $('.answerCinco').css({'position': 'relative', 'top' : a});
                              $('.answerCinco').append("<div class='answerUser Nine answerUserAnim' onclick='letsGo(\"#container5\")'>Télécharger l'app</div>");
                              $('.answerCinco').append("<div class='answerUser Ten answerUserAnimDelay' onclick='letsGo(\"#container2\")'>En savoir plus !</div>");
                            },1300); 
                        },800);
                      },1300);
                  },500);
                },1300);
            },500);
        },1000);
  },300);
}
Cpt8= true;
}










