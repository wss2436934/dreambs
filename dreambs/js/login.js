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

var ptsjhreg=/^[1][3,4,5,7,8][0-9]{9}$|^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
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

//**验证账号密码匹配************
	function addCookie(key,value,day){
		var date=new Date();
		date.setDate(date.getDate()+day);
		document.cookie=key+'='+encodeURI(value)+';expires='+date;
	}
	$('.login_loginbtn').on('click',function(){
	var $username=$('.ptsjh').val();
	var $password=$('.ptpassword').val();
	if($username==''|$password==''){
		$('.qsrzhmm').show();
		$('.yhmmabzq').hide();
	}else{
		$.ajax({
		type:'post',
		url:'http://127.0.0.1/dreambs/php/login.php',
		data:{
			name:$username,
			pass:$password
		},
		success:function(data){
			if(!data){
				$('.yhmmabzq').show();
				$('#password').val('');
			}else{
				addCookie('UserName',$username,7);
				$('.yhmmabzq').hide();
				location.href='http://127.0.0.1/dreambs/index.html';
			}
		}
	})
		
	}
	
});
$('.login_loginbtn').on('blur',function(){
			$('.yhmmabzq').hide();
			$('.qsrzhmm').hide();
		
		})





















