//手机号/邮箱验证**********
/*var zcsjhreg=/^[1][3,4,5,7,8][0-9]{9}$|^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	$('.register_sjyx').on('blur',function(){
		if($('.register_sjyx').val()==''){
			$('.login_phoneerror').show().siblings('.login_phoneerror2').hide();
		}else if(zcsjhreg.test($('.register_sjyx').val())){
			$('.login_phoneerror').hide().siblings('.login_phoneerror2').hide();
		}else {
			$('.login_phoneerror2').show().siblings('.login_phoneerror').hide();
			
		}
	})*/
	var bstop=true;
	var zcsjhreg=/^[1][3,4,5,7,8][0-9]{9}$|^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
	$('.register_sjyx').on('blur',function(){
		var sjyx=$(this).val();
		if(sjyx!=''){
			if(zcsjhreg.test(sjyx)){
				$('.login_phoneerror').hide().siblings('.login_phoneerror2').hide();
				//传后端验证
				$.ajax({
					type:'post',
					url:"http://127.0.0.1/dreambs/php/register.php",
					data:{
						name:sjyx
					},
					success:function(d){
						if(d){
							$(".register_yiyou").show();
							bstop=true;
						}else{
							$(".register_yiyou").hide();
							bstop=false;
						}
					}
				})
			}else{
				$('.login_phoneerror2').show().siblings('.login_phoneerror').hide();
				bstop=true;
			}
		}else{
			$('.login_phoneerror').show().siblings('.login_phoneerror2').hide();
			bstop=true;
		}
	})
///**验证不通过不跳
	$('form').on('submit',function(){
					if(bstop){
						return false;
					}
				});
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


//**********************
	
	
	
	
		