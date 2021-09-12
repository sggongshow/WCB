// ==UserScript==
// @name        Auto Profile Changer - Worksafe
// @namespace   GongWcb
// @description Worksafe profile position change auto 
// @include     *oscar.com/oscar/index.jsp*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @version 15.2
// ==/UserScript==

var DataArray 
var input

window.addEventListener('load', function() {
  console.log("parse csv")
  
  /*
  var url = "file:///C:/test/test.csv" //"https://raw.githubusercontent.com/sggongshow/Oscars/main/Pharmacy_Directory_Sample1101.csv";

  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  

  DataArray = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    DataArray.push(jsonObject[i].split(','));
  }
  // Retrived data from csv file content
  console.log(DataArray);
	*/
  
  input = document.createElement('input');
  console.log("test1")
  input.type = 'file';
	input.onchange = readFile
  input.setAttribute('style', 'width:80px;font-size:16px;z-index:1;position:fixed;top:0px;left:0px;');
  document.body.appendChild(input);
  
    
}, false);


function readFile() {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
    var DataRaw = reader.result
 		var Data1 = DataRaw.split(/\r?\n|\r/);
 		console.log(Data1)
    
    DataArray = new Array();
    for (var i = 0; i < Data1.length-1; i++) {
    	DataArray.push(Data1[i].split(','));
  	}
    console.log(DataArray)
    
  };

  


}
