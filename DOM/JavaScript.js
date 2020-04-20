
alert('Hello Jerry');

var heading = document.firstElementChild.lastElementChild.firstElementChild;
heading.innerHTML = "Good bye";
heading.style.color = "red";
document.querySelector("input").click();

document.getElementsByTagName("li");



























//------------------------------------------------------------
// 
// document.getElementById("title");
// document.getElementById("title").style.color="blue";
// "blue"
// document.getElementById("title").innerHTML="Hello Jerry";
// "Hello Jerry"
// document.querySelector("h1");
// document.querySelector("li a").style.color= "red";
// "red"
// document.querySelector("h1").classList.add("huge");
// undefined
// document.querySelector("h1").classList.remove("huge");
// undefined
// document.querySelector("h1").classList.toggle("huge");
// true
// ​document.getElementById("title").innerHTML;
// "<strong>Hello</strong>"
// document.getElementById("title").textContent;
// "Hello"
// document.getElementById("title").innerHTML = "<em>Hello Jerry</em>";
// "<em>Hello Jerry</em>"

// document.querySelector("a").attributes;
// NamedNodeMap {0: href, href: href, length: 1}
// document.querySelector("a").getAttribute("href");
// "https://www.bing.com/"
// document.querySelector("a").setAttribute("href","https://www.bing.com/");
// undefined