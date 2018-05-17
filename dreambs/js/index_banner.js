$('.index_xyd li').mouseover(function(){
	$(this).addClass('white').siblings().removeClass('white');
	$('.banner img').eq($(this).index()).show()
	$('.banner img').eq($(this).index()).siblings().not('.index_xyd').hide();
})



//每周上新
;(function (){
	this.picul=$('.mzsx_tab');
	this.piclist=$('.mzsx_tab li')
	this.num=0;
	this.liwidth=this.piclist.eq(0).width();
	this.btnl=$('.mzsx_left');
	this.btnr=$('.mzsx_right');
	var that=this;
	var $firstpic=this.piclist.first().clone()
	var $lastpic=this.piclist.last().clone();
	this.picul.append($firstpic);
	this.picul.prepend($lastpic);
	this.piclist=$('.mzsx_tab li');
	this.picul.width(this.liwidth*this.piclist.length).css('left',-this.liwidth);
	this.btnr.on('click',function(){
			that.num++;
			move();
			if(num==6){
				num=0;
			}
			
		})
		$('.mzsx_right').mouseover(function(){
		$('.mzsx_right').css('opacity','1');
	})
			$('.mzsx_right').mouseout(function(){
		$('.mzsx_right').css('opacity','0.5');
	})
				$('.mzsx_left').mouseover(function(){
		$('.mzsx_left').css('opacity','1');
	})
			$('.mzsx_left').mouseout(function(){
		$('.mzsx_left').css('opacity','0.5');
	})
			this.btnl.on('click',function(){
				that.num--;
				move();
				if(num==-1){
				num=5;
			}
				
		})	

		move=function(){
		$('.mzsx_tab').animate({
				left:(num+1)*(-this.liwidth),
			},0)
			}
})()
	
			
		
//楼梯、、、、、、、、、、、、、、、、、、、、、、、、、
	var $louti=$('.loutinav');
	var $loutili=$('.loutinav ul li');
	var $louceng=$(' .louti');
	$(window).on('scroll',function(){
    			var $st=$(window).scrollTop();
    			if($st>=500){
    				$louti.show();
    			}else{
    				$louti.hide();
    			}  			
    		});	
    			$loutili.not('.last').on('click',function(){
    			var $top=$louceng.eq($(this).index()-1).offset().top;
    			$('html,body').animate({
    				scrollTop:$top
    			})
    		});
    		
    		$('.loutinav ul li.last').on('click',function(){
    			$('html,body').animate({
    				scrollTop:0
    			});
    		});
  
//subnav
 	 $(".hoversubnav").mouseover(function(){
 	 	$('.subnav').css('display','block')
 	 })
 	  $(".hoversubnav").mouseout(function(){
 	 	$('.subnav').css('display','none')
 	 })
 	   $('.subnav').mouseout(function(){
 	 	$(this).css('display','none')
 	 })
 	      $('.subnav').mouseover(function(){
 	 	$(this).css('display','block')
 	 })