javascript:void((function(global){

 var $w=global, $d=$w.document, $html=$d.documentElement, $body=$d.body,
 slice=$w.Array.prototype.slice,
 tags=[$html,$body].concat(slice.call($body.getElementsByTagName('*'))),
 tag2skip=/STYLE|SCRIPT|SOURCE|PARAM|NO(SCRIPT|FRAME|EMBED)|RP|AREA|TRACK|DATALIST|TEMPLATE/,
 l=tags.length, i=0, e, eTagName, ds,
 sandBox=$body.appendChild($d.createElement('iframe')),
 sandBoxedDoc=sandBox.contentDocument,
 sandBoxedBody=sandBoxedDoc.body,
 sandBoxedWindow=sandBox.contentWindow,
 defaultStylesReference=$w.defaultStylesReference||($w.defaultStylesReference={});


 while(i<l){
	e=tags[i++];
	eTagName=e.tagName;
	if(tag2skip.test(eTagName)===false){
		if(eTagName in defaultStylesReference){
			ds=defaultStylesReference[eTagName];
		}else{

			ds=defaultStylesReference[eTagName]=sandBoxedWindow.getComputedStyle(sandBoxedBody.appendChild(sandBoxedDoc.createElement(eTagName)));

			console.log(ds);
		};
	};
 };

 $body.removeChild(sandBox);
})(window));
