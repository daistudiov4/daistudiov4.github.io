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

		function animtitre() {
			var anim = $('.titre');

			anim.animate({'margin-top': '-4000px'}, "fast");
			anim.animate({'margin-top': '0px'}, "fast");


		};

		function animpagin() {
			var anim = $('.paginnu');

			anim.animate({'top': '100%'}, "fast");
			anim.animate({'top': '78%'}, "fast");


		};





		var slideCount = $('#slider ul li').length;
		var slideWidth = $('.contain').width();
		var slideHeight = $('#slider ul li').height('100%');
		var sliderUlWidth = slideCount * slideWidth;



		$('#slider').css({ width: slideWidth, height: slideHeight });

		$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

	    $('#slider ul li:last-child').prependTo('#slider ul');


				// alert(slideCount);



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
					// setInterval(animtitre,10000);
	    });
// 			$(document).ready(function(){
//     $(".p").click(function(){
//         $(".contain").toggleClass("open", 1000, "easeOutSine");
//
//     });
//
// 		document.body.addEventListener('click',function(){
// 			if(".contain.open"){
// 				document.body.classList.remove('open', 1000, "easeOutSine")
//
// 			}
//
// 		})
// });

$(document).ready(function(){
$(".p").click(function(){
	$(".moitier").toggleClass("open", 1000, "easeOutSine");

});

document.body.addEventListener('click',function(){
if(".moitier.open"){
	document.body.classList.remove('open', 1000, "easeOutSine")

}

})
});

$(document).ready(function(){
$(".p").click(function(){
	$(".slid").toggleClass("slideee", 1000, "easeOutSine");

});

document.body.addEventListener('click',function(){
if(".slid.slideee"){
	document.body.classList.remove('slideee', 1000, "easeOutSine")

}

})
});

$(document).ready(function(){
    $(".control_next").click(function(){
        $(".contain").removeClass("open");
				$(".pluss").removeClass("plus");
				$(".texte").removeClass("open");
				$(".p").removeClass("rotate");
				$(".moitier").removeClass("open");
				$(".slid").removeClass("slideee");
    });
});

$(document).ready(function(){
    $(".control_prev").click(function(){
        $(".contain").removeClass("open");
				$(".pluss").removeClass("plus");
				$(".texte").removeClass("open");
				$(".p").removeClass("rotate");
				$(".moitier").removeClass("open");
				$(".slid").removeClass("slideee");
    });
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
        $(".pluss").toggleClass("plus", 1000, "swing");


    });



});


/* ]]> */

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
