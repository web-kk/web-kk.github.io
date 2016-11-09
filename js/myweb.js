$(document).ready(function(){
	var j=setInterval(function(){$('.home-f').css("height",$(window).height())},300)
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

	//导航出现消失
	$(window).scroll(function(){	
		//出现对应的效果
		$('.floor').each(function(z){
			if($(window).scrollTop()>=$('.floor').eq(z).offset().top-100){
				$('.h-right li').each(function(x){
					$('.h-right li').eq(x).css({"font-size":"12px","color":"#9d9d9d","font-weight":100})

				})
				$('.h-right li').eq(z).css({"font-size":"14px","color":"#fff","font-weight":500})

			}
		})
		//点击回到对应的楼层
		$('.h-right li').each(function(){	
			$('.h-right li').click(function(){
				var index=$(this).index()
				animate(document.body,{scrollTop:$('.floor').eq(index).offset().top})
				animate(document.documentElement,{scrollTop:$('.floor').eq(index).offset().top})
			})
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
		


})

$(document).ready(function(){
	$(window).scroll(function(){
		var sctop=$(window).scrollTop()
		var top=$('.about-f').position().top
		if(sctop>=top-400){
			$('.about-title h2').add('.about-title h1').add('.about-title h3').addClass('activetop')
		}
	})
})