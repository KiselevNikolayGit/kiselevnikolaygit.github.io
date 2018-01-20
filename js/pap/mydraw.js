var CANIM,
	CANIMSIZE = 0,
	textItem;

function anime() {
	CANIMSIZE = 0;
	CANIM = new Path.Circle({
		center: view.center,
		radius: 10,
		fillColor: '#000'
	});
	textItem = new PointText({
		content: 'By KNCELEB',
		point: new Point(20, 30),
		fillColor: '#fff'
	});
	view.update();
}

anime();

function onFrame(event) {
	if (CANIMSIZE < 6) {
		CANIM.scaling += .1;
		CANIMSIZE += .1;
	}
};


var MAIN = {
	strokeWidth: 10,
	strokeColor: new Color('#ffde20')
};

var path;

function onMouseDown(event) {
	if (path) {
		path.selected = false;
	}

	path = new Path({
		segments: [event.point],
		strokeColor: '#fff',
		fullySelected: false
	});
	path.strokeCap = 'round';
	path.strokeJoin = 'round';
	path.strokeWidth = MAIN.strokeWidth;
}

function onMouseDrag(event) {
	path.add(event.point);
}

function onMouseUp(event) {
	if (path.length > 3) {
		path.simplify(23);
		var distan = path.firstSegment.point.getDistance(path.lastSegment.point) || 21;
	
		if (path.length > 6 && distan < 20) {
			path.closed = true;
		}
		// path.fullySelected = true;
		path.strokeColor = MAIN.strokeColor.clone();
	} else {
		path.remove();
		var circ = new Path.Circle({
			center: path.firstSegment.point,
			radius: MAIN.strokeWidth / 2,
			fillColor: MAIN.strokeColor.clone(),
			fullySelected: false
		});
	}
}

$("#weight").on('input', function(event) {
	event.preventDefault();
	MAIN.strokeWidth = $("#weight").val();
});

$("#hue").on('input', function(event) {
	event.preventDefault();
	MAIN.strokeColor.hue = $("#hue").val();
	$("#coloryres").text(MAIN.strokeColor.toCSS(true));
	$("#colory").css('color', MAIN.strokeColor.toCSS(true));
});


$("#cleanboa").click(function(event) {
	project.clear();
	anime();
});

$("#saveboa").click(function(event) {
	options = {
		asString: true,
	};
	var SVG = project.exportSVG(options);
	console.log(SVG);
	var blob = new Blob([SVG], {type: "image/svg+xml;charset=utf-8"});
	saveAs(blob, "image.svg");
});

$("#loadboa").on('change', function(event) {
	event.preventDefault();
	var fileList = this.files;
	var reader = new FileReader();
	reader.onload = function(e) {  
		var SVG = e.target.result 
		console.log(SVG);
		project.clear();
		project.importSVG(SVG);
	}
	reader.readAsText(fileList[0]);
});



$("#savePNG").click(function(event) {
	var canvas = document.getElementById("deTestWai");
	canvas.toBlob(function(blob){ saveAs(blob, "work.jpeg"); }, 'image/jpeg', 1);
});