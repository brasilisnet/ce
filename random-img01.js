function random_imglink01(){
var myimages01=new Array()
//specify random images below. You can have as many as you wish
myimages01[1]="https://images2.imgbox.com/c1/01/5oRJdaF4_o.jpg"
myimages01[2]="https://images2.imgbox.com/43/b6/BmDsUmwx_o.jpg"
myimages01[3]="https://images2.imgbox.com/67/eb/KpEHLoGh_o.jpg"

var ry=Math.floor(Math.random()*myimages01.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages01[ry]+'" border=0 width="100%" height="auto">')
}
random_imglink01()
