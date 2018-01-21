// PAPERSCRIPT!!!

var CANIM,
	CANIMSIZE = 0,
	textItem;

var mid = $("#drawer").width() / 2;

function anime() {
	CANIMSIZE = 0;
	CANIM = new Path.Circle({
		center: new Point(mid, 150),
		radius: 14,
		fillColor: '#000'
	});
	textItem = new PointText({
		content: '',
		point: new Point(mid, 150),
		fontFamily: 'Fira Sans',
		fontSize: 30,
		fillColor: new Color('#fd2'),
		justification: "center"
	});
	view.update();
}

anime();

function onFrame(event) {
	if (CANIMSIZE < 6) {
		CANIM.scaling += .03;
		CANIMSIZE += .03;
		textItem.fillColor.lightness += .005;
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
	MAIN.strokeWidth = $("#weight").val();
});

$("#hue").on('input', function(event) {
	MAIN.strokeColor.hue = $("#hue").val();
	$("#coloryres").text(MAIN.strokeColor.toCSS(true));
	$("#colory").css('color', MAIN.strokeColor.toCSS(true));
});

$("#cleanboa").click(function(event) {
	project.clear();
	anime();
});

$("#submitboa").click(function(event) {
	options = {
		asString: true,
	};
	var SVG = project.exportSVG(options);
	console.log(SVG);
});

$("#drawerComment").change(function(event) {
	textItem.content = $("#drawerComment").val();
	$("#drawerComment").val("");
});
