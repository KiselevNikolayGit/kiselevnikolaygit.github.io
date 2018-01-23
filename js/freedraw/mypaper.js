function main(){
	// PAPERSCRIPT!!!

	var CANIM,
		CANIMSIZE = 0,
		lastic = false,
		textItem;

	function anime() {
		project.clear();
		$("#deTestWai").css("background", "");
		CANIMSIZE = 0;
		CANIM = new Path.Circle({
			center: new Point(50, 25),
			radius: 14,
			fillColor: '#000'
		});
		textItem = new PointText({
			content: 'by Kiselev',
			point: new Point(20, 30),
			fillColor: new Color('#fd2')
		});
	}

	view.onFrame = function(event) {
		if (CANIM && CANIMSIZE < 6) {
			CANIM.scaling += .09;
			CANIMSIZE += .09;
			textItem.fillColor.lightness += .01;
		} else if (CANIM) {
			$("#deTestWai").css("background", "#000");
			CANIM.remove();
		};
	};

	var MAIN = {
		strokeWidth: 10,
		strokeColor: new Color('#ffde20'),
		simplifyVAL: 22
	};

	var path;

	view.onMouseDown = function(event) {
		if (CANIMSIZE >= 6) {
			if (path) {
				CookSvg();
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
	}

	view.onMouseDrag = function(event) {
		if (CANIMSIZE >= 6 && path) {
			path.add(event.point);
		}
	}

	view.onMouseUp = function(event) {
		if (CANIMSIZE >= 6 && path) {
			if (path.length > 3) {
				path.simplify(MAIN.simplifyVAL);
				var distan = path.firstSegment.point.getDistance(path.lastSegment.point) || 21;
			
				if (path.length > 6 && distan < 20) {
					path.closed = true;
				}
				// path.fullySelected = true;
				path.strokeColor = MAIN.strokeColor.clone();
				if (lastic) {
					alert("Могу стереть только себя. Я лучший ластик на земле. Спасибо за внимание.");
					path.remove();
				}
			} else {
				path.remove();
				var circ = new Path.Circle({
					center: path.firstSegment.point,
					radius: MAIN.strokeWidth / 2,
					fillColor: MAIN.strokeColor.clone(),
					fullySelected: false
				});
				if (lastic) {
					alert("Могу стереть только себя. Я лучший ластик на земле. Спасибо за внимание.");
					circ.remove();
				}
			};
			CookSvg();
		};
	};

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

	$("#simpai").on('change', function(event) {
		var a = $("#simpai").val();
		if (a != 0) {
			MAIN.simplifyVAL = 33 / a;
			lastic = false;
		} else {
			MAIN.simplifyVAL = 0;
			lastic = true;
		}
	});

	$("#cleanboa").click(function(event) {
		RemoveCookie("DATAoSVGcahseaesdfasdfwefasefaewfa")
		main();
	});

	$("#saveboa").click(function(event) {
		SVG = SaveVG();
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

	function SaveVG() {
		options = {
			asString: true,
		};
		var SVG = project.exportSVG(options);
		return SVG;
	};

	window.callPolice = function() {
		anime();
		SVG = LoadCookie("DATAoSVGcahseaesdfasdfwefasefaewfa");
		if (SVG) {
			project.importSVG(SVG);
		}
		view.requestUpdate();
	};

	function CookSvg() {
		SVG = SaveVG();
		CreateCookie("DATAoSVGcahseaesdfasdfwefasefaewfa", SVG);
	};

	window.callPolice();
};

main();