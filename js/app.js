console.log(' Le Fichier "app.js" est bien chargé ');

(function($) {



	/**
	 * Loader de page
	 */
	$.pageLoader = function() {
		// Selection des images en src="
		var $elements = $('body').find('img[src]');
		// Selection des images en background-image
		$('body [style]').each(function() {
			var src = $(this).css('background-image').replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
			if(src && src != 'none') {
				$elements = $elements.add($('<img src="' + src + '"/>'));
			}
		});



		var $chargement = $('#chargement');
		var $chargementInfos = $('#chargement-infos');
		var elementsCharges = 0;
		var dureeMs = 1000;

		function animateStep(now, fx) {
			$chargementInfos.text(parseInt(now)+'%');
		}

		function chargementEnCours() {
			var pourcentage = 0;
			if($elements.length) {
				pourcentage = parseInt((elementsCharges / $elements.length) * 100);
			}

			// Affichage du pourcentage
			$chargementInfos
				.stop() // stop les anciennes animations
				.animate({width:pourcentage + '%'}, dureeMs);
			$chargement
				.stop() // stop les anciennes animations
				.animate({pourcentage:pourcentage}, {
					duration: dureeMs,
					step: animateStep
				});
		}

		function chargementTermine() {
			var pourcentage = 100;

			// Affichage du pourcentage
			$chargementInfos
				.stop() // stop les anciennes animations
				.animate({width:pourcentage + '%'}, (dureeMs / 2));
			$chargement
				.stop() // stop les anciennes animations
				.animate({pourcentage:pourcentage}, {
					duration: (dureeMs / 2),
					step: animateStep
				})
				// Disparition du chargement et affichage de la page
				.css({opacity: 1})
				.animate({opacity: 0}, function() {
					// La page est prete
					$chargement.css({display:'none'});
					$('#container')
						.css({
							opacity: 0,
							visibility:'visible'
						})
						.animate({opacity:1});
				});

		}

		// La page contient des elements permettant d'afficher une barre de progression
		if($elements.length) {
			chargementEnCours();

			$elements.load(function() {
				$(this).off('load');
				elementsCharges++;
				chargementEnCours();
			});
		}

		$(window).load(function() {
			// La page est integralement chargee
			chargementTermine();
		});

	};



})(jQuery);




	$(document).ready(function(){
		$(function(){

			$(window).scroll(function(){
				if ($(this).scrollTop() > 400){
					$('#img1').fadeIn();
					$('#textpres').fadeIn();
				}else{
					$('#img1').fadeOut();
					$('#textpres').fadeOut();


				}{

				}
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 200){
					$('#contain').css({margin:0});

				}
				if ($(this).scrollTop() > 1100){
					$('.esd').fadeIn();

				}else{
					$('#contain').css({margin:-50});
					$('#body').css({margin:50});
					$('.esd').fadeOut();


				}{


				}
			});




			$(window).scroll(function(){
				if ($(this).scrollTop() > 500){
					$('#etudetitre').css({height: 135});

				}else{
					$('#etudetitre').css({height: 0});


				}{


				}
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 1300){
					$('#expetitre').css({height: 160});

				}else{
					$('#expetitre').css({height: 00});


				}{


				}
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 0){
					$('.contain').css({margin:50});
					$('.barhaut').css({height:50});
					$('.bottombardesou').css({height:50});




				}else{
					$('.contain').css({margin:0});
					$('.barhaut').css({height:0});
					$('.bottombardesou').css({height:0});




				}{


				}
			});



			$(window).scroll(function(){
				if ($(this).scrollTop() > 1800){
					$('.egame').fadeIn();

				}else{
					$('.egame').fadeOut();


				}{


				}
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 1300){
					$('.conde').fadeIn();

				}else{
					$('.conde').fadeOut();


				}{


				}
			});
			$(window).scroll(function(){
				if ($(this).scrollTop() > 2500){
					$('.Unicacces').fadeIn();

				}else{
					$('.Unicacces').fadeOut();


				}{


				}
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 2600){
					$('.militaire').fadeIn();

				}else{
					$('.militaire').fadeOut();


				}{


				}
			});

			$(window).scroll(function(){
				if ($(this).scrollTop() > 4500){
					$('#footer').css({height:700});

				}else{
					$('#footer').css({height:0});


				}{


				}
			});


			














		});



	})

	jQuery(document).ready(function ($) {

		function animleft() {
			var anim = $('.anim');
			anim.animate({width: '80%' , 'margin-right' : '20%'}, "fast");
			anim.animate({width: '50%' , 'margin-left' : '50%' , 'margin-right' : '0%'}, "fast");
			anim.animate({width: '0%' , 'margin-left' : '100%'}, "fast");
			anim.animate({width: '0%' , 'margin-right' : '100%' , 'margin-left' : '0%'}, "fast");
		};

		function animplus() {
			var anim = $('.pluss');
			anim.animate({transform: "rotate(45deg)"}, "fast");
		};

		function animright() {
			var anim = $('.anim');

			anim.animate({width: '80%' , 'margin-left' : '20%'}, "fast");
			anim.animate({width: '50%' , 'margin-right' : '50%'}, "fast");
			anim.animate({width: '0%' , 'margin-right' : '100%'}, "fast");
			anim.animate({width: '0%' , 'margin-left' : '100%' , 'margin-right' : '0%'}, "fast");

		};


		function animpagin() {
			var anim = $('.paginnu');

			anim.animate({'top': '100%'}, "fast");
			anim.animate({'top': '78%'}, "fast");


		};





		var slideCount = $('#slider ul li').length;
		var slideWidth = $('#slider ul li').width('100%');
		var slideHeight = $('#slider ul li').height('100%');
		var sliderUlWidth = slideCount * slideWidth;



		$('#slider').css({ width: slideWidth, height: slideHeight });

		$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

	    $('#slider ul li:last-child').prependTo('#slider ul');






	    function moveLeft() {

	        $('#slider ul').animate({
	            left: + slideWidth
	        }, 650, function () {

	            $('#slider ul li:last-child').prependTo('#slider ul');
	            $('#slider ul').css('left', '');

	        });
	    };

	    function moveRight() {

	        $('#slider ul').animate({
	            left: - slideWidth
	        }, 650, function () {

	            $('#slider ul li:first-child').appendTo('#slider ul');
	            $('#slider ul').css('left', '');


	        });
	    };

	    $('a.control_prev').click(function () {

					animleft();
					moveLeft();
					animtitre();
					animpagin();

	    });

	    $('a.control_next').click(function () {
					animright();
					moveRight();
					animtitre();
					animpagin();





					});














					// setInterval(moveRight,10000);
					// setInterval(animright,10000);

	    });
			$(document).ready(function(){
    $(".p").click(function(){
        $(".contain").toggleClass("open", 1000, "easeOutSine");

    });

		document.body.addEventListener('click',function(){
			if(".contain.open"){
				document.body.classList.remove('open', 1000, "easeOutSine")

			}

		})



});

$(document).ready(function(){
$(".p").click(function(){
	$(".p").toggleClass("rotate", 1000, "easeOutSine");

});

document.body.addEventListener('click',function(){
if(".p.rotate"){
	document.body.classList.remove('rotate')

}

})



});









			$(document).ready(function(){
    $(".p").click(function(){
        $(".pluss").toggleClass("plus", 1000, "easeOutSine");


    });

		document.body.addEventListener('click',function(){


		})



});

$(document).ready(function(){
$(".p").click(function(){
	$(".texte").toggleClass("open", 1000, "easeOutSine");


});

document.body.addEventListener('click',function(){
if(".texte.open"){
	document.body.classList.remove('open')


}

})



});


$(document).ready(function(){
$(".img1").click(function(){
	$(".img1").toggleClass("open", 1000, "easeOutSine");
	$(".1").toggleClass("open", 1000, "easeOutSine");
});

$(".img2").click(function(){
	$(".img2").toggleClass("open", 1000, "easeOutSine");
	$(".2").toggleClass("open", 1000, "easeOutSine");
});

$(".img3").click(function(){
	$(".img3").toggleClass("open", 1000, "easeOutSine");
	$(".3").toggleClass("open", 1000, "easeOutSine");
});

$(".img4").click(function(){
	$(".img4").toggleClass("open", 1000, "easeOutSine");
	$(".4").toggleClass("open", 1000, "easeOutSine");
});

$(".img5").click(function(){
	$(".img5").toggleClass("open", 1000, "easeOutSine");
	$(".5").toggleClass("open", 1000, "easeOutSine");
});

$(".img6").click(function(){
	$(".img6").toggleClass("open", 1000, "easeOutSine");
	$(".6").toggleClass("open", 1000, "easeOutSine");
});

$(".img7").click(function(){
	$(".img7").toggleClass("open", 1000, "easeOutSine");
	$(".7").toggleClass("open", 1000, "easeOutSine");
});

$(".img8").click(function(){
	$(".img8").toggleClass("open", 1000, "easeOutSine");
	$(".8").toggleClass("open", 1000, "easeOutSine");
});

$(".img9").click(function(){
	$(".img9").toggleClass("open", 1000, "easeOutSine");
	$(".9").toggleClass("open", 1000, "easeOutSine");
});

document.body.addEventListener('click',function(){
if(".img.open"){
	document.body.classList.remove('open')


}

})



});









$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });

});




















//
// (function () {
//
// 	// test vague
// 	//let path = document.querySelector('#wave path')
// 	//let from = path.getAttribute('d')
// 	//let to = path.dataset['to']
// 	//dynamics.animate(path, {
// 	//	d: to
// 	//}, {
// 	//	type: dynamics.easeOut,
// 	//	duration: 500,
// 	//	friction: 68
// 	//})
//
//
//
//
//
//
//
//
//
// 	let sidebarOpened = false
// 	let button = document.querySelector('#burger')
// 	button.addEventListener('click', function (e){
// 		e.stopPropagation()
// 		e.preventDefault()
// 		document.body.classList.add('open')
//
// 		sidebarOpened = true
//
//
// 	})
//
 // 	document.body.addEventListener('click',function(){
 // 		if(sidebarOpened){
	// 		document.body.classList.remove('open')
	//
 // 		}
	//
	// })
//
// })()
//





// $(document).ready(function(){
//
// var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
//     $img = $('#carrousel .imgcar'), // on cible les images contenues dans le carrousel
//     indexImg = $img.length - 1, // on définit l'index du dernier élément
//     i = 0, // on initialise un compteur
//     $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
//
// $img.css('display', 'none'); // on cache les images
// $currentImg.css('display', 'block'); // on affiche seulement l'image courante
//
// $carrousel.append('<div class="controls"> <button class="prev">Precedent</button> <button class="next">Suivant</button> </div>');
//
// $('.next').click(function(){ // image suivante
//
//     i++; // on incrémente le compteur
//
//     if( i <= indexImg ){
//         $img.css('display', 'none'); // on cache les images
//         $currentImg = $img.eq(i); // on définit la nouvelle image
//         $currentImg.css('display', 'block'); // puis on l'affiche
//     }
//     else{
//         i = indexImg;
//     }
//
// });
//
// $('.prev').click(function(){ // image précédente
//
//     i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
//
//     if( i >= 0 ){
//         $img.css('display', 'none');
//         $currentImg = $img.eq(i);
//         $currentImg.css('display', 'block');
//     }
//     else{
//         i = 0;
//     }
//
// });
//
// function slideImg(){
//     setTimeout(function(){ // on utilise une fonction anonyme
//
//         if(i < indexImg){ // si le compteur est inférieur au dernier index
// 	    i++; // on l'incrémente
// 	}
// 	else{ // sinon, on le remet à 0 (première image)
// 	    i = 0;
// 	}
//
// 	$img.css('display', 'none');
//
// 	$currentImg = $img.eq(i);
// 	$currentImg.css('display', 'block');
//
// 	slideImg(); // on oublie pas de relancer la fonction à la fin
//
//     }, 7000); // on définit l'intervalle à 7000 millisecondes (7s)
// }
//
// slideImg(); // enfin, on lance la fonction une première fois
//
// });
