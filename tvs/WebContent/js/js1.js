$(document).ready(function(){
	
	var validation_holder;
	 $("#form1_submit").click(function(){
	 var validation_holder = 0;
		var name = $("#name").val();
		var designation = $("#designation").val();
		var company = $("#company").val();
		var address = $("#address").val();
		var city =$("#city").val();
		var country =$("#country").val();
		var state =$("#state").val();
		var postcode = $("#postcode").val();
		var telephone 			= $("#telephone").val();
		var fax = $("#fax").val();
		var email 			= $("#email").val();
		var url = $("#url").val();
		var alpha = /^[a-zA-Z ]*$/;
		var postcode_regex=/^[0-9]{6,6}$/;
		var tele_regex		= /^[0-9]{4,12}$/; 
		var email_regex 	= /^[\w%_\-.\d]+@[\w.\-]+.[A-Za-z]{2,6}$/;
		var event = $("#event").val();
		var mobile 			= $("#mobile").val();
		var mobile_regex		= /^[0-9]{4,12}$/; // reg ex phone check
		var subtype      =  $("#or").val();
		var bgmonth  = $("#begmonth").val();
		var bsindia  = $("#de").val();
	    var radbut  = $('input[name=payment]:checked').val();
			//alert(radbut);
			if(subtype == "Select") {
			$("#val_subtype").html("Please select Subscription Type.").addClass('validate');
			validation_holder = 1;
			} 
			else{
			$("#val_subtype").html("");
			}
			if(bgmonth == "Select Month") {
				$("#val_bgmonth").html("Please select Month.").addClass('validate');
				validation_holder = 1;
				} 
				else{
				$("#val_bgmonth").html("");
				}
			if(bsindia == "Select") {
				$("#val_bsindia").html("Please select Amount.").addClass('validate');
				validation_holder = 1;
				} 
				else{
				$("#val_bsindia").html("");
				}
			if((radbut == "wiretransfer")||(radbut == "dd")) {
				//alert("ifcod");
				$("#val_radbut").html("");
				
				} 
				else{
					//alert("elsecod");
					$("#val_radbut").html("Please select Payment type.").addClass('validate');
					validation_holder = 1;
				}
		
		if(name == "") {
			$("#val_name").html("Please enter your name").addClass('validate');
			validation_holder = 1;
		}
		else{
		if(!alpha.test(name)) {
	
			$("#val_name").html("Enter Alphabets only.").addClass('validate');
			
			validation_holder = 1;
		} else {
			$("#val_name").html("");
			}
		}
		if(designation == "") {
			$("#val_designation").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else{
		if(!alpha.test(designation)) {
	
			$("#val_designation").html("Enter Alphabets only.").addClass('validate');
			
			validation_holder = 1;
		} else {
			$("#val_designation").html("");
			}
		}
		if(mobile == "") 
		{
			$("#val_mobile").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} 
		else 
		{
		if(!mobile_regex.test(mobile))
		{ // if invalid phone
				$("#val_mobile").html("Invalid Phone Number!").addClass('validate');
				validation_holder = 1;

			} 
			else 
			{
				$("#val_mobile").html("");
			}
		}
		if(company == "") {
			$("#val_company").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else{
		if(!alpha.test(company)) {
	
			$("#val_company").html("Enter Alphabets only.").addClass('validate');
			
			validation_holder = 1;
		} else {
			$("#val_company").html("");
			}
		}
		if(address == "") {
			$("#val_address").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else {
			$("#val_address").html("");
			}
		if(city == "") {
			$("#val_city").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else {
			$("#val_city").html("");
			}
					if(country == "") {
			$("#val_country").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else {
			$("#val_country").html("");
			}
			if(state == "") {
			$("#val_state").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else {
			$("#val_state").html("");
			}
		if(postcode == "") {
			$("#val_postcode").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else{
		if(!postcode_regex.test(postcode)) {
	
			$("#val_postcode").html("Enter valid postal code.").addClass('validate');
			
			validation_holder = 1;
		} else {
			$("#val_postcode").html("");
			}
		}
		if(telephone == "") {
			$("#val_telephone").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else{
		if(!tele_regex.test(telephone)) {
	
			$("#val_telephone").html("Enter valid telephone number.").addClass('validate');
			
			validation_holder = 1;
		} else {
			$("#val_telephone").html("");
			}
		}
		
		if(fax == "") {
			$("#val_fax").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else{
		if(!tele_regex.test(fax)) {
	
			$("#val_fax").html("Enter valid fax number.").addClass('validate');
			
			validation_holder = 1;
		} else {
			$("#val_fax").html("");
			}
		}
		if(email == "") {
			$("#val_email").html("This field is required.").addClass('validate');
			validation_holder = 1;
		} else {
			if(!email_regex.test(email)){ // if invalid email
				$("#val_email").html("Invalid Email!").addClass('validate');
				validation_holder = 1;
			} else {
				$("#val_email").html("");
			}
		}
		if(url == "") {
			$("#val_url").html("This field is required.").addClass('validate');
			validation_holder = 1;
		}
		else {
			$("#val_url").html("");
			}
		if(validation_holder == 1) { // if have a field is blank, return false
			//$("p.validate_msg").slideDown("fast");
			return false;
		} 
		else
		{
		//alert("form submitted");
		validation_holder = 0; // else return true
		}
	 });
	});