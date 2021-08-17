function random_imglink(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="https://images2.imgbox.com/50/50/lbXhEOQW_o.jpg"
myimages[2]="https://images2.imgbox.com/96/e3/ZmH49MTG_o.jpg"
myimages[3]="https://images2.imgbox.com/7c/a0/bLjISjIg_o.jpg"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages[ry]+'" border=0>')
}
random_imglink()