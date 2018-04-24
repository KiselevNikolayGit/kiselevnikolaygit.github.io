let rule = localStorage.getItem('docu');
rule = rule.replace("http://yellow-hi.tech/", "");
localStorage.setItem('docu', "");

let open_document = rule;

var app = new Vue({
  el: '#wholesystem',
  data: {
    adress: open_document,
    adressold: open_document
  }
});
