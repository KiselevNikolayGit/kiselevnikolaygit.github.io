// By Kiselev Nikolay
// For site http://yellow-hi.tech/


var md = new markdownit();


// Declaring prototype functions

String.prototype.Format = function () {
  var i = 0, args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] != 'undefined' ? args[i++] : '';
  });
};
String.prototype.ReplaceAll = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
};
String.prototype.MakeNormal = function(placeholder) {
  var normalString = this.ReplaceAll(".", placeholder);
  var toChange = " .,./.\\.$.@.#.%.^.&.*.(.).-.{.}.[.].=.+.?.<.>.~.;._".split(".");
  toChange.forEach( function (element, index, array) {
    normalString = normalString.ReplaceAll(element, placeholder);
  });
  return normalString;
};
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};
function ToClassicDate(timestamp) {
  var date = new Date();
  date.setTime(timestamp);
  date.setHours(date.getHours());
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var d = date.getDay();
  var ms = date.getMonth();
  var y = date.getFullYear();
  m = checkTime(m);
  s = checkTime(s);
  return h + ":" + m + ":" + s + " " + d + "." + ms + "." + y;
};


// Cookie jobs

function LoadCookie(Key) {
  return $.cookie(Key);
};

function CreateCookie(Key, Value) {
  $.cookie(Key, Value, {
    expires: 7,
    path: '/'
  });
};

function RemoveCookie(Key) {
  $.removeCookie(Key, {
    path: '/'
  });
};


// Firebase functions

var database = firebase.database();

function NewUser(Username, Answer) {
  var UserCard = {
    a: Answer,
    inmail: 1,
    inbell: 1,
    rating: 0,
    time: + new Date()
  };
  var updates = {};
  updates['/users/' + Username] = UserCard;
  return firebase.database().ref().update(updates);
}
function NewNew(NewName, Body) {
  var THEauth = LoadCookie("bjbfgfbnmtgyfntrs235c64vb@Z34@!q234542@!#Q3") || "";
  var NewCard = {
    title: NewName,
    content: Body,
    rating: 0,
    author: THEauth,
    time: + new Date()
  };
  var NewKey = firebase.database().ref().child('News').push().key;
  var updates = {};
  updates['/News/' + NewKey] = NewCard;
  return firebase.database().ref().update(updates);
}


// Body

var Meme = LoadCookie("bjbfgfbnmtgyfntrs235c64vb@Z34@!q234542@!#Q3");
console.log(Meme);
if (Meme != undefined) {
  LogSuc(Meme);
}

function LogSuc(Name) {
  $("#Login").removeClass('show');
  console.log("Logined ass " + Name);
  CreateCookie("bjbfgfbnmtgyfntrs235c64vb@Z34@!q234542@!#Q3", Name);
  $("#CurrentLog").text(Name);
  var Ref = firebase.database().ref('users/' + Name);
  Ref.on('value', function(snapshot) {
    var val = snapshot.val();
    if (val != null) {
      $("#InboxM").text(val.inmail);
      $("#InboxB").text(val.inbell);
    }
  });
}

$("#LogIny").click(function(event) {
  RemoveCookie("bjbfgfbnmtgyfntrs235c64vb@Z34@!q234542@!#Q3");
  var Name = $("#Name").val();
  Name = Name.MakeNormal();
  var Answer = $("#Answer").val();
  var Ref = firebase.database().ref('users/' + Name);
  Ref.once('value', function(snapshot) {
    var val = snapshot.val();
    if (val == null) {
      alert("Такого имени мы не знаем");
    } else if (val.a == Answer) {
      LogSuc(Name);
    } else {
      alert("Вы дали не правильный ответ");
    }
  });
});

$("#LogRegy").click(function(event) {
  RemoveCookie("bjbfgfbnmtgyfntrs235c64vb@Z34@!q234542@!#Q3");
  var Name = $("#Name").val();
  Name = Name.MakeNormal("_");
  var Answer = $("#Answer").val();
  var Ref = firebase.database().ref('users/' + Name);
  Ref.once('value', function(snapshot) {
    var val = snapshot.val();
    if (val == null) {
      NewUser(Name, Answer);
      LogSuc(Name);
    } else {
      alert("Имя занято");
    }
  });
});

var Bullet = `
<div class="card p-3 m-4">
  <div class="card-block">
    <h3 class="card-title">{}</h4>
    <p class="card-text">{}</p>
  </div>
</div>`

$("#NewNew").submit(function(event) {
  var NewTitle = $("#NewTitle").val();
  var New = $("#New").val();
  NewNew(NewTitle, New);
});

var Ref = firebase.database().ref('/News');
Ref.on('value', function(snapshot) {
  $("#lentach").html("")
  snapshot.forEach(function(childSnapshot) {
    var Key = childSnapshot.key;
    var New = childSnapshot.val();
    var Time = ToClassicDate(New.createtime);
    var Body = New.content;
    Body = md.render(Body)
    var Clone = Bullet.Format(New.title, Body);
    $("#lentach").append(Clone);
  });
});
