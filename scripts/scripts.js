//code for mobile navigation
function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("circle").classList.toggle("change-circle");
}

$(function(){
    if($('body').is('.index')){
        //code for countdown on homepage
        // code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown
        var countDownDate = new Date("Feb 11, 2020 23:59:59").getTime();
        var x = setInterval(function() {
          var now = new Date().getTime();
          var distance = countDownDate - now;

          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

          if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
          }
        }, 1000);
  }
});

    /*code from https://stackoverflow.com/questions/2842368/how-to-place-last-div-into-right-top-corner-of-parent-div-css*/
    //code for FAQs on about page
    $(document).ready(function() {

	$('.faq-question').click(function() {

		if ($(this).parent().is('.open')){
			$(this).closest('.faq').find('.faq-answer-container').animate({'height':'0'},500);
			$(this).closest('.faq').removeClass('open');

			}else{
				var newHeight =$(this).closest('.faq').find('.faq-answer').height() +'px';
				$(this).closest('.faq').find('.faq-answer-container').animate({'height':newHeight},500);
				$(this).closest('.faq').addClass('open');
			}
	});
});

$(document).ready(function () {

    //code for form on contact page
    // when form is submitted
    $("#contact").on("submit", function() {

        var valid = true;

        if ($("#name").prop("validity").valid){
            $("#name_error").addClass("hidden");
        } else {
            $("#name_error").removeClass("hidden");
            valid = false;
        };

        //check if email is valid
        if ( $("#email").prop("validity").valid ) {
            $("#email_error").addClass("hidden");
        } else {
            $("#email_error").removeClass("hidden");
            valid = false;
        };

        //check if message contains text
        if ( $("#message").prop("validity").valid ) {
                $("#message_error").addClass("hidden");
        } else {
            $("#message_error").removeClass("hidden");
            valid = false;
        };

        //only submit the form if all criteria is met
        return valid;

    });

    //followed code on info 1300 github
    // code for photo gallery on statistics homepage
    $("#next").on("click", function(){
        if ( $("#gallery-gender").is(":visible") ) {
            $("#gallery-gender").addClass("hidden");
            $("#gallery-colleges").removeClass("hidden");
        } else if ( $("#gallery-colleges").is(":visible") ) {
            $("#gallery-colleges").addClass("hidden");
            $("#gallery-year").removeClass("hidden");
        } else if ( $("#gallery-year").is(":visible") ) {
            $("#gallery-year").addClass("hidden");
            $("#gallery-race").removeClass("hidden");
        } else if ( $("#gallery-race").is(":visible") ) {
            $("#gallery-race").addClass("hidden");
            $("#gallery-gender").removeClass("hidden");
        }
    });

    $("#prev").on("click", function(){
      if ( $("#gallery-gender").is(":visible") ) {
          $("#gallery-gender").addClass("hidden");
          $("#gallery-colleges").removeClass("hidden");
      } else if ( $("#gallery-colleges").is(":visible") ) {
          $("#gallery-colleges").addClass("hidden");
          $("#gallery-year").removeClass("hidden");
      } else if ( $("#gallery-year").is(":visible") ) {
          $("#gallery-year").addClass("hidden");
          $("#gallery-race").removeClass("hidden");
      } else if ( $("#gallery-race").is(":visible") ) {
          $("#gallery-race").addClass("hidden");
          $("#gallery-gender").removeClass("hidden");
      }
    });

    //followed code on info 1300 github
    //code for photo gallery on results page
    $("#next").on("click", function(){
        if ( $("#gallery-wheel").is(":visible") ) {
            $("#gallery-wheel").addClass("hidden");
            $("#gallery-skating").removeClass("hidden");
        } else if ( $("#gallery-skating").is(":visible") ) {
            $("#gallery-skating").addClass("hidden");
            $("#gallery-window").removeClass("hidden");
        } else if ( $("#gallery-window").is(":visible") ) {
            $("#gallery-window").addClass("hidden");
            $("#gallery-snowman").removeClass("hidden");
        } else if ( $("#gallery-snowman").is(":visible") ) {
            $("#gallery-snowman").addClass("hidden");
            $("#gallery-wheel").removeClass("hidden");
        }
    });

    $("#prev").on("click", function(){

        if ( $("#gallery-wheel").is(":visible") ) {
            $("#gallery-wheel").addClass("hidden");
            $("#gallery-snowman").removeClass("hidden");
        } else if ( $("#gallery-snowman").is(":visible") ) {
            $("#gallery-snowman").addClass("hidden");
            $("#gallery-window").removeClass("hidden");
        } else if ( $("#gallery-window").is(":visible") ) {
            $("#gallery-window").addClass("hidden");
            $("#gallery-skating").removeClass("hidden");
        } else if ( $("#gallery-skating").is(":visible") ) {
            $("#gallery-skating").addClass("hidden");
            $("#gallery-wheel").removeClass("hidden");
        }
    });
});
