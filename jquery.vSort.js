/**
 * vSort 1.0
 * vSort is a simple jQuery plugin for making lists sortable with a handle
 *
 * Copyright 2015, Atul Gupta
 * Licensed under the MIT license.
 * https://github.com/lastdates/vSort
 *
 * Date: Wed Feb 04 2015 11:15:11 GMT+0530 (IST)
 */
(function($){
	var mY,t,b,tY,ph,nh,el,
	M=function(e){
		mY=e.pageY;
		tY=0;
		el=$(this).parent();
		if(!el.hasClass('sortitem'))
			return false;
		var P=el.parent();
		var H=P.innerHeight(),
			T=P.children().first().offset().top,
			F=P.attr("data-callback"),
			h=el.outerHeight();
		t=el.offset().top - T;
		b=t + h;
		ph=el.prev().outerHeight()/2,
		nh=el.next().outerHeight()/2;
		el.addClass('dragging');
		$(document).bind('mousemove',function(e){
			tY=e.pageY-mY;
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
		$(document).bind('mouseup',function(e){
			$(document).unbind('mousemove');
			$(document).unbind('mouseup');
			(function R(){
				if(tY>3){tY-=3;}
				else if(tY<-3){tY+=3;}
				else {tY=0;}
				el.css({'top':tY+'px'});
				if(tY==0){
					el.removeClass('dragging');
					if(F) eval(F);
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
		$('.sorthandle').attr("unselectable","on").bind("mousedown",M);
	};
	$("<style>.sortitem{position:relative;}.sortitem .sorthandle{cursor:move;}.sortitem.dragging{z-index:9999;opacity:.85;-webkit-box-shadow:0 0 0.625em rgba(0,0,0,0.5);box-shadow:0 0 0.625em rgba(0,0,0,0.5);}</style>").appendTo("head");
	$(document).ready(function(){$(document).vSort();});
})(jQuery);
