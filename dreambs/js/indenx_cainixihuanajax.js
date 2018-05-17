	
;(function(){
	$.ajax({
		url:'http://127.0.0.1/dreambs/php/cainixihuan.php',
		type:'get',
		dataType:'json'
	}).done(function(d){
		var $cnxh_pics=$(".cnxh_pics");
		var $html='';
		$.each(d,function(index,value){
			$html+=`
					<a href="#" style="color:#000;">
					<li sid=${value.sid}>
					<img src=${value.url} alt=''/>
					<p>${value.name}</p>
					<span style='font-size:20px;font-weight:500;color:red;font-family: microsoft yahei;'>${value.price}</span>
					<span style='font-size:11px;margin:0; text-decoration: line-through;'>${value.oldprice}</span>
					</a>
					`;
		})
		$cnxh_pics.append($html);
	})
})

();
// ////banner
	
;(function(){
	$.ajax({
		url:'http://127.0.0.1/dreambs/php/index_banner.php?__hbt=1526390664731',
		type:'get',
		dataType:'json'
	}).done(function(d){
		var $index_banner=$(".banner");
		var $html='';
		$.each(d,function(index,value){
			$html+=`
					
					<img src=${value.url} alt=''/>
					
					`;
		})
		$index_banner.append($html);
	})
})

();

//二级导航

;(function(){
	$.ajax({
		url:'http://127.0.0.1/dreambs/php/subnav1.php?__hbt=1526390301894',
		type:'get',
		dataType:'json'
	}).done(function(d){
		var $subnav1=$(".kuang h4");
		var $html='';
		$.each(d,function(index,value){
			$html+=`
					<a href="#">${value.z1}</a>
					<a href="#">${value.z2}</a>
					<a href="#">${value.z3}</a>
					<a href="#">${value.z4}</a>
					<a href="#">${value.z5}</a>
					<a href="#">${value.z6}</a>
					`;
		})
		$subnav1.append($html);
	})
})

();
///二级导航2
;(function(){
	$.ajax({
		url:'http://127.0.0.1/dreambs/php/subnav1.php?__hbt=1526390301894',
		type:'get',
		dataType:'json'
	}).done(function(d){
		var $subnav2=$(".five h4");
		var $html='';
		$.each(d,function(index,value){
			$html+=`
					<a href="#">${value.z1}</a>
					<a href="#">${value.z2}</a>
					<a href="#">${value.z3}</a>
					<a href="#">${value.z4}</a>
					<a href="#">${value.z5}</a>
					<a href="#">${value.z6}</a>
					`;
		})
		$subnav2.append($html);
	})
})

();