!function(a){var b=function(){var b=65,c='<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>',d={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},e=function(b,c){var d=L(b);a(c).data("colorpicker").fields.eq(1).val(d.r).end().eq(2).val(d.g).end().eq(3).val(d.b).end()},f=function(b,c){a(c).data("colorpicker").fields.eq(4).val(b.h).end().eq(5).val(b.s).end().eq(6).val(b.b).end()},g=function(b,c){a(c).data("colorpicker").fields.eq(0).val(N(b)).end()},h=function(b,c){a(c).data("colorpicker").selector.css("backgroundColor","#"+N({h:b.h,s:100,b:100})),a(c).data("colorpicker").selectorIndic.css({left:parseInt(150*b.s/100,10),top:parseInt(150*(100-b.b)/100,10)})},i=function(b,c){a(c).data("colorpicker").hue.css("top",parseInt(150-150*b.h/360,10))},j=function(b,c){a(c).data("colorpicker").currentColor.css("backgroundColor","#"+N(b))},k=function(b,c){a(c).data("colorpicker").newColor.css("backgroundColor","#"+N(b))},l=function(c){var d=c.charCode||c.keyCode||-1;if(d>b&&90>=d||32==d)return!1;var e=a(this).parent().parent();e.data("colorpicker").livePreview===!0&&m.apply(this)},m=function(b){var c,d=a(this).parent().parent();d.data("colorpicker").color=c=this.parentNode.className.indexOf("_hex")>0?J(H(this.value)):this.parentNode.className.indexOf("_hsb")>0?F({h:parseInt(d.data("colorpicker").fields.eq(4).val(),10),s:parseInt(d.data("colorpicker").fields.eq(5).val(),10),b:parseInt(d.data("colorpicker").fields.eq(6).val(),10)}):K(G({r:parseInt(d.data("colorpicker").fields.eq(1).val(),10),g:parseInt(d.data("colorpicker").fields.eq(2).val(),10),b:parseInt(d.data("colorpicker").fields.eq(3).val(),10)})),b&&(e(c,d.get(0)),g(c,d.get(0)),f(c,d.get(0))),h(c,d.get(0)),i(c,d.get(0)),k(c,d.get(0)),d.data("colorpicker").onChange.apply(d,[c,N(c),L(c)])},n=function(b){var c=a(this).parent().parent();c.data("colorpicker").fields.parent().removeClass("colorpicker_focus")},o=function(){b=this.parentNode.className.indexOf("_hex")>0?70:65,a(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus"),a(this).parent().addClass("colorpicker_focus")},p=function(b){var c=a(this).parent().find("input").focus(),d={el:a(this).parent().addClass("colorpicker_slider"),max:this.parentNode.className.indexOf("_hsb_h")>0?360:this.parentNode.className.indexOf("_hsb")>0?100:255,y:b.pageY,field:c,val:parseInt(c.val(),10),preview:a(this).parent().parent().data("colorpicker").livePreview};a(document).bind("mouseup",d,r),a(document).bind("mousemove",d,q)},q=function(a){return a.data.field.val(Math.max(0,Math.min(a.data.max,parseInt(a.data.val+a.pageY-a.data.y,10)))),a.data.preview&&m.apply(a.data.field.get(0),[!0]),!1},r=function(b){return m.apply(b.data.field.get(0),[!0]),b.data.el.removeClass("colorpicker_slider").find("input").focus(),a(document).unbind("mouseup",r),a(document).unbind("mousemove",q),!1},s=function(b){var c={cal:a(this).parent(),y:a(this).offset().top};c.preview=c.cal.data("colorpicker").livePreview,a(document).bind("mouseup",c,u),a(document).bind("mousemove",c,t)},t=function(a){return m.apply(a.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,a.pageY-a.data.y)))/150,10)).get(0),[a.data.preview]),!1},u=function(b){return e(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),g(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),a(document).unbind("mouseup",u),a(document).unbind("mousemove",t),!1},v=function(b){var c={cal:a(this).parent(),pos:a(this).offset()};c.preview=c.cal.data("colorpicker").livePreview,a(document).bind("mouseup",c,x),a(document).bind("mousemove",c,w)},w=function(a){return m.apply(a.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,a.pageY-a.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,a.pageX-a.data.pos.left))/150,10)).get(0),[a.data.preview]),!1},x=function(b){return e(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),g(b.data.cal.data("colorpicker").color,b.data.cal.get(0)),a(document).unbind("mouseup",x),a(document).unbind("mousemove",w),!1},y=function(b){a(this).addClass("colorpicker_focus")},z=function(b){a(this).removeClass("colorpicker_focus")},A=function(b){var c=a(this).parent(),d=c.data("colorpicker").color;c.data("colorpicker").origColor=d,j(d,c.get(0)),c.data("colorpicker").onSubmit(d,N(d),L(d),c.data("colorpicker").el)},B=function(b){var c=a("#"+a(this).data("colorpickerId"));c.data("colorpicker").onBeforeShow.apply(this,[c.get(0)]);var d=a(this).offset(),e=E(),f=d.top+this.offsetHeight,g=d.left;return f+176>e.t+e.h&&(f-=this.offsetHeight+176),g+356>e.l+e.w&&(g-=356),c.css({left:g+"px",top:f+"px"}),0!=c.data("colorpicker").onShow.apply(this,[c.get(0)])&&c.show(),a(document).bind("mousedown",{cal:c},C),!1},C=function(b){D(b.data.cal.get(0),b.target,b.data.cal.get(0))||(0!=b.data.cal.data("colorpicker").onHide.apply(this,[b.data.cal.get(0)])&&b.data.cal.hide(),a(document).unbind("mousedown",C))},D=function(a,b,c){if(a==b)return!0;if(a.contains)return a.contains(b);if(a.compareDocumentPosition)return!!(16&a.compareDocumentPosition(b));for(var d=b.parentNode;d&&d!=c;){if(d==a)return!0;d=d.parentNode}return!1},E=function(){var a="CSS1Compat"==document.compatMode;return{l:window.pageXOffset||(a?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(a?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(a?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(a?document.documentElement.clientHeight:document.body.clientHeight)}},F=function(a){return{h:Math.min(360,Math.max(0,a.h)),s:Math.min(100,Math.max(0,a.s)),b:Math.min(100,Math.max(0,a.b))}},G=function(a){return{r:Math.min(255,Math.max(0,a.r)),g:Math.min(255,Math.max(0,a.g)),b:Math.min(255,Math.max(0,a.b))}},H=function(a){var b=6-a.length;if(b>0){for(var c=[],d=0;b>d;d++)c.push("0");c.push(a),a=c.join("")}return a},I=function(a){var a=parseInt(a.indexOf("#")>-1?a.substring(1):a,16);return{r:a>>16,g:(65280&a)>>8,b:255&a}},J=function(a){return K(I(a))},K=function(a){var b={h:0,s:0,b:0},c=Math.min(a.r,a.g,a.b),d=Math.max(a.r,a.g,a.b),e=d-c;return b.b=d,b.s=0!=d?255*e/d:0,b.h=0!=b.s?a.r==d?(a.g-a.b)/e:a.g==d?2+(a.b-a.r)/e:4+(a.r-a.g)/e:-1,b.h*=60,b.h<0&&(b.h+=360),b.s*=100/255,b.b*=100/255,b},L=function(a){var b={},c=Math.round(a.h),d=Math.round(255*a.s/100),e=Math.round(255*a.b/100);if(0==d)b.r=b.g=b.b=e;else{var f=e,g=(255-d)*e/255,h=(f-g)*(c%60)/60;360==c&&(c=0),60>c?(b.r=f,b.b=g,b.g=g+h):120>c?(b.g=f,b.b=g,b.r=f-h):180>c?(b.g=f,b.r=g,b.b=g+h):240>c?(b.b=f,b.r=g,b.g=f-h):300>c?(b.b=f,b.g=g,b.r=g+h):360>c?(b.r=f,b.g=g,b.b=f-h):(b.r=0,b.g=0,b.b=0)}return{r:Math.round(b.r),g:Math.round(b.g),b:Math.round(b.b)}},M=function(b){var c=[b.r.toString(16),b.g.toString(16),b.b.toString(16)];return a.each(c,function(a,b){1==b.length&&(c[a]="0"+b)}),c.join("")},N=function(a){return M(L(a))},O=function(){var b=a(this).parent(),c=b.data("colorpicker").origColor;b.data("colorpicker").color=c,e(c,b.get(0)),g(c,b.get(0)),f(c,b.get(0)),h(c,b.get(0)),i(c,b.get(0)),k(c,b.get(0))};return{init:function(b){if(b=a.extend({},d,b||{}),"string"==typeof b.color)b.color=J(b.color);else if(void 0!=b.color.r&&void 0!=b.color.g&&void 0!=b.color.b)b.color=K(b.color);else{if(void 0==b.color.h||void 0==b.color.s||void 0==b.color.b)return this;b.color=F(b.color)}return this.each(function(){if(!a(this).data("colorpickerId")){var d=a.extend({},b);d.origColor=b.color;var q="collorpicker_"+parseInt(1e3*Math.random());a(this).data("colorpickerId",q);var r=a(c).attr("id",q);d.flat?r.appendTo(this).show():r.appendTo(document.body),d.fields=r.find("input").bind("keyup",l).bind("change",m).bind("blur",n).bind("focus",o),r.find("span").bind("mousedown",p).end().find(">div.colorpicker_current_color").bind("click",O),d.selector=r.find("div.colorpicker_color").bind("mousedown",v),d.selectorIndic=d.selector.find("div div"),d.el=this,d.hue=r.find("div.colorpicker_hue div"),r.find("div.colorpicker_hue").bind("mousedown",s),d.newColor=r.find("div.colorpicker_new_color"),d.currentColor=r.find("div.colorpicker_current_color"),r.data("colorpicker",d),r.find("div.colorpicker_submit").bind("mouseenter",y).bind("mouseleave",z).bind("click",A),e(d.color,r.get(0)),f(d.color,r.get(0)),g(d.color,r.get(0)),i(d.color,r.get(0)),h(d.color,r.get(0)),j(d.color,r.get(0)),k(d.color,r.get(0)),d.flat?r.css({position:"relative",display:"block"}):a(this).bind(d.eventName,B)}})},showPicker:function(){return this.each(function(){a(this).data("colorpickerId")&&B.apply(this)})},hidePicker:function(){return this.each(function(){a(this).data("colorpickerId")&&a("#"+a(this).data("colorpickerId")).hide()})},setColor:function(b){if("string"==typeof b)b=J(b);else if(void 0!=b.r&&void 0!=b.g&&void 0!=b.b)b=K(b);else{if(void 0==b.h||void 0==b.s||void 0==b.b)return this;b=F(b)}return this.each(function(){if(a(this).data("colorpickerId")){var c=a("#"+a(this).data("colorpickerId"));c.data("colorpicker").color=b,c.data("colorpicker").origColor=b,e(b,c.get(0)),f(b,c.get(0)),g(b,c.get(0)),i(b,c.get(0)),h(b,c.get(0)),j(b,c.get(0)),k(b,c.get(0))}})}}}();a.fn.extend({ColorPicker:b.init,ColorPickerHide:b.hidePicker,ColorPickerShow:b.showPicker,ColorPickerSetColor:b.setColor})}(jQuery);