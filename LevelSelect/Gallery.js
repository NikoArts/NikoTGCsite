// Gallery

var theNum = "0";
var Page = "0";

let arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255", "256", "257", "258", "259", "260", "261", "262", "263", "264", "265", "266", "267", "268", "269", "270", "271", "272", "273", "274", "275", "276", "277", "278", "279", "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", "290", "291", "292", "293", "294", "295", "296", "297", "298", "299", "300", "301", "302", "303", "304", "305", "306", "307", "308", "309", "310", "311", "312", "313", "314", "315", "316", "317", "318", "319", "320", "321", "322", "323", "324", "325", "326", "327", "328", "329", "330", "331", "332", "333", "334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348", "349", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "361", "362", "363", "364", "365", "366", "367", "368", "369", "370", "371", "372", "373", "374", "375", "376", "377", "378", "379", "380", "381", "382", "383", "384", "385", "386", "387", "388", "389", "390", "391", "392", "393", "394", "395", "396", "397", "398", "399", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "419", "420", "421", "422", "423", "424", "425", "426", "427", "428", "429", "430", "431", "432", "433", "434", "435", "436", "437", "438", "439", "440", "441", "442", "443", "444", "445", "446", "447", "448", "449", "450", "451", "452", "453", "454", "455", "456", "457", "458", "459", "460", "461", "462", "463", "464", "465", "466", "467", "468", "469", "470", "471", "472", "473", "474", "475", "476", "477", "478", "479", "480", "481", "482", "483", "484", "485", "486", "487", "488", "489", "490", "491", "492", "493", "494", "495", "496", "497", "498", "499", "500", "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512", "513", "514", "515", "516", "517", "518", "519", "520", "521", "522", "523", "524", "525", "526", "527", "528", "529", "530", "531", "532", "533", "534", "535", "536", "537", "538", "539", "540", "541", "542", "543", "544", "545", "546", "547", "548", "549", "550", "551", "552", "553", "554", "555", "556", "557", "558", "559", "560", "561", "562", "563", "564", "565", "566", "567", "568", "569", "570", "571", "572", "573", "574", "575", "576", "577", "578", "579", "580", "581", "582", "583", "584", "585", "586", "587", "588", "589", "590", "591", "592", "593", "594", "595", "596", "597", "598", "599", "600", "601", "602", "603", "604", "605", "606", "607", "608", "609", "610", "611", "612", "613", "614", "615"];
let Pagearr = ["000/615", "001/615", "002/615", "003/615", "004/615", "005/615", "006/615", "007/615", "008/615", "009/615", "010/615", "011/615", "012/615", "013/615", "014/615", "015/615", "016/615", "017/615", "018/615", "019/615", "020/615", "021/615", "022/615", "023/615", "024/615", "025/615", "026/615", "027/615", "028/615", "029/615", "030/615", "031/615", "032/615", "033/615", "034/615", "035/615", "036/615", "037/615", "038/615", "039/615", "040/615", "041/615", "042/615", "043/615", "044/615", "045/615", "046/615", "047/615", "048/615", "049/615", "050/615", "051/615", "052/615", "053/615", "054/615", "055/615", "056/615", "057/615", "058/615", "059/615", "060/615", "061/615", "062/615", "063/615", "064/615", "065/615", "066/615", "067/615", "068/615", "069/615", "070/615", "071/615", "072/615", "073/615", "074/615", "075/615", "076/615", "077/615", "078/615", "079/615", "080/615", "081/615", "082/615", "083/615", "084/615", "085/615", "086/615", "087/615", "088/615", "089/615", "090/615", "091/615", "092/615", "093/615", "094/615", "095/615", "096/615", "097/615", "098/615", "099/615", "100/615", "101/615", "102/615", "103/615", "104/615", "105/615", "106/615", "107/615", "108/615", "109/615", "110/615", "111/615", "112/615", "113/615", "114/615", "115/615", "116/615", "117/615", "118/615", "119/615", "120/615", "121/615", "122/615", "123/615", "124/615", "125/615", "126/615", "127/615", "128/615", "129/615", "130/615", "131/615", "132/615", "133/615", "134/615", "135/615", "136/615", "137/615", "138/615", "139/615", "140/615", "141/615", "142/615", "143/615", "144/615", "145/615", "146/615", "147/615", "148/615", "149/615", "150/615", "151/615", "152/615", "153/615", "154/615", "155/615", "156/615", "157/615", "158/615", "159/615", "160/615", "161/615", "162/615", "163/615", "164/615", "165/615", "166/615", "167/615", "168/615", "169/615", "170/615", "171/615", "172/615", "173/615", "174/615", "175/615", "176/615", "177/615", "178/615", "179/615", "180/615", "181/615", "182/615", "183/615", "184/615", "185/615", "186/615", "187/615", "188/615", "189/615", "190/615", "191/615", "192/615", "193/615", "194/615", "195/615", "196/615", "197/615", "198/615", "199/615", "200/615", "201/615", "202/615", "203/615", "204/615", "205/615", "206/615", "207/615", "208/615", "209/615", "210/615", "211/615", "212/615", "213/615", "214/615", "215/615", "216/615", "217/615", "218/615", "219/615", "220/615", "221/615", "222/615", "223/615", "224/615", "225/615", "226/615", "227/615", "228/615", "229/615", "230/615", "231/615", "232/615", "233/615", "234/615", "235/615", "236/615", "237/615", "238/615", "239/615", "240/615", "241/615", "242/615", "243/615", "244/615", "245/615", "246/615", "247/615", "248/615", "249/615", "250/615", "251/615", "252/615", "253/615", "254/615", "255/615", "256/615", "257/615", "258/615", "259/615", "260/615", "261/615", "262/615", "263/615", "264/615", "265/615", "266/615", "267/615", "268/615", "269/615", "270/615", "271/615", "272/615", "273/615", "274/615", "275/615", "276/615", "277/615", "278/615", "279/615", "280/615", "281/615", "282/615", "283/615", "284/615", "285/615", "286/615", "287/615", "288/615", "289/615", "290/615", "291/615", "292/615", "293/615", "294/615", "295/615", "296/615", "297/615", "298/615", "299/615", "300/615", "301/615", "302/615", "303/615", "304/615", "305/615", "306/615", "307/615", "308/615", "309/615", "310/615", "311/615", "312/615", "313/615", "314/615", "315/615", "316/615", "317/615", "318/615", "319/615", "320/615", "321/615", "322/615", "323/615", "324/615", "325/615", "326/615", "327/615", "328/615", "329/615", "330/615", "331/615", "332/615", "333/615", "334/615", "335/615", "336/615", "337/615", "338/615", "339/615", "340/615", "341/615", "342/615", "343/615", "344/615", "345/615", "346/615", "347/615", "348/615", "349/615", "350/615", "351/615", "352/615", "353/615", "354/615", "355/615", "356/615", "357/615", "358/615", "359/615", "360/615", "361/615", "362/615", "363/615", "364/615", "365/615", "366/615", "367/615", "368/615", "369/615", "370/615", "371/615", "372/615", "373/615", "374/615", "375/615", "376/615", "377/615", "378/615", "379/615", "380/615", "381/615", "382/615", "383/615", "384/615", "385/615", "386/615", "387/615", "388/615", "389/615", "390/615", "391/615", "392/615", "393/615", "394/615", "395/615", "396/615", "397/615", "398/615", "399/615", "400/615", "401/615", "402/615", "403/615", "404/615", "405/615", "406/615", "407/615", "408/615", "409/615", "410/615", "411/615", "412/615", "413/615", "414/615", "415/615", "416/615", "417/615", "418/615", "419/615", "420/615", "421/615", "422/615", "423/615", "424/615", "425/615", "426/615", "427/615", "428/615", "429/615", "430/615", "431/615", "432/615", "433/615", "434/615", "435/615", "436/615", "437/615", "438/615", "439/615", "440/615", "441/615", "442/615", "443/615", "444/615", "445/615", "446/615", "447/615", "448/615", "449/615", "450/615", "451/615", "452/615", "453/615", "454/615", "455/615", "456/615", "457/615", "458/615", "459/615", "460/615", "461/615", "462/615", "463/615", "464/615", "465/615", "466/615", "467/615", "468/615", "469/615", "470/615", "471/615", "472/615", "473/615", "474/615", "475/615", "476/615", "477/615", "478/615", "479/615", "480/615", "481/615", "482/615", "483/615", "484/615", "485/615", "486/615", "487/615", "488/615", "489/615", "490/615", "491/615", "492/615", "493/615", "494/615", "495/615", "496/615", "497/615", "498/615", "499/615", "500/615", "501/615", "502/615", "503/615", "504/615", "505/615", "506/615", "507/615", "508/615", "509/615", "510/615", "511/615", "512/615", "513/615", "514/615", "515/615", "516/615", "517/615", "518/615", "519/615", "520/615", "521/615", "522/615", "523/615", "524/615", "525/615", "526/615", "527/615", "528/615", "529/615", "530/615", "531/615", "532/615", "533/615", "534/615", "535/615", "536/615", "537/615", "538/615", "539/615", "540/615", "541/615", "542/615", "543/615", "544/615", "545/615", "546/615", "547/615", "548/615", "549/615", "550/615", "551/615", "552/615", "553/615", "554/615", "555/615", "556/615", "557/615", "558/615", "559/615", "560/615", "561/615", "562/615", "563/615", "564/615", "565/615", "566/615", "567/615", "568/615", "569/615", "570/615", "571/615", "572/615", "573/615", "574/615", "575/615", "576/615", "577/615", "578/615", "579/615", "580/615", "581/615", "582/615", "583/615", "584/615", "585/615", "586/615", "587/615", "588/615", "589/615", "590/615", "591/615", "592/615", "593/615", "594/615", "595/615", "596/615", "597/615", "598/615", "599/615", "600/615", "601/615", "602/615", "603/615", "604/615", "605/615", "606/615", "607/615", "608/615", "609/615", "610/615", "611/615", "612/615", "613/615", "614/615", "615/615"];

function go_to_right()

{
theNum++;
Page++;
if(theNum == arr.length){theNum="0";}
window.scrollTo({
		top: 0,
	});
document.getElementById("ComicsInfo").innerHTML = 'Comics Page: '+Pagearr[theNum]+'';


if(theNum == "0"){ change_image_2.src='../Images/Asks.png'; }
if(theNum == "1"){ change_image_2.src='../Images/Author.png'; }
if(theNum == "2"){ change_image_2.src='../Images/BackArrow.png'; }
if(theNum == "3"){ change_image_2.src='../Images/Button_Home.png'; }
if(theNum == "4"){ change_image_2.src='../Images/Changes.png'; }
if(theNum == "5"){ change_image_2.src='../Images/Comics.png'; }
if(theNum == "6"){ change_image_2.src='../Images/CreditsPick1.png'; }
if(theNum == "7"){ change_image_2.src='../Images/CreditsPick2.png'; }
if(theNum == "8"){ change_image_2.src='../Images/EnterButton.png'; }
if(theNum == "9"){ change_image_2.src='../Images/FanUniverses.png'; }
if(theNum == "10"){ change_image_2.src='../Images/Funny.png'; }
if(theNum == "11"){ change_image_2.src='../Images/icon.png'; }
if(theNum == "12"){ change_image_2.src='../Images/Links.png'; }
if(theNum == "13"){ change_image_2.src='../Images/LittleBish.png'; }
if(theNum == "14"){ change_image_2.src='../Images/MenuPick1.png'; }
if(theNum == "15"){ change_image_2.src='../Images/MenuPick2.png'; }
if(theNum == "16"){ change_image_2.src='../Images/owo.png'; }
if(theNum == "17"){ change_image_2.src='../Images/PickerBase.png'; }
if(theNum == "18"){ change_image_2.src='../Images/PlaceHolder.png'; }
if(theNum == "19"){ change_image_2.src='../Images/Sleeping Niko.gif'; }
if(theNum == "20"){ change_image_2.src='../Images/Universes.png'; }
if(theNum == "21"){ change_image_2.src='../Images/WIP.png'; }
if(theNum == "22"){ change_image_2.src='../Images/СomicsLeftArrow.png'; }
if(theNum == "23"){ change_image_2.src='../Images/СomicsRightArrow.png'; }
if(theNum == "24"){ change_image_2.src='../Images/Asks/GraelTale.png'; }
if(theNum == "25"){ change_image_2.src='../Images/Asks/LycanTale.png'; }
if(theNum == "26"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (1).jpg'; }
if(theNum == "27"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (2).jpg'; }
if(theNum == "28"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (3).jpg'; }
if(theNum == "29"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (4).jpg'; }
if(theNum == "30"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (5).jpg'; }
if(theNum == "31"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (6).jpg'; }
if(theNum == "32"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (7).jpg'; }
if(theNum == "33"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (8).jpg'; }
if(theNum == "34"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (9).jpg'; }
if(theNum == "35"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (1).jpg'; }
if(theNum == "36"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (2).jpg'; }
if(theNum == "37"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (3).jpg'; }
if(theNum == "38"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (4).jpg'; }
if(theNum == "39"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (5).jpg'; }
if(theNum == "40"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (6).jpg'; }
if(theNum == "41"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (7).jpg'; }
if(theNum == "42"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (8).jpg'; }
if(theNum == "43"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (9).jpg'; }
if(theNum == "44"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (10).jpg'; }
if(theNum == "45"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (11).jpg'; }
if(theNum == "46"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (12).jpg'; }
if(theNum == "47"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (13).jpg'; }
if(theNum == "48"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (14).jpg'; }
if(theNum == "49"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (15).jpg'; }
if(theNum == "50"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (16).jpg'; }
if(theNum == "51"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (17).jpg'; }
if(theNum == "52"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (18).jpg'; }
if(theNum == "53"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (19).jpg'; }
if(theNum == "54"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (20).jpg'; }
if(theNum == "55"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (21).jpg'; }
if(theNum == "56"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (22).jpg'; }
if(theNum == "57"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (23).jpg'; }
if(theNum == "58"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (24).jpg'; }
if(theNum == "59"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (25).jpg'; }
if(theNum == "60"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (26).jpg'; }
if(theNum == "61"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (27).jpg'; }
if(theNum == "62"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (28).jpg'; }
if(theNum == "63"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (29).jpg'; }
if(theNum == "64"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (30).jpg'; }
if(theNum == "65"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (31).jpg'; }
if(theNum == "66"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (32).jpg'; }
if(theNum == "67"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (33).jpg'; }
if(theNum == "68"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (34).jpg'; }
if(theNum == "69"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (35).jpg'; }
if(theNum == "70"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (36).jpg'; }
if(theNum == "71"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (37).jpg'; }
if(theNum == "72"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (38).jpg'; }
if(theNum == "73"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (39).jpg'; }
if(theNum == "74"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (40).jpg'; }
if(theNum == "75"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (41).jpg'; }
if(theNum == "76"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (42).jpg'; }
if(theNum == "77"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (43).jpg'; }
if(theNum == "78"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (44).jpg'; }
if(theNum == "79"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (45).jpg'; }
if(theNum == "80"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (46).jpg'; }
if(theNum == "81"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (47).jpg'; }
if(theNum == "82"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (48).jpg'; }
if(theNum == "83"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (49).jpg'; }
if(theNum == "84"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (50).jpg'; }
if(theNum == "85"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (51).jpg'; }
if(theNum == "86"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (52).jpg'; }
if(theNum == "87"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (53).jpg'; }
if(theNum == "88"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (54).jpg'; }
if(theNum == "89"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (55).jpg'; }
if(theNum == "90"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (56).jpg'; }
if(theNum == "91"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (57).jpg'; }
if(theNum == "92"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (58).jpg'; }
if(theNum == "93"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (59).jpg'; }
if(theNum == "94"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (60).jpg'; }
if(theNum == "95"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (61).jpg'; }
if(theNum == "96"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (62).jpg'; }
if(theNum == "97"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (63).jpg'; }
if(theNum == "98"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (64).jpg'; }
if(theNum == "99"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (65).jpg'; }
if(theNum == "100"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (66).jpg'; }
if(theNum == "101"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (67).jpg'; }
if(theNum == "102"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (68).jpg'; }
if(theNum == "103"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (69).jpg'; }
if(theNum == "104"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (70).jpg'; }
if(theNum == "105"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (71).jpg'; }
if(theNum == "106"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (72).jpg'; }
if(theNum == "107"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (73).jpg'; }
if(theNum == "108"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (74).jpg'; }
if(theNum == "109"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (75).jpg'; }
if(theNum == "110"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (76).jpg'; }
if(theNum == "111"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (77).jpg'; }
if(theNum == "112"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (78).jpg'; }
if(theNum == "113"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (79).jpg'; }
if(theNum == "114"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (80).jpg'; }
if(theNum == "115"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (81).jpg'; }
if(theNum == "116"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (82).jpg'; }
if(theNum == "117"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (83).jpg'; }
if(theNum == "118"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (84).jpg'; }
if(theNum == "119"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (85).jpg'; }
if(theNum == "120"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (86).jpg'; }
if(theNum == "121"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (87).jpg'; }
if(theNum == "122"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (88).jpg'; }
if(theNum == "123"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (89).jpg'; }
if(theNum == "124"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (90).jpg'; }
if(theNum == "125"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (91).jpg'; }
if(theNum == "126"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (92).jpg'; }
if(theNum == "127"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (93).jpg'; }
if(theNum == "128"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (94).jpg'; }
if(theNum == "129"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (95).jpg'; }
if(theNum == "130"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (96).jpg'; }
if(theNum == "131"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (97).jpg'; }
if(theNum == "132"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (98).jpg'; }
if(theNum == "133"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (99).jpg'; }
if(theNum == "134"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (100).jpg'; }
if(theNum == "135"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (101).jpg'; }
if(theNum == "136"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (102).jpg'; }
if(theNum == "137"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (103).jpg'; }
if(theNum == "138"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (104).jpg'; }
if(theNum == "139"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (105).jpg'; }
if(theNum == "140"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (106).jpg'; }
if(theNum == "141"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (107).jpg'; }
if(theNum == "142"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (108).jpg'; }
if(theNum == "143"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (109).jpg'; }
if(theNum == "144"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (120).jpg'; }
if(theNum == "145"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (121).jpg'; }
if(theNum == "146"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (122).jpg'; }
if(theNum == "147"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (123).jpg'; }
if(theNum == "148"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (124).jpg'; }
if(theNum == "149"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (125).jpg'; }
if(theNum == "150"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (126).jpg'; }
if(theNum == "151"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (127).jpg'; }
if(theNum == "152"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (128).jpg'; }
if(theNum == "153"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (129).jpg'; }
if(theNum == "154"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (130).jpg'; }
if(theNum == "155"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (131).jpg'; }
if(theNum == "156"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (132).jpg'; }
if(theNum == "157"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (133).jpg'; }
if(theNum == "158"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (134).jpg'; }
if(theNum == "159"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (135).jpg'; }
if(theNum == "160"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (136).jpg'; }
if(theNum == "161"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (137).jpg'; }
if(theNum == "162"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (138).jpg'; }
if(theNum == "163"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (139).jpg'; }
if(theNum == "164"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (140).jpg'; }
if(theNum == "165"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (141).jpg'; }
if(theNum == "166"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (142).jpg'; }
if(theNum == "167"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (143).jpg'; }
if(theNum == "168"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (144).jpg'; }
if(theNum == "169"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (145).jpg'; }
if(theNum == "170"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (146).jpg'; }
if(theNum == "171"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (147).jpg'; }
if(theNum == "172"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (148).jpg'; }
if(theNum == "173"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (149).jpg'; }
if(theNum == "174"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (150).jpg'; }
if(theNum == "175"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (151).jpg'; }
if(theNum == "176"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (152).jpg'; }
if(theNum == "177"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (153).jpg'; }
if(theNum == "178"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (154).jpg'; }
if(theNum == "179"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (155).jpg'; }
if(theNum == "180"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (156).jpg'; }
if(theNum == "181"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (157).jpg'; }
if(theNum == "182"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (158).jpg'; }
if(theNum == "183"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (159).jpg'; }
if(theNum == "184"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (160).jpg'; }
if(theNum == "185"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (161).jpg'; }
if(theNum == "186"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (162).jpg'; }
if(theNum == "187"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (163).jpg'; }
if(theNum == "188"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (164).jpg'; }
if(theNum == "189"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (165).jpg'; }
if(theNum == "190"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (166).jpg'; }
if(theNum == "191"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (167).jpg'; }
if(theNum == "192"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (168).jpg'; }
if(theNum == "193"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (169).jpg'; }
if(theNum == "194"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (170).jpg'; }
if(theNum == "195"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (171).jpg'; }
if(theNum == "196"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (172).jpg'; }
if(theNum == "197"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (173).jpg'; }
if(theNum == "198"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (174).jpg'; }
if(theNum == "199"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (175).jpg'; }
if(theNum == "200"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (176).jpg'; }
if(theNum == "201"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (177).jpg'; }
if(theNum == "202"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (178).jpg'; }
if(theNum == "203"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (179).jpg'; }
if(theNum == "204"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (180).jpg'; }
if(theNum == "205"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (181).jpg'; }
if(theNum == "206"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (182).jpg'; }
if(theNum == "207"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (183).jpg'; }
if(theNum == "208"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (184).jpg'; }
if(theNum == "209"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (185).jpg'; }
if(theNum == "210"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (186).jpg'; }
if(theNum == "211"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (187).jpg'; }
if(theNum == "212"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (188).jpg'; }
if(theNum == "213"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (189).jpg'; }
if(theNum == "214"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (190).jpg'; }
if(theNum == "215"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (191).jpg'; }
if(theNum == "216"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (192).jpg'; }
if(theNum == "217"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (193).jpg'; }
if(theNum == "218"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (194).jpg'; }
if(theNum == "219"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (195).jpg'; }
if(theNum == "220"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (196).jpg'; }
if(theNum == "221"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (197).jpg'; }
if(theNum == "222"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (198).jpg'; }
if(theNum == "223"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (199).jpg'; }
if(theNum == "224"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (201).jpg'; }
if(theNum == "225"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (202).jpg'; }
if(theNum == "226"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (203).jpg'; }
if(theNum == "227"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (204).jpg'; }
if(theNum == "228"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (205).jpg'; }
if(theNum == "229"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (206).jpg'; }
if(theNum == "230"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (207).jpg'; }
if(theNum == "231"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (208).jpg'; }
if(theNum == "232"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (209).jpg'; }
if(theNum == "233"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (210).jpg'; }
if(theNum == "234"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (211).jpg'; }
if(theNum == "235"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (212).jpg'; }
if(theNum == "236"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (213).jpg'; }
if(theNum == "237"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (214).jpg'; }
if(theNum == "238"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (215).jpg'; }
if(theNum == "239"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (216).jpg'; }
if(theNum == "240"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (217).jpg'; }
if(theNum == "241"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (218).jpg'; }
if(theNum == "242"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (219).jpg'; }
if(theNum == "243"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (220).jpg'; }
if(theNum == "244"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (221).jpg'; }
if(theNum == "245"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (222).jpg'; }
if(theNum == "246"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (223).jpg'; }
if(theNum == "247"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (223).jpg'; }
if(theNum == "248"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (224).jpg'; }
if(theNum == "249"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (225).jpg'; }
if(theNum == "250"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (226).jpg'; }
if(theNum == "251"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (227).jpg'; }
if(theNum == "252"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (228).jpg'; }
if(theNum == "253"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (229).jpg'; }
if(theNum == "254"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (230).jpg'; }
if(theNum == "255"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (231).jpg'; }
if(theNum == "256"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (232).jpg'; }
if(theNum == "257"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (233).jpg'; }
if(theNum == "258"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (234).jpg'; }
if(theNum == "259"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (235).jpg'; }
if(theNum == "260"){ change_image_2.src='../Images/Author/Niko0.png'; }
if(theNum == "261"){ change_image_2.src='../Images/Author/Niko1.png'; }
if(theNum == "262"){ change_image_2.src='../Images/Author/Niko2.png'; }
if(theNum == "263"){ change_image_2.src='../Images/Author/Niko3.png'; }
if(theNum == "264"){ change_image_2.src='../Images/Author/Niko4.png'; }
if(theNum == "265"){ change_image_2.src='../Images/Author/Niko5.png'; }
if(theNum == "266"){ change_image_2.src='../Images/Author/Niko6.png'; }
if(theNum == "267"){ change_image_2.src='../Images/Author/Niko7.png'; }
if(theNum == "268"){ change_image_2.src='../Images/Author/Niko8.png'; }
if(theNum == "269"){ change_image_2.src='../Images/Author/Niko9.png'; }
if(theNum == "270"){ change_image_2.src='../Images/Author/Niko10.png'; }
if(theNum == "271"){ change_image_2.src='../Images/Author/Niko11.png'; }
if(theNum == "272"){ change_image_2.src='../Images/Author/Niko12.png'; }
if(theNum == "273"){ change_image_2.src='../Images/Author/Niko13.png'; }
if(theNum == "274"){ change_image_2.src='../Images/Author/Niko14.png'; }
if(theNum == "275"){ change_image_2.src='../Images/Author/Niko15a.png'; }
if(theNum == "276"){ change_image_2.src='../Images/Author/Niko15b.png'; }
if(theNum == "277"){ change_image_2.src='../Images/Author/Niko16.png'; }
if(theNum == "278"){ change_image_2.src='../Images/Author/Chibi/SmolNiko0.png'; }
if(theNum == "279"){ change_image_2.src='../Images/Author/Chibi/SmolNiko1.png'; }
if(theNum == "280"){ change_image_2.src='../Images/Author/Chibi/SmolNiko2.png'; }
if(theNum == "281"){ change_image_2.src='../Images/Author/Chibi/SmolNiko3.png'; }
if(theNum == "282"){ change_image_2.src='../Images/Author/Chibi/SmolNiko4.png'; }
if(theNum == "283"){ change_image_2.src='../Images/Author/Chibi/SmolNiko5.png'; }
if(theNum == "284"){ change_image_2.src='../Images/Author/Chibi/SmolNiko6.png'; }
if(theNum == "285"){ change_image_2.src='../Images/Author/Chibi/SmolNiko7.png'; }
if(theNum == "286"){ change_image_2.src='../Images/Author/Chibi/SmolNiko8.png'; }
if(theNum == "287"){ change_image_2.src='../Images/Author/Chibi/SmolNiko9.png'; }
if(theNum == "288"){ change_image_2.src='../Images/Author/Chibi/SmolNiko10.png'; }
if(theNum == "289"){ change_image_2.src='../Images/Author/Chibi/SmolNiko11.png'; }
if(theNum == "290"){ change_image_2.src='../Images/Author/Chibi/SmolNiko12.png'; }
if(theNum == "291"){ change_image_2.src='../Images/Author/Chibi/SmolNiko13.png'; }
if(theNum == "292"){ change_image_2.src='../Images/Author/Chibi/SmolNiko14.png'; }
if(theNum == "293"){ change_image_2.src='../Images/Author/Chibi/SmolNiko15a.png'; }
if(theNum == "294"){ change_image_2.src='../Images/Author/Chibi/SmolNiko15b.png'; }
if(theNum == "295"){ change_image_2.src='../Images/Author/Chibi/SmolNiko16.png'; }
if(theNum == "296"){ change_image_2.src='../Images/Author/Icons/N0.png'; }
if(theNum == "297"){ change_image_2.src='../Images/Author/Icons/N1.png'; }
if(theNum == "298"){ change_image_2.src='../Images/Author/Icons/N2.png'; }
if(theNum == "299"){ change_image_2.src='../Images/Author/Icons/N3.png'; }
if(theNum == "300"){ change_image_2.src='../Images/Author/Icons/N4.png'; }
if(theNum == "301"){ change_image_2.src='../Images/Author/Icons/N5.png'; }
if(theNum == "302"){ change_image_2.src='../Images/Author/Icons/N6.png'; }
if(theNum == "303"){ change_image_2.src='../Images/Author/Icons/N7.png'; }
if(theNum == "304"){ change_image_2.src='../Images/Author/Icons/N8.png'; }
if(theNum == "305"){ change_image_2.src='../Images/Author/Icons/N9.png'; }
if(theNum == "306"){ change_image_2.src='../Images/Author/Icons/N10.png'; }
if(theNum == "307"){ change_image_2.src='../Images/Author/Icons/N11.png'; }
if(theNum == "308"){ change_image_2.src='../Images/Author/Icons/N12.png'; }
if(theNum == "309"){ change_image_2.src='../Images/Author/Icons/N13.png'; }
if(theNum == "310"){ change_image_2.src='../Images/Author/Icons/N14.png'; }
if(theNum == "311"){ change_image_2.src='../Images/Author/Icons/N15.png'; }
if(theNum == "312"){ change_image_2.src='../Images/Author/Icons/N15a.png'; }
if(theNum == "313"){ change_image_2.src='../Images/Author/Icons/N15b.png'; }
if(theNum == "314"){ change_image_2.src='../Images/Author/Icons/N16.png'; }
if(theNum == "315"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventureBETA.png'; }
if(theNum == "316"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventurePREVIEW.png'; }
if(theNum == "317"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 01.png'; }
if(theNum == "318"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 02.png'; }
if(theNum == "319"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 11.png'; }
if(theNum == "320"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 12.png'; }
if(theNum == "321"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 21.png'; }
if(theNum == "322"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_1.png'; }
if(theNum == "323"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_2.png'; }
if(theNum == "324"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_3.png'; }
if(theNum == "325"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_4.png'; }
if(theNum == "326"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_5.png'; }
if(theNum == "327"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_6.png'; }
if(theNum == "328"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_7.png'; }
if(theNum == "329"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_8.png'; }
if(theNum == "330"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_9.png'; }
if(theNum == "331"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_10.png'; }
if(theNum == "332"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_11.png'; }
if(theNum == "333"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_12.png'; }
if(theNum == "334"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_13.png'; }
if(theNum == "335"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_14.png'; }
if(theNum == "336"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_15.png'; }
if(theNum == "337"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_16.png'; }
if(theNum == "338"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_17.png'; }
if(theNum == "339"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_18.png'; }
if(theNum == "340"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_19.png'; }
if(theNum == "341"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_20.png'; }
if(theNum == "342"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_21.png'; }
if(theNum == "343"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_22.png'; }
if(theNum == "344"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_23.png'; }
if(theNum == "345"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_24.png'; }
if(theNum == "346"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_25.png'; }
if(theNum == "347"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_26.png'; }
if(theNum == "348"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_27.png'; }
if(theNum == "349"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_28.png'; }
if(theNum == "350"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_29.png'; }
if(theNum == "351"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_30.png'; }
if(theNum == "352"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_31.png'; }
if(theNum == "353"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_32.png'; }
if(theNum == "354"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_33.png'; }
if(theNum == "355"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_34.png'; }
if(theNum == "356"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_35.png'; }
if(theNum == "357"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_36.png'; }
if(theNum == "358"){ change_image_2.src='../Images/FanUniverses/OtherArts/Exes.png'; }
if(theNum == "359"){ change_image_2.src='../Images/FanUniverses/OtherArts/GraelTale art.png'; }
if(theNum == "360"){ change_image_2.src='../Images/FanUniverses/OtherArts/GraelTale_Alphy.png'; }
if(theNum == "361"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG1.png'; }
if(theNum == "362"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG10.png'; }
if(theNum == "363"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG2.png'; }
if(theNum == "364"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG3.png'; }
if(theNum == "365"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG4.png'; }
if(theNum == "366"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG5.png'; }
if(theNum == "367"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG6.png'; }
if(theNum == "368"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG7.png'; }
if(theNum == "369"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG8.png'; }
if(theNum == "370"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG9.png'; }
if(theNum == "371"){ change_image_2.src='../Images/FanUniverses/OtherArts/ProjectGlitchChaosMangaPage.png'; }
if(theNum == "372"){ change_image_2.src='../Images/Gameplay/Circles.png'; }
if(theNum == "373"){ change_image_2.src='../Images/Gameplay/Overlay2.png'; }
if(theNum == "374"){ change_image_2.src='../Images/Gameplay/Smoke.png'; }
if(theNum == "375"){ change_image_2.src='../Images/Gameplay/Star.png'; }
if(theNum == "376"){ change_image_2.src='../Images/Icons/Dafna.png'; }
if(theNum == "377"){ change_image_2.src='../Images/Icons/Dark.png'; }
if(theNum == "378"){ change_image_2.src='../Images/Icons/FreeNom.png'; }
if(theNum == "379"){ change_image_2.src='../Images/Icons/Georg.png'; }
if(theNum == "380"){ change_image_2.src='../Images/Icons/Github.png'; }
if(theNum == "381"){ change_image_2.src='../Images/Icons/Kersive.png'; }
if(theNum == "382"){ change_image_2.src='../Images/Icons/KG.png'; }
if(theNum == "383"){ change_image_2.src='../Images/Icons/Kit.png'; }
if(theNum == "384"){ change_image_2.src='../Images/Icons/Leyter.png'; }
if(theNum == "385"){ change_image_2.src='../Images/Icons/Lia.png'; }
if(theNum == "386"){ change_image_2.src='../Images/Icons/Mash.png'; }
if(theNum == "387"){ change_image_2.src='../Images/Icons/Mih.png'; }
if(theNum == "388"){ change_image_2.src='../Images/Icons/Minecraft.png'; }
if(theNum == "389"){ change_image_2.src='../Images/Icons/Minoko.png'; }
if(theNum == "390"){ change_image_2.src='../Images/Icons/NikoArts.png'; }
if(theNum == "391"){ change_image_2.src='../Images/Icons/Nola.png'; }
if(theNum == "392"){ change_image_2.src='../Images/Icons/Roma.png'; }
if(theNum == "393"){ change_image_2.src='../Images/Icons/Skittles.png'; }
if(theNum == "394"){ change_image_2.src='../Images/Icons/Solen.png'; }
if(theNum == "395"){ change_image_2.src='../Images/Icons/Sonic.png'; }
if(theNum == "396"){ change_image_2.src='../Images/Icons/UT.png'; }
if(theNum == "397"){ change_image_2.src='../Images/Index/BG1.png'; }
if(theNum == "398"){ change_image_2.src='../Images/Index/BG2.png'; }
if(theNum == "399"){ change_image_2.src='../Images/Index/BG3.png'; }
if(theNum == "400"){ change_image_2.src='../Images/Index/BG4.png'; }
if(theNum == "401"){ change_image_2.src='../Images/Index/BG5.png'; }
if(theNum == "402"){ change_image_2.src='../Images/Index/Button_1a.png'; }
if(theNum == "403"){ change_image_2.src='../Images/Index/Button_1b.png'; }
if(theNum == "404"){ change_image_2.src='../Images/Index/Button_2a.png'; }
if(theNum == "405"){ change_image_2.src='../Images/Index/Button_2b.png'; }
if(theNum == "406"){ change_image_2.src='../Images/Index/Button_3a.png'; }
if(theNum == "407"){ change_image_2.src='../Images/Index/Button_3b.png'; }
if(theNum == "408"){ change_image_2.src='../Images/Index/Button_4a.png'; }
if(theNum == "409"){ change_image_2.src='../Images/Index/Button_1b.png'; }
if(theNum == "410"){ change_image_2.src='../Images/Index/Index2PH.png'; }
if(theNum == "411"){ change_image_2.src='../Images/Index/IndexButton1PH.png'; }
if(theNum == "412"){ change_image_2.src='../Images/Index/IndexButton2PH.png'; }
if(theNum == "413"){ change_image_2.src='../Images/Index/indexCHR1.png'; }
if(theNum == "414"){ change_image_2.src='../Images/Index/indexCHR1b.png'; }
if(theNum == "415"){ change_image_2.src='../Images/Index/indexCHR2.png'; }
if(theNum == "416"){ change_image_2.src='../Images/Index/indexCHR2b.png'; }
if(theNum == "417"){ change_image_2.src='../Images/Index/indexCHR3.png'; }
if(theNum == "418"){ change_image_2.src='../Images/Index/indexCHR3b.png'; }
if(theNum == "419"){ change_image_2.src='../Images/Index/indexCHR4.png'; }
if(theNum == "420"){ change_image_2.src='../Images/Index/indexCHR4b.png'; }
if(theNum == "421"){ change_image_2.src='../Images/Index/indexCHR5.png'; }
if(theNum == "422"){ change_image_2.src='../Images/Index/indexCHR5b.png'; }
if(theNum == "423"){ change_image_2.src='../Images/Index/Logo.png'; }
if(theNum == "424"){ change_image_2.src='../Images/Index/NewIndexBase.png'; }
if(theNum == "425"){ change_image_2.src='../Images/PostsArts/KeterruArt.png'; }
if(theNum == "426"){ change_image_2.src='../Images/PostsArts/Niko x Nola ShipKids.png'; }
if(theNum == "427"){ change_image_2.src='../Images/PostsArts/NikoXNola Valentine Art.png'; }
if(theNum == "428"){ change_image_2.src='../Images/PostsArts/Rals.gif'; }
if(theNum == "429"){ change_image_2.src='../Images/Universes/01 - FirstWorldRemake.png'; }
if(theNum == "430"){ change_image_2.src='../Images/Universes/02 - GlitchFontRemake.png'; }
if(theNum == "431"){ change_image_2.src='../Images/Universes/03 - TheLivingCharmRemake.png'; }
if(theNum == "432"){ change_image_2.src='../Images/Universes/05 - PhantomChaos.png'; }
if(theNum == "433"){ change_image_2.src='../Images/Universes/06 - GlitchSlimes.png'; }
if(theNum == "434"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_1.png'; }
if(theNum == "435"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_2.png'; }
if(theNum == "436"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_3.1.png'; }
if(theNum == "437"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_3.2.png'; }
if(theNum == "438"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_3.png'; }
if(theNum == "439"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_4.png'; }
if(theNum == "440"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_5.png'; }
if(theNum == "441"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_6.png'; }
if(theNum == "442"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_7.png'; }
if(theNum == "443"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_1.png'; }
if(theNum == "444"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_2.png'; }
if(theNum == "445"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_3.png'; }
if(theNum == "446"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_4.png'; }
if(theNum == "447"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_5.png'; }
if(theNum == "448"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_6.png'; }
if(theNum == "449"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_7.png'; }
if(theNum == "450"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_8.png'; }
if(theNum == "451"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_9.png'; }
if(theNum == "452"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_10.png'; }
if(theNum == "453"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_11.png'; }
if(theNum == "454"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_12.png'; }
if(theNum == "455"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_1.png'; }
if(theNum == "456"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_2.png'; }
if(theNum == "457"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_3.png'; }
if(theNum == "458"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_4.png'; }
if(theNum == "459"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_5.png'; }
if(theNum == "460"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_6.png'; }
if(theNum == "461"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_7.png'; }
if(theNum == "462"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_8.png'; }
if(theNum == "463"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_9.png'; }
if(theNum == "464"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_10.png'; }
if(theNum == "465"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_11.png'; }
if(theNum == "466"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_12.png'; }
if(theNum == "467"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_13.png'; }
if(theNum == "468"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_14.png'; }
if(theNum == "469"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_15.png'; }
if(theNum == "470"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_16.png'; }
if(theNum == "471"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_1.png'; }
if(theNum == "472"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_2.png'; }
if(theNum == "473"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_3.png'; }
if(theNum == "474"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_4.png'; }
if(theNum == "475"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_5.png'; }
if(theNum == "476"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_6.png'; }
if(theNum == "477"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_7.png'; }
if(theNum == "478"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_8.png'; }
if(theNum == "479"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_9.png'; }
if(theNum == "480"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_10.png'; }
if(theNum == "481"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_11.png'; }
if(theNum == "482"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_12.png'; }
if(theNum == "483"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_13.png'; }
if(theNum == "484"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_14.png'; }
if(theNum == "485"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_15.png'; }
if(theNum == "486"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_16.png'; }
if(theNum == "487"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_17.png'; }
if(theNum == "488"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_18.png'; }
if(theNum == "489"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_19.png'; }
if(theNum == "490"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_20.png'; }
if(theNum == "491"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_21.png'; }
if(theNum == "492"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_22.png'; }
if(theNum == "493"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_23.png'; }
if(theNum == "494"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_24.png'; }
if(theNum == "495"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_25.png'; }
if(theNum == "496"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_26.png'; }
if(theNum == "497"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_1.png'; }
if(theNum == "498"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_2.png'; }
if(theNum == "499"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_3.png'; }
if(theNum == "500"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_4.png'; }
if(theNum == "501"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_5.png'; }
if(theNum == "502"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_6.png'; }
if(theNum == "503"){ change_image_2.src='../Images/Universes/OtherArts/00- Dikot (1).png'; }
if(theNum == "504"){ change_image_2.src='../Images/Universes/OtherArts/00- Dikot (2).png'; }
if(theNum == "505"){ change_image_2.src='../Images/Universes/OtherArts/AiriArt.png'; }
if(theNum == "506"){ change_image_2.src='../Images/Universes/OtherArts/Ami art.png'; }
if(theNum == "507"){ change_image_2.src='../Images/Universes/OtherArts/AnimeScene.png'; }
if(theNum == "508"){ change_image_2.src='../Images/Universes/OtherArts/Arial_art.png'; }
if(theNum == "509"){ change_image_2.src='../Images/Universes/OtherArts/Aster_N_Arial_art.png'; }
if(theNum == "510"){ change_image_2.src='../Images/Universes/OtherArts/CeaHU8LDaFQ.jpg'; }
if(theNum == "511"){ change_image_2.src='../Images/Universes/OtherArts/Commision1.png'; }
if(theNum == "512"){ change_image_2.src='../Images/Universes/OtherArts/Commision2.png'; }
if(theNum == "513"){ change_image_2.src='../Images/Universes/OtherArts/Commision3.png'; }
if(theNum == "514"){ change_image_2.src='../Images/Universes/OtherArts/EllieThingidk.png'; }
if(theNum == "515"){ change_image_2.src='../Images/Universes/OtherArts/Ellie_art_2.png'; }
if(theNum == "516"){ change_image_2.src='../Images/Universes/OtherArts/ellie_realistic_concept.png'; }
if(theNum == "517"){ change_image_2.src='../Images/Universes/OtherArts/EnderTheGlitch.png'; }
if(theNum == "518"){ change_image_2.src='../Images/Universes/OtherArts/Ender_ANIME_art.png'; }
if(theNum == "519"){ change_image_2.src='../Images/Universes/OtherArts/Ender_NEW_DESIGN.png'; }
if(theNum == "520"){ change_image_2.src='../Images/Universes/OtherArts/Exester_and_Nameless_Humans_art.png'; }
if(theNum == "521"){ change_image_2.src='../Images/Universes/OtherArts/eXySiIHqMlw.jpg'; }
if(theNum == "522"){ change_image_2.src='../Images/Universes/OtherArts/FW_1.png'; }
if(theNum == "523"){ change_image_2.src='../Images/Universes/OtherArts/FW_2.png'; }
if(theNum == "524"){ change_image_2.src='../Images/Universes/OtherArts/FW_3.png'; }
if(theNum == "525"){ change_image_2.src='../Images/Universes/OtherArts/FW_4.png'; }
if(theNum == "526"){ change_image_2.src='../Images/Universes/OtherArts/FW_5.png'; }
if(theNum == "527"){ change_image_2.src='../Images/Universes/OtherArts/FW_6.png'; }
if(theNum == "528"){ change_image_2.src='../Images/Universes/OtherArts/GF_1.png'; }
if(theNum == "529"){ change_image_2.src='../Images/Universes/OtherArts/GF_2.png'; }
if(theNum == "530"){ change_image_2.src='../Images/Universes/OtherArts/GF_3.png'; }
if(theNum == "531"){ change_image_2.src='../Images/Universes/OtherArts/GF_4.png'; }
if(theNum == "532"){ change_image_2.src='../Images/Universes/OtherArts/GF_5.png'; }
if(theNum == "533"){ change_image_2.src='../Images/Universes/OtherArts/GF_6.png'; }
if(theNum == "534"){ change_image_2.src='../Images/Universes/OtherArts/GF_7.png'; }
if(theNum == "535"){ change_image_2.src='../Images/Universes/OtherArts/GF_8.png'; }
if(theNum == "536"){ change_image_2.src='../Images/Universes/OtherArts/GF_9.png'; }
if(theNum == "537"){ change_image_2.src='../Images/Universes/OtherArts/GF_10.png'; }
if(theNum == "538"){ change_image_2.src='../Images/Universes/OtherArts/GF_11.png'; }
if(theNum == "539"){ change_image_2.src='../Images/Universes/OtherArts/GF_12.png'; }
if(theNum == "540"){ change_image_2.src='../Images/Universes/OtherArts/GlitchFontOLDEST.png'; }
if(theNum == "541"){ change_image_2.src='../Images/Universes/OtherArts/GlitchFont_TEAM_ART.png'; }
if(theNum == "542"){ change_image_2.src='../Images/Universes/OtherArts/Glitchy1.png'; }
if(theNum == "543"){ change_image_2.src='../Images/Universes/OtherArts/Glitchy2.png'; }
if(theNum == "544"){ change_image_2.src='../Images/Universes/OtherArts/GlitchyArt.png'; }
if(theNum == "545"){ change_image_2.src='../Images/Universes/OtherArts/IdioticAnimeArtThing.png'; }
if(theNum == "546"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220043.jpg'; }
if(theNum == "547"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220301.jpg'; }
if(theNum == "548"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220323.jpg'; }
if(theNum == "549"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220543.jpg'; }
if(theNum == "550"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220550.jpg'; }
if(theNum == "551"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220756.jpg'; }
if(theNum == "552"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220807.jpg'; }
if(theNum == "553"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220816.jpg'; }
if(theNum == "554"){ change_image_2.src='../Images/Universes/OtherArts/IMG_old.jpg'; }
if(theNum == "555"){ change_image_2.src='../Images/Universes/OtherArts/KeterruArt.png'; }
if(theNum == "556"){ change_image_2.src='../Images/Universes/OtherArts/Kiriko_art_BEST_ONE.png'; }
if(theNum == "557"){ change_image_2.src='../Images/Universes/OtherArts/MafumiOLD.png'; }
if(theNum == "558"){ change_image_2.src='../Images/Universes/OtherArts/NyakiOLD.png'; }
if(theNum == "559"){ change_image_2.src='../Images/Universes/OtherArts/Old1.png'; }
if(theNum == "560"){ change_image_2.src='../Images/Universes/OtherArts/Old2.png'; }
if(theNum == "561"){ change_image_2.src='../Images/Universes/OtherArts/Old3.png'; }
if(theNum == "562"){ change_image_2.src='../Images/Universes/OtherArts/Old4.png'; }
if(theNum == "563"){ change_image_2.src='../Images/Universes/OtherArts/Old5.png'; }
if(theNum == "564"){ change_image_2.src='../Images/Universes/OtherArts/Old6.png'; }
if(theNum == "565"){ change_image_2.src='../Images/Universes/OtherArts/Old7.png'; }
if(theNum == "566"){ change_image_2.src='../Images/Universes/OtherArts/Painty_the_artist.jpg'; }
if(theNum == "567"){ change_image_2.src='../Images/Universes/OtherArts/Riku_the_code_bird.png'; }
if(theNum == "568"){ change_image_2.src='../Images/Universes/OtherArts/RoseNote_GlitchFont.png'; }
if(theNum == "569"){ change_image_2.src='../Images/Universes/OtherArts/ShirenArt.png'; }
if(theNum == "570"){ change_image_2.src='../Images/Universes/OtherArts/TheFatalBloodrain_wallpaper.png'; }
if(theNum == "571"){ change_image_2.src='../Images/Universes/OtherArts/Thicc art.png'; }
if(theNum == "572"){ change_image_2.src='../Images/Universes/OtherArts/TLC_1.png'; }
if(theNum == "573"){ change_image_2.src='../Images/Universes/OtherArts/TLC_2.png'; }
if(theNum == "574"){ change_image_2.src='../Images/Universes/OtherArts/TLC_3.png'; }
if(theNum == "575"){ change_image_2.src='../Images/Universes/OtherArts/TLC_4.png'; }
if(theNum == "576"){ change_image_2.src='../Images/Universes/OtherArts/TLC_5.png'; }
if(theNum == "577"){ change_image_2.src='../Images/Universes/OtherArts/TLC_6.png'; }
if(theNum == "578"){ change_image_2.src='../Images/Universes/OtherArts/TsubasaArt.png'; }
if(theNum == "579"){ change_image_2.src='../Images/Universes/OtherArts/vk_group.png'; }
if(theNum == "580"){ change_image_2.src='../Images/Universes/OtherArts/Xmas1.png'; }
if(theNum == "581"){ change_image_2.src='../Images/Universes/OtherArts/Xmas2.png'; }
if(theNum == "582"){ change_image_2.src='../Easters/LevelSelect/Background.gif'; }
if(theNum == "583"){ change_image_2.src='../Easters/LevelSelect/FG.png'; }
if(theNum == "584"){ change_image_2.src='../Easters/LevelSelect/LevelSelect.png'; }
if(theNum == "585"){ change_image_2.src='../Easters/LevelSelect/Levels/Asks.png'; }
if(theNum == "586"){ change_image_2.src='../Easters/LevelSelect/Levels/Author.png'; }
if(theNum == "587"){ change_image_2.src='../Easters/LevelSelect/Levels/Changes.png'; }
if(theNum == "588"){ change_image_2.src='../Easters/LevelSelect/Levels/Comics.png'; }
if(theNum == "589"){ change_image_2.src='../Easters/LevelSelect/Levels/Index.png'; }
if(theNum == "590"){ change_image_2.src='../Easters/LevelSelect/Levels/LevelSelect.png'; }
if(theNum == "591"){ change_image_2.src='../Easters/LevelSelect/Levels/MineCraft.png'; }
if(theNum == "592"){ change_image_2.src='../Easters/LevelSelect/Levels/Noise.gif'; }
if(theNum == "593"){ change_image_2.src='../Easters/LevelSelect/Levels/Password.png'; }
if(theNum == "594"){ change_image_2.src='../Easters/LevelSelect/Levels/Universes.png'; }
if(theNum == "595"){ change_image_2.src='../Easters/LevelSelect/Levels/WIP.png'; }
if(theNum == "596"){ change_image_2.src='../Easters/Minecraft/clouds.png'; }
if(theNum == "597"){ change_image_2.src='../Easters/Minecraft/clouds1.png'; }
if(theNum == "598"){ change_image_2.src='../Easters/Minecraft/clouds2.png'; }
if(theNum == "599"){ change_image_2.src='../Easters/Minecraft/clouds3.png'; }
if(theNum == "600"){ change_image_2.src='../Easters/Minecraft/clouds4.png'; }
if(theNum == "601"){ change_image_2.src='../Easters/Minecraft/clouds5.png'; }
if(theNum == "602"){ change_image_2.src='../Easters/Minecraft/grass_block_side.png'; }
if(theNum == "603"){ change_image_2.src='../Easters/Minecraft/nether_portal.gif'; }
if(theNum == "604"){ change_image_2.src='../Easters/Minecraft/Portal1.png'; }
if(theNum == "605"){ change_image_2.src='../Easters/Minecraft/Portal2.png'; }
if(theNum == "606"){ change_image_2.src='../Easters/Minecraft/BG/bg1.png'; }
if(theNum == "607"){ change_image_2.src='../Easters/Minecraft/BG/bg2.png'; }
if(theNum == "608"){ change_image_2.src='../Easters/Minecraft/BG/bg3.png'; }
if(theNum == "609"){ change_image_2.src='../Easters/Minecraft/BG/bg4.png'; }
if(theNum == "610"){ change_image_2.src='../Easters/Minecraft/BG/bg5.png'; }
if(theNum == "611"){ change_image_2.src='../Easters/Minecraft/BG/bg6.png'; }
if(theNum == "612"){ change_image_2.src='../Credits/St1.png'; }
if(theNum == "613"){ change_image_2.src='../Credits/St2.png'; }
if(theNum == "614"){ change_image_2.src='../Credits/St3.png'; }
if(theNum == "615"){ change_image_2.src='../Credits/St4.png'; }
}

function go_to_left()

{
theNum--;
Page--;
if(theNum == "-1"){theNum = arr.length -1; } console.log(theNum );
window.scrollTo({
		top: 0,
	});
document.getElementById("ComicsInfo").innerHTML = 'Comics Page: '+Pagearr[theNum]+'';


if(theNum == "0"){ change_image_2.src='../Images/Asks.png'; }
if(theNum == "1"){ change_image_2.src='../Images/Author.png'; }
if(theNum == "2"){ change_image_2.src='../Images/BackArrow.png'; }
if(theNum == "3"){ change_image_2.src='../Images/Button_Home.png'; }
if(theNum == "4"){ change_image_2.src='../Images/Changes.png'; }
if(theNum == "5"){ change_image_2.src='../Images/Comics.png'; }
if(theNum == "6"){ change_image_2.src='../Images/CreditsPick1.png'; }
if(theNum == "7"){ change_image_2.src='../Images/CreditsPick2.png'; }
if(theNum == "8"){ change_image_2.src='../Images/EnterButton.png'; }
if(theNum == "9"){ change_image_2.src='../Images/FanUniverses.png'; }
if(theNum == "10"){ change_image_2.src='../Images/Funny.png'; }
if(theNum == "11"){ change_image_2.src='../Images/icon.png'; }
if(theNum == "12"){ change_image_2.src='../Images/Links.png'; }
if(theNum == "13"){ change_image_2.src='../Images/LittleBish.png'; }
if(theNum == "14"){ change_image_2.src='../Images/MenuPick1.png'; }
if(theNum == "15"){ change_image_2.src='../Images/MenuPick2.png'; }
if(theNum == "16"){ change_image_2.src='../Images/owo.png'; }
if(theNum == "17"){ change_image_2.src='../Images/PickerBase.png'; }
if(theNum == "18"){ change_image_2.src='../Images/PlaceHolder.png'; }
if(theNum == "19"){ change_image_2.src='../Images/Sleeping Niko.gif'; }
if(theNum == "20"){ change_image_2.src='../Images/Universes.png'; }
if(theNum == "21"){ change_image_2.src='../Images/WIP.png'; }
if(theNum == "22"){ change_image_2.src='../Images/СomicsLeftArrow.png'; }
if(theNum == "23"){ change_image_2.src='../Images/СomicsRightArrow.png'; }
if(theNum == "24"){ change_image_2.src='../Images/Asks/GraelTale.png'; }
if(theNum == "25"){ change_image_2.src='../Images/Asks/LycanTale.png'; }
if(theNum == "26"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (1).jpg'; }
if(theNum == "27"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (2).jpg'; }
if(theNum == "28"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (3).jpg'; }
if(theNum == "29"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (4).jpg'; }
if(theNum == "30"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (5).jpg'; }
if(theNum == "31"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (6).jpg'; }
if(theNum == "32"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (7).jpg'; }
if(theNum == "33"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (8).jpg'; }
if(theNum == "34"){ change_image_2.src='../Images/Asks/GraelTale/GraelTale (9).jpg'; }
if(theNum == "35"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (1).jpg'; }
if(theNum == "36"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (2).jpg'; }
if(theNum == "37"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (3).jpg'; }
if(theNum == "38"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (4).jpg'; }
if(theNum == "39"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (5).jpg'; }
if(theNum == "40"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (6).jpg'; }
if(theNum == "41"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (7).jpg'; }
if(theNum == "42"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (8).jpg'; }
if(theNum == "43"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (9).jpg'; }
if(theNum == "44"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (10).jpg'; }
if(theNum == "45"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (11).jpg'; }
if(theNum == "46"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (12).jpg'; }
if(theNum == "47"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (13).jpg'; }
if(theNum == "48"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (14).jpg'; }
if(theNum == "49"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (15).jpg'; }
if(theNum == "50"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (16).jpg'; }
if(theNum == "51"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (17).jpg'; }
if(theNum == "52"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (18).jpg'; }
if(theNum == "53"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (19).jpg'; }
if(theNum == "54"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (20).jpg'; }
if(theNum == "55"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (21).jpg'; }
if(theNum == "56"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (22).jpg'; }
if(theNum == "57"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (23).jpg'; }
if(theNum == "58"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (24).jpg'; }
if(theNum == "59"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (25).jpg'; }
if(theNum == "60"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (26).jpg'; }
if(theNum == "61"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (27).jpg'; }
if(theNum == "62"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (28).jpg'; }
if(theNum == "63"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (29).jpg'; }
if(theNum == "64"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (30).jpg'; }
if(theNum == "65"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (31).jpg'; }
if(theNum == "66"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (32).jpg'; }
if(theNum == "67"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (33).jpg'; }
if(theNum == "68"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (34).jpg'; }
if(theNum == "69"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (35).jpg'; }
if(theNum == "70"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (36).jpg'; }
if(theNum == "71"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (37).jpg'; }
if(theNum == "72"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (38).jpg'; }
if(theNum == "73"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (39).jpg'; }
if(theNum == "74"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (40).jpg'; }
if(theNum == "75"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (41).jpg'; }
if(theNum == "76"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (42).jpg'; }
if(theNum == "77"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (43).jpg'; }
if(theNum == "78"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (44).jpg'; }
if(theNum == "79"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (45).jpg'; }
if(theNum == "80"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (46).jpg'; }
if(theNum == "81"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (47).jpg'; }
if(theNum == "82"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (48).jpg'; }
if(theNum == "83"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (49).jpg'; }
if(theNum == "84"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (50).jpg'; }
if(theNum == "85"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (51).jpg'; }
if(theNum == "86"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (52).jpg'; }
if(theNum == "87"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (53).jpg'; }
if(theNum == "88"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (54).jpg'; }
if(theNum == "89"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (55).jpg'; }
if(theNum == "90"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (56).jpg'; }
if(theNum == "91"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (57).jpg'; }
if(theNum == "92"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (58).jpg'; }
if(theNum == "93"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (59).jpg'; }
if(theNum == "94"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (60).jpg'; }
if(theNum == "95"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (61).jpg'; }
if(theNum == "96"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (62).jpg'; }
if(theNum == "97"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (63).jpg'; }
if(theNum == "98"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (64).jpg'; }
if(theNum == "99"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (65).jpg'; }
if(theNum == "100"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (66).jpg'; }
if(theNum == "101"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (67).jpg'; }
if(theNum == "102"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (68).jpg'; }
if(theNum == "103"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (69).jpg'; }
if(theNum == "104"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (70).jpg'; }
if(theNum == "105"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (71).jpg'; }
if(theNum == "106"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (72).jpg'; }
if(theNum == "107"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (73).jpg'; }
if(theNum == "108"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (74).jpg'; }
if(theNum == "109"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (75).jpg'; }
if(theNum == "110"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (76).jpg'; }
if(theNum == "111"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (77).jpg'; }
if(theNum == "112"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (78).jpg'; }
if(theNum == "113"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (79).jpg'; }
if(theNum == "114"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (80).jpg'; }
if(theNum == "115"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (81).jpg'; }
if(theNum == "116"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (82).jpg'; }
if(theNum == "117"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (83).jpg'; }
if(theNum == "118"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (84).jpg'; }
if(theNum == "119"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (85).jpg'; }
if(theNum == "120"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (86).jpg'; }
if(theNum == "121"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (87).jpg'; }
if(theNum == "122"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (88).jpg'; }
if(theNum == "123"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (89).jpg'; }
if(theNum == "124"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (90).jpg'; }
if(theNum == "125"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (91).jpg'; }
if(theNum == "126"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (92).jpg'; }
if(theNum == "127"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (93).jpg'; }
if(theNum == "128"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (94).jpg'; }
if(theNum == "129"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (95).jpg'; }
if(theNum == "130"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (96).jpg'; }
if(theNum == "131"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (97).jpg'; }
if(theNum == "132"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (98).jpg'; }
if(theNum == "133"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (99).jpg'; }
if(theNum == "134"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (100).jpg'; }
if(theNum == "135"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (101).jpg'; }
if(theNum == "136"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (102).jpg'; }
if(theNum == "137"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (103).jpg'; }
if(theNum == "138"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (104).jpg'; }
if(theNum == "139"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (105).jpg'; }
if(theNum == "140"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (106).jpg'; }
if(theNum == "141"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (107).jpg'; }
if(theNum == "142"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (108).jpg'; }
if(theNum == "143"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (109).jpg'; }
if(theNum == "144"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (120).jpg'; }
if(theNum == "145"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (121).jpg'; }
if(theNum == "146"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (122).jpg'; }
if(theNum == "147"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (123).jpg'; }
if(theNum == "148"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (124).jpg'; }
if(theNum == "149"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (125).jpg'; }
if(theNum == "150"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (126).jpg'; }
if(theNum == "151"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (127).jpg'; }
if(theNum == "152"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (128).jpg'; }
if(theNum == "153"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (129).jpg'; }
if(theNum == "154"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (130).jpg'; }
if(theNum == "155"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (131).jpg'; }
if(theNum == "156"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (132).jpg'; }
if(theNum == "157"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (133).jpg'; }
if(theNum == "158"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (134).jpg'; }
if(theNum == "159"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (135).jpg'; }
if(theNum == "160"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (136).jpg'; }
if(theNum == "161"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (137).jpg'; }
if(theNum == "162"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (138).jpg'; }
if(theNum == "163"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (139).jpg'; }
if(theNum == "164"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (140).jpg'; }
if(theNum == "165"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (141).jpg'; }
if(theNum == "166"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (142).jpg'; }
if(theNum == "167"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (143).jpg'; }
if(theNum == "168"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (144).jpg'; }
if(theNum == "169"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (145).jpg'; }
if(theNum == "170"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (146).jpg'; }
if(theNum == "171"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (147).jpg'; }
if(theNum == "172"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (148).jpg'; }
if(theNum == "173"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (149).jpg'; }
if(theNum == "174"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (150).jpg'; }
if(theNum == "175"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (151).jpg'; }
if(theNum == "176"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (152).jpg'; }
if(theNum == "177"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (153).jpg'; }
if(theNum == "178"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (154).jpg'; }
if(theNum == "179"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (155).jpg'; }
if(theNum == "180"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (156).jpg'; }
if(theNum == "181"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (157).jpg'; }
if(theNum == "182"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (158).jpg'; }
if(theNum == "183"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (159).jpg'; }
if(theNum == "184"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (160).jpg'; }
if(theNum == "185"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (161).jpg'; }
if(theNum == "186"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (162).jpg'; }
if(theNum == "187"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (163).jpg'; }
if(theNum == "188"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (164).jpg'; }
if(theNum == "189"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (165).jpg'; }
if(theNum == "190"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (166).jpg'; }
if(theNum == "191"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (167).jpg'; }
if(theNum == "192"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (168).jpg'; }
if(theNum == "193"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (169).jpg'; }
if(theNum == "194"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (170).jpg'; }
if(theNum == "195"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (171).jpg'; }
if(theNum == "196"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (172).jpg'; }
if(theNum == "197"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (173).jpg'; }
if(theNum == "198"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (174).jpg'; }
if(theNum == "199"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (175).jpg'; }
if(theNum == "200"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (176).jpg'; }
if(theNum == "201"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (177).jpg'; }
if(theNum == "202"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (178).jpg'; }
if(theNum == "203"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (179).jpg'; }
if(theNum == "204"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (180).jpg'; }
if(theNum == "205"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (181).jpg'; }
if(theNum == "206"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (182).jpg'; }
if(theNum == "207"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (183).jpg'; }
if(theNum == "208"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (184).jpg'; }
if(theNum == "209"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (185).jpg'; }
if(theNum == "210"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (186).jpg'; }
if(theNum == "211"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (187).jpg'; }
if(theNum == "212"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (188).jpg'; }
if(theNum == "213"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (189).jpg'; }
if(theNum == "214"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (190).jpg'; }
if(theNum == "215"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (191).jpg'; }
if(theNum == "216"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (192).jpg'; }
if(theNum == "217"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (193).jpg'; }
if(theNum == "218"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (194).jpg'; }
if(theNum == "219"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (195).jpg'; }
if(theNum == "220"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (196).jpg'; }
if(theNum == "221"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (197).jpg'; }
if(theNum == "222"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (198).jpg'; }
if(theNum == "223"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (199).jpg'; }
if(theNum == "224"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (201).jpg'; }
if(theNum == "225"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (202).jpg'; }
if(theNum == "226"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (203).jpg'; }
if(theNum == "227"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (204).jpg'; }
if(theNum == "228"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (205).jpg'; }
if(theNum == "229"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (206).jpg'; }
if(theNum == "230"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (207).jpg'; }
if(theNum == "231"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (208).jpg'; }
if(theNum == "232"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (209).jpg'; }
if(theNum == "233"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (210).jpg'; }
if(theNum == "234"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (211).jpg'; }
if(theNum == "235"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (212).jpg'; }
if(theNum == "236"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (213).jpg'; }
if(theNum == "237"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (214).jpg'; }
if(theNum == "238"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (215).jpg'; }
if(theNum == "239"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (216).jpg'; }
if(theNum == "240"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (217).jpg'; }
if(theNum == "241"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (218).jpg'; }
if(theNum == "242"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (219).jpg'; }
if(theNum == "243"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (220).jpg'; }
if(theNum == "244"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (221).jpg'; }
if(theNum == "245"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (222).jpg'; }
if(theNum == "246"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (223).jpg'; }
if(theNum == "247"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (223).jpg'; }
if(theNum == "248"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (224).jpg'; }
if(theNum == "249"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (225).jpg'; }
if(theNum == "250"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (226).jpg'; }
if(theNum == "251"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (227).jpg'; }
if(theNum == "252"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (228).jpg'; }
if(theNum == "253"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (229).jpg'; }
if(theNum == "254"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (230).jpg'; }
if(theNum == "255"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (231).jpg'; }
if(theNum == "256"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (232).jpg'; }
if(theNum == "257"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (233).jpg'; }
if(theNum == "258"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (234).jpg'; }
if(theNum == "259"){ change_image_2.src='../Images/Asks/LycanTale/LycanTale (235).jpg'; }
if(theNum == "260"){ change_image_2.src='../Images/Author/Niko0.png'; }
if(theNum == "261"){ change_image_2.src='../Images/Author/Niko1.png'; }
if(theNum == "262"){ change_image_2.src='../Images/Author/Niko2.png'; }
if(theNum == "263"){ change_image_2.src='../Images/Author/Niko3.png'; }
if(theNum == "264"){ change_image_2.src='../Images/Author/Niko4.png'; }
if(theNum == "265"){ change_image_2.src='../Images/Author/Niko5.png'; }
if(theNum == "266"){ change_image_2.src='../Images/Author/Niko6.png'; }
if(theNum == "267"){ change_image_2.src='../Images/Author/Niko7.png'; }
if(theNum == "268"){ change_image_2.src='../Images/Author/Niko8.png'; }
if(theNum == "269"){ change_image_2.src='../Images/Author/Niko9.png'; }
if(theNum == "270"){ change_image_2.src='../Images/Author/Niko10.png'; }
if(theNum == "271"){ change_image_2.src='../Images/Author/Niko11.png'; }
if(theNum == "272"){ change_image_2.src='../Images/Author/Niko12.png'; }
if(theNum == "273"){ change_image_2.src='../Images/Author/Niko13.png'; }
if(theNum == "274"){ change_image_2.src='../Images/Author/Niko14.png'; }
if(theNum == "275"){ change_image_2.src='../Images/Author/Niko15a.png'; }
if(theNum == "276"){ change_image_2.src='../Images/Author/Niko15b.png'; }
if(theNum == "277"){ change_image_2.src='../Images/Author/Niko16.png'; }
if(theNum == "278"){ change_image_2.src='../Images/Author/Chibi/SmolNiko0.png'; }
if(theNum == "279"){ change_image_2.src='../Images/Author/Chibi/SmolNiko1.png'; }
if(theNum == "280"){ change_image_2.src='../Images/Author/Chibi/SmolNiko2.png'; }
if(theNum == "281"){ change_image_2.src='../Images/Author/Chibi/SmolNiko3.png'; }
if(theNum == "282"){ change_image_2.src='../Images/Author/Chibi/SmolNiko4.png'; }
if(theNum == "283"){ change_image_2.src='../Images/Author/Chibi/SmolNiko5.png'; }
if(theNum == "284"){ change_image_2.src='../Images/Author/Chibi/SmolNiko6.png'; }
if(theNum == "285"){ change_image_2.src='../Images/Author/Chibi/SmolNiko7.png'; }
if(theNum == "286"){ change_image_2.src='../Images/Author/Chibi/SmolNiko8.png'; }
if(theNum == "287"){ change_image_2.src='../Images/Author/Chibi/SmolNiko9.png'; }
if(theNum == "288"){ change_image_2.src='../Images/Author/Chibi/SmolNiko10.png'; }
if(theNum == "289"){ change_image_2.src='../Images/Author/Chibi/SmolNiko11.png'; }
if(theNum == "290"){ change_image_2.src='../Images/Author/Chibi/SmolNiko12.png'; }
if(theNum == "291"){ change_image_2.src='../Images/Author/Chibi/SmolNiko13.png'; }
if(theNum == "292"){ change_image_2.src='../Images/Author/Chibi/SmolNiko14.png'; }
if(theNum == "293"){ change_image_2.src='../Images/Author/Chibi/SmolNiko15a.png'; }
if(theNum == "294"){ change_image_2.src='../Images/Author/Chibi/SmolNiko15b.png'; }
if(theNum == "295"){ change_image_2.src='../Images/Author/Chibi/SmolNiko16.png'; }
if(theNum == "296"){ change_image_2.src='../Images/Author/Icons/N0.png'; }
if(theNum == "297"){ change_image_2.src='../Images/Author/Icons/N1.png'; }
if(theNum == "298"){ change_image_2.src='../Images/Author/Icons/N2.png'; }
if(theNum == "299"){ change_image_2.src='../Images/Author/Icons/N3.png'; }
if(theNum == "300"){ change_image_2.src='../Images/Author/Icons/N4.png'; }
if(theNum == "301"){ change_image_2.src='../Images/Author/Icons/N5.png'; }
if(theNum == "302"){ change_image_2.src='../Images/Author/Icons/N6.png'; }
if(theNum == "303"){ change_image_2.src='../Images/Author/Icons/N7.png'; }
if(theNum == "304"){ change_image_2.src='../Images/Author/Icons/N8.png'; }
if(theNum == "305"){ change_image_2.src='../Images/Author/Icons/N9.png'; }
if(theNum == "306"){ change_image_2.src='../Images/Author/Icons/N10.png'; }
if(theNum == "307"){ change_image_2.src='../Images/Author/Icons/N11.png'; }
if(theNum == "308"){ change_image_2.src='../Images/Author/Icons/N12.png'; }
if(theNum == "309"){ change_image_2.src='../Images/Author/Icons/N13.png'; }
if(theNum == "310"){ change_image_2.src='../Images/Author/Icons/N14.png'; }
if(theNum == "311"){ change_image_2.src='../Images/Author/Icons/N15.png'; }
if(theNum == "312"){ change_image_2.src='../Images/Author/Icons/N15a.png'; }
if(theNum == "313"){ change_image_2.src='../Images/Author/Icons/N15b.png'; }
if(theNum == "314"){ change_image_2.src='../Images/Author/Icons/N16.png'; }
if(theNum == "315"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventureBETA.png'; }
if(theNum == "316"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventurePREVIEW.png'; }
if(theNum == "317"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 01.png'; }
if(theNum == "318"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 02.png'; }
if(theNum == "319"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 11.png'; }
if(theNum == "320"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 12.png'; }
if(theNum == "321"){ change_image_2.src='../Images/Comics/GlitchSlimesAdventure/Glitch slimes adventures 21.png'; }
if(theNum == "322"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_1.png'; }
if(theNum == "323"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_2.png'; }
if(theNum == "324"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_3.png'; }
if(theNum == "325"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_4.png'; }
if(theNum == "326"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_5.png'; }
if(theNum == "327"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_6.png'; }
if(theNum == "328"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_7.png'; }
if(theNum == "329"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_8.png'; }
if(theNum == "330"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_9.png'; }
if(theNum == "331"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_10.png'; }
if(theNum == "332"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_11.png'; }
if(theNum == "333"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_12.png'; }
if(theNum == "334"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_13.png'; }
if(theNum == "335"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_14.png'; }
if(theNum == "336"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_15.png'; }
if(theNum == "337"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_16.png'; }
if(theNum == "338"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_17.png'; }
if(theNum == "339"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_18.png'; }
if(theNum == "340"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_19.png'; }
if(theNum == "341"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_20.png'; }
if(theNum == "342"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_21.png'; }
if(theNum == "343"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_22.png'; }
if(theNum == "344"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_23.png'; }
if(theNum == "345"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_24.png'; }
if(theNum == "346"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_25.png'; }
if(theNum == "347"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_26.png'; }
if(theNum == "348"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_27.png'; }
if(theNum == "349"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_28.png'; }
if(theNum == "350"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_29.png'; }
if(theNum == "351"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_30.png'; }
if(theNum == "352"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_31.png'; }
if(theNum == "353"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_32.png'; }
if(theNum == "354"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_33.png'; }
if(theNum == "355"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_34.png'; }
if(theNum == "356"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_35.png'; }
if(theNum == "357"){ change_image_2.src='../Images/FanUniverses/FanUniversesCrop/GlitchChaos/12_36.png'; }
if(theNum == "358"){ change_image_2.src='../Images/FanUniverses/OtherArts/Exes.png'; }
if(theNum == "359"){ change_image_2.src='../Images/FanUniverses/OtherArts/GraelTale art.png'; }
if(theNum == "360"){ change_image_2.src='../Images/FanUniverses/OtherArts/GraelTale_Alphy.png'; }
if(theNum == "361"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG1.png'; }
if(theNum == "362"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG10.png'; }
if(theNum == "363"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG2.png'; }
if(theNum == "364"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG3.png'; }
if(theNum == "365"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG4.png'; }
if(theNum == "366"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG5.png'; }
if(theNum == "367"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG6.png'; }
if(theNum == "368"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG7.png'; }
if(theNum == "369"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG8.png'; }
if(theNum == "370"){ change_image_2.src='../Images/FanUniverses/OtherArts/IMG9.png'; }
if(theNum == "371"){ change_image_2.src='../Images/FanUniverses/OtherArts/ProjectGlitchChaosMangaPage.png'; }
if(theNum == "372"){ change_image_2.src='../Images/Gameplay/Circles.png'; }
if(theNum == "373"){ change_image_2.src='../Images/Gameplay/Overlay2.png'; }
if(theNum == "374"){ change_image_2.src='../Images/Gameplay/Smoke.png'; }
if(theNum == "375"){ change_image_2.src='../Images/Gameplay/Star.png'; }
if(theNum == "376"){ change_image_2.src='../Images/Icons/Dafna.png'; }
if(theNum == "377"){ change_image_2.src='../Images/Icons/Dark.png'; }
if(theNum == "378"){ change_image_2.src='../Images/Icons/FreeNom.png'; }
if(theNum == "379"){ change_image_2.src='../Images/Icons/Georg.png'; }
if(theNum == "380"){ change_image_2.src='../Images/Icons/Github.png'; }
if(theNum == "381"){ change_image_2.src='../Images/Icons/Kersive.png'; }
if(theNum == "382"){ change_image_2.src='../Images/Icons/KG.png'; }
if(theNum == "383"){ change_image_2.src='../Images/Icons/Kit.png'; }
if(theNum == "384"){ change_image_2.src='../Images/Icons/Leyter.png'; }
if(theNum == "385"){ change_image_2.src='../Images/Icons/Lia.png'; }
if(theNum == "386"){ change_image_2.src='../Images/Icons/Mash.png'; }
if(theNum == "387"){ change_image_2.src='../Images/Icons/Mih.png'; }
if(theNum == "388"){ change_image_2.src='../Images/Icons/Minecraft.png'; }
if(theNum == "389"){ change_image_2.src='../Images/Icons/Minoko.png'; }
if(theNum == "390"){ change_image_2.src='../Images/Icons/NikoArts.png'; }
if(theNum == "391"){ change_image_2.src='../Images/Icons/Nola.png'; }
if(theNum == "392"){ change_image_2.src='../Images/Icons/Roma.png'; }
if(theNum == "393"){ change_image_2.src='../Images/Icons/Skittles.png'; }
if(theNum == "394"){ change_image_2.src='../Images/Icons/Solen.png'; }
if(theNum == "395"){ change_image_2.src='../Images/Icons/Sonic.png'; }
if(theNum == "396"){ change_image_2.src='../Images/Icons/UT.png'; }
if(theNum == "397"){ change_image_2.src='../Images/Index/BG1.png'; }
if(theNum == "398"){ change_image_2.src='../Images/Index/BG2.png'; }
if(theNum == "399"){ change_image_2.src='../Images/Index/BG3.png'; }
if(theNum == "400"){ change_image_2.src='../Images/Index/BG4.png'; }
if(theNum == "401"){ change_image_2.src='../Images/Index/BG5.png'; }
if(theNum == "402"){ change_image_2.src='../Images/Index/Button_1a.png'; }
if(theNum == "403"){ change_image_2.src='../Images/Index/Button_1b.png'; }
if(theNum == "404"){ change_image_2.src='../Images/Index/Button_2a.png'; }
if(theNum == "405"){ change_image_2.src='../Images/Index/Button_2b.png'; }
if(theNum == "406"){ change_image_2.src='../Images/Index/Button_3a.png'; }
if(theNum == "407"){ change_image_2.src='../Images/Index/Button_3b.png'; }
if(theNum == "408"){ change_image_2.src='../Images/Index/Button_4a.png'; }
if(theNum == "409"){ change_image_2.src='../Images/Index/Button_1b.png'; }
if(theNum == "410"){ change_image_2.src='../Images/Index/Index2PH.png'; }
if(theNum == "411"){ change_image_2.src='../Images/Index/IndexButton1PH.png'; }
if(theNum == "412"){ change_image_2.src='../Images/Index/IndexButton2PH.png'; }
if(theNum == "413"){ change_image_2.src='../Images/Index/indexCHR1.png'; }
if(theNum == "414"){ change_image_2.src='../Images/Index/indexCHR1b.png'; }
if(theNum == "415"){ change_image_2.src='../Images/Index/indexCHR2.png'; }
if(theNum == "416"){ change_image_2.src='../Images/Index/indexCHR2b.png'; }
if(theNum == "417"){ change_image_2.src='../Images/Index/indexCHR3.png'; }
if(theNum == "418"){ change_image_2.src='../Images/Index/indexCHR3b.png'; }
if(theNum == "419"){ change_image_2.src='../Images/Index/indexCHR4.png'; }
if(theNum == "420"){ change_image_2.src='../Images/Index/indexCHR4b.png'; }
if(theNum == "421"){ change_image_2.src='../Images/Index/indexCHR5.png'; }
if(theNum == "422"){ change_image_2.src='../Images/Index/indexCHR5b.png'; }
if(theNum == "423"){ change_image_2.src='../Images/Index/Logo.png'; }
if(theNum == "424"){ change_image_2.src='../Images/Index/NewIndexBase.png'; }
if(theNum == "425"){ change_image_2.src='../Images/PostsArts/KeterruArt.png'; }
if(theNum == "426"){ change_image_2.src='../Images/PostsArts/Niko x Nola ShipKids.png'; }
if(theNum == "427"){ change_image_2.src='../Images/PostsArts/NikoXNola Valentine Art.png'; }
if(theNum == "428"){ change_image_2.src='../Images/PostsArts/Rals.gif'; }
if(theNum == "429"){ change_image_2.src='../Images/Universes/01 - FirstWorldRemake.png'; }
if(theNum == "430"){ change_image_2.src='../Images/Universes/02 - GlitchFontRemake.png'; }
if(theNum == "431"){ change_image_2.src='../Images/Universes/03 - TheLivingCharmRemake.png'; }
if(theNum == "432"){ change_image_2.src='../Images/Universes/05 - PhantomChaos.png'; }
if(theNum == "433"){ change_image_2.src='../Images/Universes/06 - GlitchSlimes.png'; }
if(theNum == "434"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_1.png'; }
if(theNum == "435"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_2.png'; }
if(theNum == "436"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_3.1.png'; }
if(theNum == "437"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_3.2.png'; }
if(theNum == "438"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_3.png'; }
if(theNum == "439"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_4.png'; }
if(theNum == "440"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_5.png'; }
if(theNum == "441"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_6.png'; }
if(theNum == "442"){ change_image_2.src='../Images/Universes/UniversesCrop/FirstWorld/01_7.png'; }
if(theNum == "443"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_1.png'; }
if(theNum == "444"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_2.png'; }
if(theNum == "445"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_3.png'; }
if(theNum == "446"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_4.png'; }
if(theNum == "447"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_5.png'; }
if(theNum == "448"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_6.png'; }
if(theNum == "449"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_7.png'; }
if(theNum == "450"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_8.png'; }
if(theNum == "451"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_9.png'; }
if(theNum == "452"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_10.png'; }
if(theNum == "453"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_11.png'; }
if(theNum == "454"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchFont/02_12.png'; }
if(theNum == "455"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_1.png'; }
if(theNum == "456"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_2.png'; }
if(theNum == "457"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_3.png'; }
if(theNum == "458"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_4.png'; }
if(theNum == "459"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_5.png'; }
if(theNum == "460"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_6.png'; }
if(theNum == "461"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_7.png'; }
if(theNum == "462"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_8.png'; }
if(theNum == "463"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_9.png'; }
if(theNum == "464"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_10.png'; }
if(theNum == "465"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_11.png'; }
if(theNum == "466"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_12.png'; }
if(theNum == "467"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_13.png'; }
if(theNum == "468"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_14.png'; }
if(theNum == "469"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_15.png'; }
if(theNum == "470"){ change_image_2.src='../Images/Universes/UniversesCrop/GlitchSlimes/06_16.png'; }
if(theNum == "471"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_1.png'; }
if(theNum == "472"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_2.png'; }
if(theNum == "473"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_3.png'; }
if(theNum == "474"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_4.png'; }
if(theNum == "475"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_5.png'; }
if(theNum == "476"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_6.png'; }
if(theNum == "477"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_7.png'; }
if(theNum == "478"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_8.png'; }
if(theNum == "479"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_9.png'; }
if(theNum == "480"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_10.png'; }
if(theNum == "481"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_11.png'; }
if(theNum == "482"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_12.png'; }
if(theNum == "483"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_13.png'; }
if(theNum == "484"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_14.png'; }
if(theNum == "485"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_15.png'; }
if(theNum == "486"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_16.png'; }
if(theNum == "487"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_17.png'; }
if(theNum == "488"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_18.png'; }
if(theNum == "489"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_19.png'; }
if(theNum == "490"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_20.png'; }
if(theNum == "491"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_21.png'; }
if(theNum == "492"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_22.png'; }
if(theNum == "493"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_23.png'; }
if(theNum == "494"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_24.png'; }
if(theNum == "495"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_25.png'; }
if(theNum == "496"){ change_image_2.src='../Images/Universes/UniversesCrop/PhantomChaos/05_26.png'; }
if(theNum == "497"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_1.png'; }
if(theNum == "498"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_2.png'; }
if(theNum == "499"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_3.png'; }
if(theNum == "500"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_4.png'; }
if(theNum == "501"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_5.png'; }
if(theNum == "502"){ change_image_2.src='../Images/Universes/UniversesCrop/TheLivingCharm/03_6.png'; }
if(theNum == "503"){ change_image_2.src='../Images/Universes/OtherArts/00- Dikot (1).png'; }
if(theNum == "504"){ change_image_2.src='../Images/Universes/OtherArts/00- Dikot (2).png'; }
if(theNum == "505"){ change_image_2.src='../Images/Universes/OtherArts/AiriArt.png'; }
if(theNum == "506"){ change_image_2.src='../Images/Universes/OtherArts/Ami art.png'; }
if(theNum == "507"){ change_image_2.src='../Images/Universes/OtherArts/AnimeScene.png'; }
if(theNum == "508"){ change_image_2.src='../Images/Universes/OtherArts/Arial_art.png'; }
if(theNum == "509"){ change_image_2.src='../Images/Universes/OtherArts/Aster_N_Arial_art.png'; }
if(theNum == "510"){ change_image_2.src='../Images/Universes/OtherArts/CeaHU8LDaFQ.jpg'; }
if(theNum == "511"){ change_image_2.src='../Images/Universes/OtherArts/Commision1.png'; }
if(theNum == "512"){ change_image_2.src='../Images/Universes/OtherArts/Commision2.png'; }
if(theNum == "513"){ change_image_2.src='../Images/Universes/OtherArts/Commision3.png'; }
if(theNum == "514"){ change_image_2.src='../Images/Universes/OtherArts/EllieThingidk.png'; }
if(theNum == "515"){ change_image_2.src='../Images/Universes/OtherArts/Ellie_art_2.png'; }
if(theNum == "516"){ change_image_2.src='../Images/Universes/OtherArts/ellie_realistic_concept.png'; }
if(theNum == "517"){ change_image_2.src='../Images/Universes/OtherArts/EnderTheGlitch.png'; }
if(theNum == "518"){ change_image_2.src='../Images/Universes/OtherArts/Ender_ANIME_art.png'; }
if(theNum == "519"){ change_image_2.src='../Images/Universes/OtherArts/Ender_NEW_DESIGN.png'; }
if(theNum == "520"){ change_image_2.src='../Images/Universes/OtherArts/Exester_and_Nameless_Humans_art.png'; }
if(theNum == "521"){ change_image_2.src='../Images/Universes/OtherArts/eXySiIHqMlw.jpg'; }
if(theNum == "522"){ change_image_2.src='../Images/Universes/OtherArts/FW_1.png'; }
if(theNum == "523"){ change_image_2.src='../Images/Universes/OtherArts/FW_2.png'; }
if(theNum == "524"){ change_image_2.src='../Images/Universes/OtherArts/FW_3.png'; }
if(theNum == "525"){ change_image_2.src='../Images/Universes/OtherArts/FW_4.png'; }
if(theNum == "526"){ change_image_2.src='../Images/Universes/OtherArts/FW_5.png'; }
if(theNum == "527"){ change_image_2.src='../Images/Universes/OtherArts/FW_6.png'; }
if(theNum == "528"){ change_image_2.src='../Images/Universes/OtherArts/GF_1.png'; }
if(theNum == "529"){ change_image_2.src='../Images/Universes/OtherArts/GF_2.png'; }
if(theNum == "530"){ change_image_2.src='../Images/Universes/OtherArts/GF_3.png'; }
if(theNum == "531"){ change_image_2.src='../Images/Universes/OtherArts/GF_4.png'; }
if(theNum == "532"){ change_image_2.src='../Images/Universes/OtherArts/GF_5.png'; }
if(theNum == "533"){ change_image_2.src='../Images/Universes/OtherArts/GF_6.png'; }
if(theNum == "534"){ change_image_2.src='../Images/Universes/OtherArts/GF_7.png'; }
if(theNum == "535"){ change_image_2.src='../Images/Universes/OtherArts/GF_8.png'; }
if(theNum == "536"){ change_image_2.src='../Images/Universes/OtherArts/GF_9.png'; }
if(theNum == "537"){ change_image_2.src='../Images/Universes/OtherArts/GF_10.png'; }
if(theNum == "538"){ change_image_2.src='../Images/Universes/OtherArts/GF_11.png'; }
if(theNum == "539"){ change_image_2.src='../Images/Universes/OtherArts/GF_12.png'; }
if(theNum == "540"){ change_image_2.src='../Images/Universes/OtherArts/GlitchFontOLDEST.png'; }
if(theNum == "541"){ change_image_2.src='../Images/Universes/OtherArts/GlitchFont_TEAM_ART.png'; }
if(theNum == "542"){ change_image_2.src='../Images/Universes/OtherArts/Glitchy1.png'; }
if(theNum == "543"){ change_image_2.src='../Images/Universes/OtherArts/Glitchy2.png'; }
if(theNum == "544"){ change_image_2.src='../Images/Universes/OtherArts/GlitchyArt.png'; }
if(theNum == "545"){ change_image_2.src='../Images/Universes/OtherArts/IdioticAnimeArtThing.png'; }
if(theNum == "546"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220043.jpg'; }
if(theNum == "547"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220301.jpg'; }
if(theNum == "548"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220323.jpg'; }
if(theNum == "549"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220543.jpg'; }
if(theNum == "550"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220550.jpg'; }
if(theNum == "551"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220756.jpg'; }
if(theNum == "552"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220807.jpg'; }
if(theNum == "553"){ change_image_2.src='../Images/Universes/OtherArts/IMG_20221210_220816.jpg'; }
if(theNum == "554"){ change_image_2.src='../Images/Universes/OtherArts/IMG_old.jpg'; }
if(theNum == "555"){ change_image_2.src='../Images/Universes/OtherArts/KeterruArt.png'; }
if(theNum == "556"){ change_image_2.src='../Images/Universes/OtherArts/Kiriko_art_BEST_ONE.png'; }
if(theNum == "557"){ change_image_2.src='../Images/Universes/OtherArts/MafumiOLD.png'; }
if(theNum == "558"){ change_image_2.src='../Images/Universes/OtherArts/NyakiOLD.png'; }
if(theNum == "559"){ change_image_2.src='../Images/Universes/OtherArts/Old1.png'; }
if(theNum == "560"){ change_image_2.src='../Images/Universes/OtherArts/Old2.png'; }
if(theNum == "561"){ change_image_2.src='../Images/Universes/OtherArts/Old3.png'; }
if(theNum == "562"){ change_image_2.src='../Images/Universes/OtherArts/Old4.png'; }
if(theNum == "563"){ change_image_2.src='../Images/Universes/OtherArts/Old5.png'; }
if(theNum == "564"){ change_image_2.src='../Images/Universes/OtherArts/Old6.png'; }
if(theNum == "565"){ change_image_2.src='../Images/Universes/OtherArts/Old7.png'; }
if(theNum == "566"){ change_image_2.src='../Images/Universes/OtherArts/Painty_the_artist.jpg'; }
if(theNum == "567"){ change_image_2.src='../Images/Universes/OtherArts/Riku_the_code_bird.png'; }
if(theNum == "568"){ change_image_2.src='../Images/Universes/OtherArts/RoseNote_GlitchFont.png'; }
if(theNum == "569"){ change_image_2.src='../Images/Universes/OtherArts/ShirenArt.png'; }
if(theNum == "570"){ change_image_2.src='../Images/Universes/OtherArts/TheFatalBloodrain_wallpaper.png'; }
if(theNum == "571"){ change_image_2.src='../Images/Universes/OtherArts/Thicc art.png'; }
if(theNum == "572"){ change_image_2.src='../Images/Universes/OtherArts/TLC_1.png'; }
if(theNum == "573"){ change_image_2.src='../Images/Universes/OtherArts/TLC_2.png'; }
if(theNum == "574"){ change_image_2.src='../Images/Universes/OtherArts/TLC_3.png'; }
if(theNum == "575"){ change_image_2.src='../Images/Universes/OtherArts/TLC_4.png'; }
if(theNum == "576"){ change_image_2.src='../Images/Universes/OtherArts/TLC_5.png'; }
if(theNum == "577"){ change_image_2.src='../Images/Universes/OtherArts/TLC_6.png'; }
if(theNum == "578"){ change_image_2.src='../Images/Universes/OtherArts/TsubasaArt.png'; }
if(theNum == "579"){ change_image_2.src='../Images/Universes/OtherArts/vk_group.png'; }
if(theNum == "580"){ change_image_2.src='../Images/Universes/OtherArts/Xmas1.png'; }
if(theNum == "581"){ change_image_2.src='../Images/Universes/OtherArts/Xmas2.png'; }
if(theNum == "582"){ change_image_2.src='../Easters/LevelSelect/Background.gif'; }
if(theNum == "583"){ change_image_2.src='../Easters/LevelSelect/FG.png'; }
if(theNum == "584"){ change_image_2.src='../Easters/LevelSelect/LevelSelect.png'; }
if(theNum == "585"){ change_image_2.src='../Easters/LevelSelect/Levels/Asks.png'; }
if(theNum == "586"){ change_image_2.src='../Easters/LevelSelect/Levels/Author.png'; }
if(theNum == "587"){ change_image_2.src='../Easters/LevelSelect/Levels/Changes.png'; }
if(theNum == "588"){ change_image_2.src='../Easters/LevelSelect/Levels/Comics.png'; }
if(theNum == "589"){ change_image_2.src='../Easters/LevelSelect/Levels/Index.png'; }
if(theNum == "590"){ change_image_2.src='../Easters/LevelSelect/Levels/LevelSelect.png'; }
if(theNum == "591"){ change_image_2.src='../Easters/LevelSelect/Levels/MineCraft.png'; }
if(theNum == "592"){ change_image_2.src='../Easters/LevelSelect/Levels/Noise.gif'; }
if(theNum == "593"){ change_image_2.src='../Easters/LevelSelect/Levels/Password.png'; }
if(theNum == "594"){ change_image_2.src='../Easters/LevelSelect/Levels/Universes.png'; }
if(theNum == "595"){ change_image_2.src='../Easters/LevelSelect/Levels/WIP.png'; }
if(theNum == "596"){ change_image_2.src='../Easters/Minecraft/clouds.png'; }
if(theNum == "597"){ change_image_2.src='../Easters/Minecraft/clouds1.png'; }
if(theNum == "598"){ change_image_2.src='../Easters/Minecraft/clouds2.png'; }
if(theNum == "599"){ change_image_2.src='../Easters/Minecraft/clouds3.png'; }
if(theNum == "600"){ change_image_2.src='../Easters/Minecraft/clouds4.png'; }
if(theNum == "601"){ change_image_2.src='../Easters/Minecraft/clouds5.png'; }
if(theNum == "602"){ change_image_2.src='../Easters/Minecraft/grass_block_side.png'; }
if(theNum == "603"){ change_image_2.src='../Easters/Minecraft/nether_portal.gif'; }
if(theNum == "604"){ change_image_2.src='../Easters/Minecraft/Portal1.png'; }
if(theNum == "605"){ change_image_2.src='../Easters/Minecraft/Portal2.png'; }
if(theNum == "606"){ change_image_2.src='../Easters/Minecraft/BG/bg1.png'; }
if(theNum == "607"){ change_image_2.src='../Easters/Minecraft/BG/bg2.png'; }
if(theNum == "608"){ change_image_2.src='../Easters/Minecraft/BG/bg3.png'; }
if(theNum == "609"){ change_image_2.src='../Easters/Minecraft/BG/bg4.png'; }
if(theNum == "610"){ change_image_2.src='../Easters/Minecraft/BG/bg5.png'; }
if(theNum == "611"){ change_image_2.src='../Easters/Minecraft/BG/bg6.png'; }
if(theNum == "612"){ change_image_2.src='../Credits/St1.png'; }
if(theNum == "613"){ change_image_2.src='../Credits/St2.png'; }
if(theNum == "614"){ change_image_2.src='../Credits/St3.png'; }
if(theNum == "615"){ change_image_2.src='../Credits/St4.png'; }
}
