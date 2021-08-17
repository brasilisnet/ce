var randomImage01 = new Array();

randomImage01[0] = "https://images2.imgbox.com/c1/01/5oRJdaF4_o.jpg";
randomImage01[1] = "https://images2.imgbox.com/43/b6/BmDsUmwx_o.jpg";
randomImage01[2] = "https://images2.imgbox.com/67/eb/KpEHLoGh_o.jpg";

function getRandomImage01() { 
var number = Math.floor(Math.random()*randomImage01.length);
document.write('<img src="'+randomImage01[number]+'" />');
}
getRandomImage01()