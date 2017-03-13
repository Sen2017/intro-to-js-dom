console.log('sanity check');
//finding html elements

//console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);

//console.log(document.getElementsByTagName("script"));
var tagElement = document.getElementsByTagName("script");
console.log(tagElement);

console.log(document.getElementsByClassName("use-class-method"));
var classElements = document.getElementsByClassName("use-class-method");	

//changing html elements

console.log(idElement.innerHTML);

idElement.innerHTML = "i have been changed"; //this changed the second element based on its id

console.log(classElements[1]);
