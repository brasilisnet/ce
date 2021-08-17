var randomImage01 = new Array();

randomImage[0] = "https://images2.imgbox.com/c1/01/5oRJdaF4_o.jpg";
randomImage[1] = "https://images2.imgbox.com/43/b6/BmDsUmwx_o.jpg";
randomImage[2] = "https://images2.imgbox.com/67/eb/KpEHLoGh_o.jpg";

function getRandomImage01() { 
var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
}
getRandomImage01()
