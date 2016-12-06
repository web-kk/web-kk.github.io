$(document).ready(function(){
//	var j=setInterval(function(){$('.home-f').css("height",$(window).height())},300)
	//lunbo	
	var n=0;
	var t=setInterval(move,6000)
	var flag=true
	function move(){
		n++
		if(n>=$('.home li').length){
			n=0
		}
		$('.home li').stop(true).fadeOut('slow').eq(n).fadeIn('slow')
		$('.h-list div').removeClass('h-list-fir').eq(n).addClass('h-list-fir')
	}
	$('.h-list div').mouseover(function(){
			clearInterval(t)
			var c=$(this).index()
			if($('.home li').eq(c).css('display')=='none'){
				$('.h-list div').removeClass('h-list-fir').eq(c).addClass('h-list-fir')
			$('.home li').stop(true).fadeOut('slow').eq(c).fadeIn('slow')
			n=c
			}
			
			
	})
	$('.h-list div').mouseout(function(){
		t=setInterval(move,6000)
	})
	//
	$('.h-right-2').click(function(){
		if($('.h-right-3').css("display")=="none"){
			$(".h-right-3").fadeIn()
		}else{
			$('.h-right-3').fadeOut()
		}
	})
	//load
	$(window).load(function() {
		$("#load").fadeOut("1000", function() {
		// Animation complete
			$('#load img').css("display","none");
			$('#load').css("display","none");
			$('#load').css("background","none");
			$('#load').css("width","0");
			$('#load').css("height","0");
	  	});
	});
})

$(document).ready(function(){

	$(window).scroll(function(){	
		$('.floor').each(function(z){
			if($(window).scrollTop()>=$('.floor').eq(z).offset().top-100){
				$('.h-right li').each(function(x){
					$('.h-right li').eq(x).css({"font-size":"12px","color":"#9d9d9d","font-weight":100})

				})
				$('.h-right li').eq(z).css({"font-size":"14px","color":"#fff","font-weight":500})

			}
		})
		
		$('.h-right-3 li').each(function(){	
			$('.h-right-3 li').click(function(){
				var index=$(this).index()
				animate(document.body,{scrollTop:$('.floor').eq(index).offset().top})
				animate(document.documentElement,{scrollTop:$('.floor').eq(index).offset().top})
			})
		})
		//back
		if($(window).scrollTop()>=$('.about-f').offset().top-200){
			$('.back').show()
		}
		if($(window).scrollTop()<$('.about-f').offset().top-400){
			$('.back').hide()
		}
		$('.back').click(function(){
			animate(document.body,{scrollTop:0})
			animate(document.documentElement,{scrollTop:0})
		})
		
	})	
		
	//点击回到对应的楼层
		$('.h-right li').each(function(){	
			$('.h-right li').click(function(){
				var index=$(this).index()
				animate(document.body,{scrollTop:$('.floor').eq(index).offset().top})
				animate(document.documentElement,{scrollTop:$('.floor').eq(index).offset().top})
			})
		})

})

$(document).ready(function(){
	$(window).scroll(function(){
		var sctop=$(window).scrollTop()
		function screen(a,b){
			var top=a.position().top
			if(sctop>=top-500){
				b.addClass('activetop')
			}
		}
		screen($('.about-f'),$('.title-1'))
		screen($('.works-f'),$('.title-2'))
		screen($('.can-f'),$('.title-3'))
		function scopt(a,b){
			var top=a.position().top
			if(sctop>=top+220){
				b.addClass('activeleft')
			}
		}


		scopt($('.about-img'),$('.about-img'))
		function scopr(a,b){
			var top=a.position().top
			if(sctop>=top+220){
				b.addClass('activeright')
			}
		}
		scopr($('.about-in'),$('.about-in'))
		
	})
	$('.k-list').on('click','li',function(){
		var index=$(this).index()
		$('.k-list li').removeClass('k-active')
		$(this).addClass('k-active')
		if(index===0){
			$(this).addClass('k-active')
			$('.box').show()
		}else if(index===1){
			$('.box').hide()
			$('.k-pc').show()
		}else{
			$('.box').hide()
			$('.k-phone').show()
		}
	})
})