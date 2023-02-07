// GraelTale

var theNum = "0";
var Page = "0";

let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let Pagearr = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"];

function go_to_right()

{
theNum++;
Page++;

if(theNum == arr.length){theNum="0";}

change_image_2.src='../Images/Asks/GraelTale/GraelTale ('+arr[theNum]+').jpg';

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

change_image_2.src='../Images/Asks/GraelTale/GraelTale ('+arr[theNum]+').jpg';

window.scrollTo({
		top: 0,
	});

document.getElementById("ComicsInfo").innerHTML = 'Comics Page: '+Pagearr[theNum]+'';
}
