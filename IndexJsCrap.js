window.onload = function() {
	
var theNum = Math.floor(Math.random() * 5) + 1

if(theNum == "1"){
	CharacterMain.src='Images/Index/indexCHR1.png';
	CharacterBG.src='Images/Index/indexCHR1b.png';
	}
	else if(theNum == "2"){
    CharacterMain.src='Images/Index/indexCHR2.png';
	CharacterBG.src='Images/Index/indexCHR2b.png';
	}
	else if(theNum == "3"){
		CharacterMain.src='Images/Index/indexCHR3.png';
		CharacterBG.src='Images/Index/indexCHR3b.png';
	}
	else if(theNum == "4"){
		CharacterMain.src='Images/Index/indexCHR4.png';
		CharacterBG.src='Images/Index/indexCHR4b.png';
	}
	else if(theNum == "5"){
		CharacterMain.src='Images/Index/indexCHR5.png';
		CharacterBG.src='Images/Index/indexCHR5b.png';
	}
}
