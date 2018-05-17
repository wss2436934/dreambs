
;(function(){
	$.ajax({
		url:'http://127.0.0.1/dreambs/php/details_mainl_bot.php?__hbt=1526440897302',
		type:'get',
		dataType:'json'
	}).done(function(d){
		var $mainl_botpic=$(".mainl_botpic");
		var $html='';
		$.each(d,function(index,value){
			$html+=`
					<li sid=${value.sid}>
					<img src=${value.url} alt=''/>
					</li>
					`;
		})
		$mainl_botpic.append($html);
	})
})

();

//右边
;(function(){
	$.ajax({
		url:'http://127.0.0.1/dreambs/php/details_rightbanner.php?__hbt=1526459955626',
		type:'get',
		dataType:'json'
	}).done(function(d){
		var $details_rightbanner=$(".details_rightbanner");
		var $html='';
		$.each(d,function(index,value){
			$html+=`
					
					<img src=${value.url} alt='' class="klykpic"/>
					<p class="klykjg">${value.name}</p>
					`;
		})
		$details_rightbanner.append($html);
	})
})
();
