/**
 * vSort 1.1
 * vSort is a simple jQuery plugin for making lists sortable with a handle
 *
 * Copyright 2015, Atul Gupta
 * Licensed under the MIT license.
 * https://github.com/lastdates/vSort
 *
 * Date: Wed Feb 04 2015 11:15:11 GMT+0530 (IST)
 */
(function($){
	var mY,t,b,tY,ph,nh,el,d=$(document),
	M=function(e){
		e.preventDefault();
		mY=e.pageY || e.originalEvent.touches[0].pageY;
		tY=0;
		el=$(this).parent();
		if(!el.hasClass('sortitem'))
			return false;
		var P=el.parent(),i=el.index();
		var H=P.innerHeight(),
			T=P.children().first().offset().top,
			F=P.attr("data-callback"),
			h=el.outerHeight();
		t=el.offset().top - T;
		b=t + h;
		ph=el.prev().outerHeight()/2,
		nh=el.next().outerHeight()/2;
		el.addClass('dragging');
		d.bind('mousemove touchmove',function(e){
			e.preventDefault();
			tY=(e.pageY || e.originalEvent.touches[0].pageY)-mY;
			if(tY >= nh){
				el.insertAfter(el.next());
				S(2*nh);
			}
			else if(tY + ph <= 0){
				el.insertBefore(el.prev());
				S(-2*ph);
			}
			if(t + tY < 0) tY=-1*t;
			else if(b + tY > H) tY=H-b;
			el.css({'top':tY+'px'});
		});
		d.bind('mouseup touchend',function(e){
			d.unbind('mousemove mouseup touchmove touchend');
			(function R(){
				if(tY>3){tY-=3;}
				else if(tY<-3){tY+=3;}
				else {tY=0;}
				el.css({'top':tY+'px'});
				if(tY==0){
					el.removeClass('dragging');
					if(F && el.index()!=i) setTimeout((function(){eval(F)}),20);
				}
				else{
					setTimeout(R,10);
				}
			})();
		});
		return false;
	},
	S=function(y){
		mY+=y;
		tY-=y;
		t+=y;
		b+=y;
		ph=el.prev().outerHeight()/2;
		nh=el.next().outerHeight()/2;
	};
	$.fn.vSort = function(){
		$('.sorthandle').attr("unselectable","on").bind("touchstart mousedown",M);
	};
	$("<style>.sortitem{position:relative;}.sortitem .sorthandle{cursor:move;}.sortitem.dragging{z-index:9999;opacity:.85;-webkit-box-shadow:0 0 0.625em rgba(0,0,0,0.5);box-shadow:0 0 0.625em rgba(0,0,0,0.5);}</style>").appendTo("head");
	d.ready(function(){d.vSort();});
})(jQuery);
