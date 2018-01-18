var wid = $(window).width(),
	hid = $(window).height(),
	size = 0;

hid = hid - 162;
wid = wid - 2;

if (wid > hid) {
	size = hid;
} else {
	size = wid;
}

// $(`#deTestWaiHolder`).width(size + 2);

$(`#deTestWai`).prop("width", size);
$(`#deTestWai`).prop("height", size);
