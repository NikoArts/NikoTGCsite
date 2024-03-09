// GlitchSlimesAdventure

var theNum = "0";
var Page = "0";

let arr = ["01", "02", "11", "12", "21"];
let Pagearr = ["1/5", "2/5", "3/5", "4/5", "5/5"];

function go_to_right()

{
theNum++;
Page++;

if(theNum == arr.length){theNum="0";}

change_image_2.src = '../Images/Smol/Comics/GlitchSlimesAdventure/Glitch slimes adventures '+arr[theNum]+'.png';

window.scrollTo({
		top: 0,
	});

document.getElementById("ComicsInfo").innerHTML = 'Comics Page: '+Pagearr[theNum]+'';
}

function go_to_left()

{
theNum--;
Page--;

if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );

change_image_2.src = '../Images/Smol/Comics/GlitchSlimesAdventure/Glitch slimes adventures '+arr[theNum]+'.png';

window.scrollTo({
		top: 0,
	});

document.getElementById("ComicsInfo").innerHTML = 'Comics Page: '+Pagearr[theNum]+'';
}
