var cg = {};

cg.getScriptDirectory = function() {
	var scripts = document.getElementsByTagName('script');
	for(var i in scripts) {
		if(scripts[i].src.indexOf('cgheader.js') >= 0) {
			return scripts[i].src.substring(0, scripts[i].src.lastIndexOf('/'));
		}
	}
};

cg.createHeader = function(breadCrumbs) {
	var headerStyle = document.createElement('link');
	headerStyle.rel = 'stylesheet';
	headerStyle.href = cg.getScriptDirectory() + '/cgheader.css';
	document.head.appendChild(headerStyle);
	
	var headerElement = document.createElement('div');
	headerElement.id = 'cg-header-container';
	document.body.insertBefore(headerElement, document.body.firstChild);

	breadCrumbs.unshift({ text: 'chaoticgd.github.io', href: '/' });
	
	for(var i in breadCrumbs) {
		var breadCrumb = breadCrumbs[i];
		
		var breadCrumbElement = document.createElement('a');
		breadCrumbElement.id = 'cg-header-breadcrumb';
		breadCrumbElement.innerText = breadCrumb.text;
		breadCrumbElement.href = breadCrumb.href;

		headerElement.appendChild(breadCrumbElement);
		
		if(i != breadCrumbs.length - 1) {
			headerElement.innerHTML += ' &xrarr; ';
		}
	}

	var canvas = document.createElement('canvas');
	canvas.id = 'cg-header-background';
	canvas.height = 64;
	headerElement.appendChild(canvas);

	function resizeHeader() {
		canvas.width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
	window.addEventListener('resize', resizeHeader);
	resizeHeader();

	var context = canvas.getContext('2d');
	window.setInterval(function() {
		for(var i = 0; i < 64; i++) {
			context.beginPath();
			context.moveTo(0, i);
			context.lineTo(canvas.width, i);
			context.strokeStyle = Math.random() > 0.5 ? '#115' : '#111';
			context.stroke();
		}
	}, 10);
};
