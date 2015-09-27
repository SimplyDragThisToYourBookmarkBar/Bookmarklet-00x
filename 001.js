	if(eTagName in defaultStyles){
			ds=defaultStyles[eTagName];
		}else{
			sandBox=sandBox||(sandBox=$body.appendChild($d.createElement('iframe')));
			console.log(sandBox);
		};

	};
	if(sandBox){$body.removeChild(sandBox);}
 };

 console.log('usedTags',Object.keys(defaultStyles));
 console.dir(defaultStyles);

})(window));
