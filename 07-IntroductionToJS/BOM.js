// JavaScript source code
//let screen_resolution = "";
//screen_resolution += window.screen.width;
//screen_resolution += "x";
//screen_resolution += window.screen.height;

//Screen:
window.document.getElementById("screen-resolution").innerHTML =//screen_resolution;
	`Screen resolution: ${window.screen.width}x${window.screen.height}`;
document.getElementById("screen-available-resolution").innerHTML = `Available resolution: ${window.screen.availWidth}x${screen.availHeight}`;
document.getElementById("screen-color-depth").innerHTML = `Color depth: ${screen.colorDepth}`;
document.getElementById("screen-pixel-depth").innerHTML = `Pixel depth: ${screen.pixelDepth}`;
document.getElementById("screen-orientation").innerHTML = `Screen orientation: ${screen.orientation.type}`;
//Location
document.getElementById("current-page").innerHTML = location.href;
document.getElementById("current-directory").innerHTML = location.pathname;
document.getElementById("hostname").innerHTML = location.hostname;
document.getElementById("protocol").innerHTML = location.protocol;

//History:

document.getElementById("btn-backward").addEventListener("click", () => { window.history.back() });
document.getElementById("btn-forward").addEventListener("click", () => { window.history.forward() });