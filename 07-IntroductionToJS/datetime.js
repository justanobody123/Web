// JavaScript source code
//alert("Date & Time");

//alert(current_time);
let current_time = new Date();
let date_and_time = document.getElementById("date-and-time");
date_and_time.innerHTML = `getDate():\t${current_time.getDate()};<br>`;
date_and_time.append(`getTime():\t${current_time.getTime()};`)
date_and_time.append(`getDay():\t${(new Date()).toLocaleString("default", { weekday: "long" })};`);
const WEEK = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function tick_timer()
{
	let current_time = new Date();
	if (document.getElementById("show-date").checked)
	{
    let yyyy = current_time.getFullYear();
		let MM = checkNumber(current_time.getMonth() + 1);
		let dd = checkNumber(current_time.getDate());
		let s_date = `${yyyy}.${MM}.${dd}`;
		document.getElementById("date").innerHTML = s_date;
	}
	else
	{
		document.getElementById("date").innerHTML = "";
	}

	document.getElementById("weekday").innerHTML =
		document.getElementById("show-weekday").checked ? current_time.toLocaleString("ru-ru", { weekday: "long" }) : "";

	let hh = checkNumber(current_time.getHours());
	let mm = checkNumber(current_time.getMinutes());
	let ss = checkNumber(current_time.getSeconds());

	let s_time = `${hh}.${mm}.${ss}`;
	document.getElementById("time").innerHTML = s_time;

	



	setTimeout(tick_timer, 1000);
}

function checkNumber(i)
{
	return i < 10 ? "0" + i : i;
}

