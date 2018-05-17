;(function(){	
//切换******************************************************
$('.login_generallogin').on('click',function(){
	$('.login_main_right').eq(0).addClass('login_main_rightactive');
	$('.login_main_right').eq(1).removeClass('login_main_rightactive');
	$('.login_main_right').eq(2).removeClass('login_main_rightactive');	
})
$('.login_nopasswordlogin').on('click',function(){
	$('.login_main_right').eq(0).removeClass('login_main_rightactive');
	$('.login_main_right').eq(1).removeClass('login_main_rightactive');
	$('.login_main_right').eq(2).addClass('login_main_rightactive');
	$('.login_yzm').css('display','block')
})
$('.login_erweima').on('click',function(){
	$('.login_main_right').eq(0).removeClass('login_main_rightactive');
	$('.login_main_right').eq(1).addClass('login_main_rightactive');
	$('.login_main_right').eq(2).removeClass('login_main_rightactive');
})
$('.login_main_ewmtopleft ').on('click',function(){
	$('.login_main_right').eq(0).addClass('login_main_rightactive');
	$('.login_main_right').eq(1).removeClass('login_main_rightactive');
	$('.login_main_right').eq(2).removeClass('login_main_rightactive');
})
$('.login_main_ewmtoplright').on('click',function(){
	$('.login_main_right').eq(0).removeClass('login_main_rightactive');
	$('.login_main_right').eq(1).removeClass('login_main_rightactive');
	$('.login_main_right').eq(2).addClass('login_main_rightactive');
})		

//验证**********************

var ptsjhreg=/^[1][3,4,5,7,8][0-9]{9}$/;
	$('.ptsjh').on('blur',function(){
		if($('.ptsjh').val()==''){
			$('.login_gou_ptsjh').hide();
		$('.login_nameerror').show().siblings('.login_nameerror2').hide();
		}else if(ptsjhreg.test($('.ptsjh').val())){
			$('.login_gou_ptsjh').show();
			$('.login_nameerror').hide().siblings('.login_nameerror2').hide();
		}else {
			$('.login_nameerror2').show().siblings('.login_nameerror').hide();
			$('.login_gou_ptsjh').hide();
		}
	})
	
$('.ptpassword').on('blur',function(){
		if($('.ptpassword').val()==''){
			$('.login_passworderror').show();
			$('.login_gou_ptpassword').hide();
			
		}else{
			$('.login_gou_ptpassword').show();
			$('.login_passworderror').hide();	
			}
})


})();






















