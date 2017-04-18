$(document).ready(function(){
	$("form").validate({
		debug: true,
		validClass: "success",
		errorElement: "em",
		errorClass: "error",
		errorPlacement: function(error, element){
			//$("<div class=\"errorDiv\"></div>").appendTo(element.parent());
			error.appendTo(element.parent());
		},		
		submitHandler: function(){
			$("div.error-info span").removeClass("error-info")
			                   .addClass("success-info")
			                   .html("Submitted!");
		},
		invalidHandler: function(event, validator){
            var errors = validator.numberOfInvalids();
            if(errors){
            	/*var message = errors ==1
            	? "You missed 1 field. It has been highlighed."
            	: "You missed "+ errors +" fields. They have been highlighed.";*/
            	var message = errors == 1
            	? "Please fix the problem indicated below."
            	: "Please fix the "+ errors +" problems indicated below."
            	$("div.error-info span").html(message);
            	$("div.error-info").show();
            } else {
            	$("div.error-info").hide();
            }
		},
		rules: {
			email: {
				required: true,
				email: true
			},
			confirmEmail: {
				required: true,
				email: true,
				equalTo: "#email"
			},
			zipcode: {
				required: true,
				digits: true
			},
			password: {
				required: true,
				minlength: 5, 
			},
			confirmPassword: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			}
		},
		messages: {
			email: {
				required: "Please enter your email address",
				email: "please enter a valid email address"
			},
			confirmEmail: {
				required: "Please confirm your email address",
				email: "please enter a valid email address",
				equalTo: "Please enter the same email address as above"
			},
			zipcode: {
				required: "Please enter your zip code",
				digits: "Please enter only digits"
			},
			password: {
				required: "Please enter a password",
				minlength: "Your password must be at least 5 characters long"
			},
			confirmPassword: {
				required: "Please confirm your password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			}
		}
	});
    
   
})