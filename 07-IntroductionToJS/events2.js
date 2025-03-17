// JavaScript source code
//console.log(document.getElementsByTagName("div"));
//let dom = document.getElementById("dom");
let dom = document.querySelector("#dom");
console.log(dom);
if (dom)
{
	//dom.innerHTML = "<h2>InnerHTML</h2>";
	dom.before("before()");
	dom.after("after()");
	//dom.append(`append()`)
	//dom.prepend(`prepend()`)
	console.log(dom.outerHTML);
	//dom.outerHTML = "<h2>OuterHTML</h2>";
	console.log(dom.innerText);
	//dom.replaceWith("<h2>Çהוסü בûכ #dom</h2>");
	let counter = document.getElementById("number");
	//counter.id = "counter";
	dom.replaceWith(counter);
}