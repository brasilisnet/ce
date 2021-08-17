function random_imglink01(){
var myimages=new Array()
//specify random images below. You can have as many as you wish
myimages[1]="https://images2.imgbox.com/c1/01/5oRJdaF4_o.jpg"
myimages[2]="https://images2.imgbox.com/43/b6/BmDsUmwx_o.jpg"
myimages[3]="https://images2.imgbox.com/67/eb/KpEHLoGh_o.jpg"

var ry=Math.floor(Math.random()*myimages.length)
if (ry==0)
ry=1
document.write('<img src="'+myimages[ry]+'" border=0>')
}
random_imglink()