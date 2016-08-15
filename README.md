# popupBox.js
An extremely simple modal box / lightbox / popup box. No dependency. Supports IE10+.

[popupBox.js Demo on CodePen] (http://codepen.io/fionnachan/pen/EyGqbR)

####Please use id but not class as the selector.

<pre>$_('#popup1').init({
  'linkName' : '#tnc',
  'openDelay' : 300,
  'closeDelay' : 300,
  'scrollContent' : true,
  'beforeOpen' : function() {
    document.querySelector('body').style.backgroundColor = "#a1c3e5";
  },
  'afterOpen' : function() {
    document.querySelector('body').style.backgroundColor = "#0000ff";
  },
  'beforeClose' : function() {
    document.querySelector('body').style.backgroundColor = "#000000";
  },
  'afterClose' : function() {
    document.querySelector('body').style.backgroundColor = "#ffffff";
  }
});</pre>
