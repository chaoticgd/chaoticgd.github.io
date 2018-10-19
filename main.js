window.addEventListener('load', function() {
	var canvas = document.createElement('canvas');
	document.body.appendChild(canvas);

	var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

	canvas.width = width;
	canvas.height = height;

	var context = canvas.getContext('2d');

	window.setInterval(function() {
		for(var i = 0; i < height; i++) {
			context.beginPath();
			context.moveTo(0, i);
			context.lineTo(width, i);
			context.strokeStyle = Math.random() > 0.5 ? '#222' : '#111';
			context.stroke();
		}
	}, 10);
});
