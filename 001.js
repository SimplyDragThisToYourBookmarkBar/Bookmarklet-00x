javascript:void((function(global){

 var slice=Array.prototype.slice,
 $w=global, computedStyleOf=$w.getComputedStyle,
 $d=$w.document, $html=$d.documentElement, $body=$d.body,
 tags=[$html,$body].concat(slice.call($body.getElementsByTagName('*')));

 console.dir(tags);

})(window));
