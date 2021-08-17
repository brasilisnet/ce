function random_imglink(){
var myimages02=new Array()
//specify random images below. You can have as many as you wish
myimages02[1]="https://images2.imgbox.com/92/17/pJAc2FYI_o.jpg"
myimages02[2]="https://images2.imgbox.com/e2/f2/FCAqFcK8_o.jpg"
myimages03[3]="https://images2.imgbox.com/be/10/WRKXuKjh_o.jpg"

var ry=Math.floor(Math.random()*myimages02.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages02[ry]+'" border=0 width=100% height=auto>')
}
random_imglink()