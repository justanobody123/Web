// JavaScript source code
let delay = 3;
function switch_button()
{
	let switch_btn = document.getElementById("switch");
	let image = switch_btn.src.split('/').at(-1);
	console.log(image);
	document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
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
function set_delay()
{
	let delay_id = document.getElementById("delay");
	if (delay_id.value >= 0.1 && delay_id.value <=3)
	{
		delay = delay_id.value;
	}
}