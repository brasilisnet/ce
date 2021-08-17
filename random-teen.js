var randomImage = new Array();

randomImage[0] = "https://images2.imgbox.com/50/50/lbXhEOQW_o.jpg";
randomImage[1] = "https://images2.imgbox.com/96/e3/ZmH49MTG_o.jpg";
randomImage[2] = "https://images2.imgbox.com/7c/a0/bLjISjIg_o.jpg";

function getRandomImage() { 
var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
}
getRandomImage()