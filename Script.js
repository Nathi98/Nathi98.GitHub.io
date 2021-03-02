function myFunction() {
  var x1, x2, x3, x4, x5, x6, x7, x8;
  var y1, y2, y3, y4, y5, y6, y7, y8;
  var text1, text2, text3, text4, text5, text6,text7, text8;
  var text;
  
  document.getElementById("upr001").disabled = true;
  document.getElementById("upr002").disabled = true;
  document.getElementById("upr003").disabled = true;
  document.getElementById("upr004").disabled = true;
  document.getElementById("upr005").disabled = true;
  document.getElementById("upr006").disabled = true;
  document.getElementById("upr007").disabled = true;
  document.getElementById("upr008").disabled = true;

  // Get the value of the input field with id="qty001"
  x1 = document.getElementById("qty001").value;
  x2 = document.getElementById("qty002").value;
  x3 = document.getElementById("qty003").value;
  x4 = document.getElementById("qty004").value;
  x5 = document.getElementById("qty005").value;
  x6 = document.getElementById("qty006").value;
  x7 = document.getElementById("qty007").value;
  x8 = document.getElementById("qty008").value;
		 
  y1 = document.getElementById("upr001").value;
  y2 = document.getElementById("upr002").value;
  y3 = document.getElementById("upr003").value;
  y4 = document.getElementById("upr004").value;
  y5 = document.getElementById("upr005").value;
  y6 = document.getElementById("upr006").value;
  y7 = document.getElementById("upr007").value;
  y8 = document.getElementById("upr008").value;
  
  text1 = parseInt(x1)*parseInt(y1);
  text2 = parseInt(x2)*parseInt(y2);
  text3 = parseInt(x3)*parseInt(y3);
  text4 = parseInt(x4)*parseInt(y4);
  text5 = parseInt(x5)*parseInt(y5);
  text6 = parseInt(x6)*parseInt(y6);
  text7 = parseInt(x7)*parseInt(y7);
  text8 = parseInt(x8)*parseInt(y8);
  
  text = text1 + text2 + text3 + text4 + text5 + text6 + text7 + text8;
  
  document.getElementById("demo").innerHTML = text;
}