//手机号/邮箱验证**********
var zcsjhreg=/^[1][3,4,5,7,8][0-9]{9}$|^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	$('.register_sjyx').on('blur',function(){
		if($('.register_sjyx').val()==''){
			$('.login_phoneerror').show().siblings('.login_phoneerror2').hide();
		}else if(zcsjhreg.test($('.register_sjyx').val())){
			$('.login_phoneerror').hide().siblings('.login_phoneerror2').hide();
		}else {
			$('.login_phoneerror2').show().siblings('.login_phoneerror').hide();
			
		}
	})
//密码验证**********************	
var zcspasswreg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
	$('.register_mimayz').on('blur',function(){
		if($('.register_mimayz').val()==''){
			
			$('.register_passworderror').show().siblings('.register_passworderror2').hide();
		}else if(zcspasswreg.test($('.register_mimayz').val())){
			$('.register_passworderror').hide().siblings('.register_passworderror2').hide();
		}else {
			$('.register_passworderror2').show().siblings('.register_passworderror').hide();
			
		}
	})
	
	$('.register_zcmimayz').on('blur',function(){
		if($('.register_zcmimayz').val()==''){
			
			$('.register_zcpassworderror').show().siblings('.register_zcpassworderror2').hide();
		}else if($('.register_zcmimayz').val()==($('.register_mimayz').val())){
			$('.register_zcpassworderror').hide().siblings('.register_zcpassworderror2').hide();
		}else {
			$('.register_zcpassworderror2').show().siblings('.register_zcpassworderror').hide();
			
		}
	})