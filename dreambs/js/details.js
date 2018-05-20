//chuxian
$('.smallpic').mouseover(function(){
	$('.smallscale').css('visibility','visible');
	$('.bigscale').css("visibility",'visible');
})
$('.bigscale').mouseover(function(){
	$('.smallscale').css('visibility','visible');
	$('.bigscale').css("visibility",'visible');
})
$('.bigscale').mouseout(function(){
	$('.smallscale').css('visibility','hidden');
	$('.bigscale').css("visibility",'hidden');
})
//xiaokuangdaxiao
$('.smallscale').css('width',$('.bigscale').width()*$('.smallpic').width()/$('.bigpic').width()+'px');
$('.smallscale').css('height',$('.bigscale').height()*$('.smallpic').height()/$('.bigpic').height()+'px');
//bili
	var bili=parseInt($('.bigpic').width()/$(".smallpic").width());
//yidong
	$(this).mousemove(function(ev){
		var ev=ev||window.event;
		var l=ev.pageX-$('.scale').offset().left-parseInt($('.smallscale').width()/2);
		var t=ev.pageY-$('.scale').offset().top-parseInt($('.smallscale').height()/2); 
		if(l<0){
					l=0;
				}else if(l>=$(".smallpic").width()-$('.smallscale').width() - 2){
					l=$(".smallpic").width()-$('.smallscale').width() - 2;
				}
				
				if(t<0){
					t=0;
				}else if(t>=$(".smallpic").height()-$('.smallscale').height() - 2){
					t=$(".smallpic").height()-$('.smallscale').height() - 2 ;
				}
				$('.smallscale').css('left',l+'px');
				$('.smallscale').css('top',t+'px');
				$('.bigpic').css("left",-bili*l+'px')
				$('.bigpic').css("top",-bili*t+'px')
			
	})
	$('.smallpic').mouseout(function(){
				$('.smallscale').css('visibility','hidden');
				$('.bigscale').css('visibility','hidden');
		})
		
	

//放大镜底部banner
;(function (){
	this.picul=$('.mainl_botpic');
	this.num=0;
	this.btnl=$('.mainl_botbtnl');
	this.btnr=$('.mainl_botbtnr');
	var that=this;
	this.btnr.on('click',function(){
			that.num=1;
			move();
		})
		$('.mainl_botbtnr').mouseover(function(){
		$('.mainl_botbtnr').css('opacity','1');
	})
			$('.mainl_botbtnr').mouseout(function(){
		$('.mainl_botbtnr').css('opacity','0.7');
	})
				$('.mainl_botbtnl').mouseover(function(){
		$('.mainl_botbtnl').css('opacity','1');
	})
			$('.mainl_botbtnl').mouseout(function(){
		$('.mainl_botbtnl').css('opacity','0.7');
	})
			this.btnl.on('click',function(){
				that.num=0;
				move();				
		})	
		move=function(){
		$('.mainl_botpic').animate({
				left:(num)*(-180),
			},200)
			}
})()
	
$('.mainl_bot').on('mouseover','.mainl_botpic li',function(){
	$(this).css('border-color',"#000000").siblings().css('border-color',"transparent");
	$('.smallpic img').eq($(this).index()).show().siblings().not('.smallscale').hide();
	$('.bigscale img').eq($(this).index()).show().siblings().hide();
	
})

//二维码
	$('.details_ewmdt').on('click',function(){
		$('.details_rwm_xiala').animate({
		height:'144px'
	},800)
	})
	
	$(".shou_btn").on('click',function(){
		$('.details_rwm_xiala').animate({
		height:'0px'
	},800)
	})


//右边
;(function (){	
	this.num1=1;
	this.btnl1=$('.mainr_btnl');
	this.btnr2=$('.mainr_btnr');
	var that=this;
	this.btnr2.on('click',function(){
			that.num1++;
			move1();
			if(num1==4){
				num1=3;
			}
			console.log(num1)
		})
		$('.mainr_btnr').mouseover(function(){
		$('.mainr_btnr').css('opacity','1');
	})
			$('.mainr_btnr').mouseout(function(){
		$('.mainr_btnr').css('opacity','0.7');
	})
				$('.mainr_btnl').mouseover(function(){
		$('.mainr_btnl').css('opacity','1');
	})
			$('.mainr_btnl').mouseout(function(){
		$('.mainr_btnl').css('opacity','0.7');
	})
			this.btnl1.on('click',function(){
					that.num1--;
				
				if(num1==0){
				num1=1;
			}
				move1();
		})	
		move1=function(){
		$('.details_rightbanner').animate({
				top:(num1-1)*(-588),
			},200)
			console.log(num1 + ".")
			}
		
})()

//	***尺码**数量*****************************************

	$('.size_chima a').on('click',function(){	
		$(this).addClass('selon').siblings().removeClass('selon');
	})
	
	var num=1;
	
	$('.num_shang').on('click',function(){
		num++;
		if(num==6){
			num=5;
		}
		$('.num_num').val(num);
		if(num==5){
			$('.xzyh1').show();
			$('.xzyh').hide();
		}
		if(num<5){
			$('.xzyh1').hide();
			$('.xzyh').show();
		}
		
	})
	$('.num_xia').on('click',function(){
		num--;
		if(num==0){
			num=1;
		}
		if(num<5){
			$('.xzyh1').hide();
			$('.xzyh').show();
		}
		$('.num_num').val(num);
		
	})
//	$('.num_num').on('blur',function(){
//		if($('.num_num').val()>5){
//			
//		}
//		
//	})
	
//加入购物车**********************
	var sidarr=[];
	var numarr=[];
	
	function getcookievalue(){
		if(getCookie('cartsid')){
			sidarr=getCookie('cartsid').split(',');
		}
		if(getCookie('cartnum')){
			numarr=getCookie('cartnum').split(',')
		}
	}
	//判断商品id是否存在sid
	$('.details_gwc').on('click',function(){
		var sid=$(this).parents().parents().parents().parents().find('.gwct1').attr('sid');
		getcookievalue();
//		alert($('.num_num').val())
		if($.inArray(sid,sidarr)!=-1){
			if(getCookie('cartnum')==''){
				var num=parseInt($('.num_num').val());
				numarr[$.inArray(sid,sidarr)]=num;
				addCookie('cartnum', numarr.toString(), 7);
				sidarr[$.inArray(sid,sidarr)]=sid;
				addCookie('cartsid', sidarr.toString(), 7);
			}else{
				var num=parseInt(numarr[$.inArray(sid,sidarr)])+parseInt($('.num_num').val());
				numarr[$.inArray(sid,sidarr)]=num;
				addCookie('cartnum', numarr.toString(), 7);
			}
		}else{
			sidarr.push(sid);
        			addCookie('cartsid', sidarr.toString(), 7);
        			numarr.push($('.num_num').val());
        			addCookie('cartnum', numarr.toString(), 7);
        			alert($('#count').val());
		}
	});
	