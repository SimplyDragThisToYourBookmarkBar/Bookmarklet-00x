javascript:void((function(w){

 var d=w.document,
 e, i=0, a=[], b=a.slice.call(d.getElementsByTagName('*')), l=b.length+0,
 n, p=/(HTML|HEAD|META|TITLE|STYLE|SCRIPT|BASE|NOSCRIPT|NOFRAME|PARAM)/;

 while(i<l){
	e=b[i++];
	n=e.tagName;
	if('style' in e && p.test(n)===false){
	 a[a.length]=e;
	};
 };

 console.dir(a);

})(window));
