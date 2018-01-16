var path;

var textItem = new PointText({
	content: '',
	point: new Point(20, 30),
	fillColor: 'black',
});

function onMouseDown(event) {
	// If we produced a path before, deselect it:
	if (path) {
		path.selected = false;
	}

	// Create a new path and set its stroke color to black:
	path = new Path({
		segments: [event.point],
		strokeColor: '#fff',
		// Select the path, so we can see its segment points:
		fullySelected: false
	});
}

// While the user drags the mouse, points are added to the path
// at the position of the mouse:
function onMouseDrag(event) {
	path.add(event.point);
}

// When the mouse is released, we simplify the path:
function onMouseUp(event) {
	path.simplify(10);

	var distan = path.firstSegment.point.getDistance(path.lastSegment.point)

	if (distan < 20) {
		path.closed = true;
	}
	path.fullySelected = false;
	path.strokeColor = '#ffde20';
}