var db = firebase.firestore();

var quill = new Quill('#editor', {
	modules: {
		toolbar: [
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline', 'strike'],
			[{ 'font': [] }],
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'indent': '-1'}, { 'indent': '+1' }],
			// [{ 'color': [] }, { 'background': [] }],
			[{ 'align': [] }],
			['blockquote', 'code-block']
		]
	},
	placeholder: 'Мыслям загорелся зеленый цвет...',
	theme: 'snow'
});

let open_document = localStorage.getItem('docu');
open_document = open_document.replace("http://yellow-hi.tech/", "");

var app = new Vue({
	el: '#wholesystem',
	data: {
    	adress: open_document,
	    adressold: open_document
	}
});

function sync() {
	localStorage.setItem('docu', app.adress);
	app.adressold = app.adress;
	open_document = app.adress;
	let docRef = db.collection("notes").doc(open_document);
	docRef.get().then(function(doc) {
	    if (doc.exists) {
	        let data = doc.data();
	        data = JSON.parse(data);
        	quill.setContents(data);
	    } else {
	    	let data = JSON.stringify(quill.getContents());
	        docRef.set({
				body: data,
			});
	    }
	});
}
