// JavaScript source code
function switch_button()
{
	let switch_btn = document.getElementById("switch");
	let image = switch_btn.src.split('/').at(-1);
	console.log(image);
	document.body.style.transition = "background-color 3s, color 3s";
	document.body.style.backgroundColor = image === 'moon.png' ? '#323232' : 'white';
	document.body.style.color = image === 'moon.png' ? 'white' : 'black';
	switch_btn.style.transition = "opacity 0.5s";
	switch_btn.style.opacity = "0";
	setTimeout(() =>
	{
		switch_btn.src = `img/${image === "sun.png" ? "moon.png" : "sun.png"}`;
		switch_btn.style.opacity = "1";
	}, 500);

	console.log(switch_btn.src);
}