mybanners=
[
"<a href=\"https://www.erosmania.com.br/produtos.asp?cod=060102&parc=2044\" target=\"_blank\"><img src=\"https://thumbs2.imgbox.com/60/3d/urkitpvv_t.jpg\" width=\"500\" height=\"200\" alt=\"Erosmania\" title=\"Erosmania\" border=\"0\"></a>",
"<a href=\"https://www.erosmania.com.br/produtos.asp?cod=060126&parc=2044\" target=\"_blank\"><img src=\"https://thumbs2.imgbox.com/95/a8/Y53X7H0K_t.jpg\" width=\"500\" height=\"200\" alt=\"Erosmania\" title=\"Erosmania\" border=\"0\"></a>",
"<a href=\"https://www.erosmania.com.br/produtos.asp?cod=060123&parc=2044\" target=\"_blank\"><img src=\"https://thumbs2.imgbox.com/ff/84/xTbFRoyd_t.jpg\" width=\"500\" height=\"200\" alt=\"Erosmania\" title=\"Erosmania\" border=\"0\"></a>"
]
randomNumber = Math.random()
var show_mybanners = mybanners[Math.floor(randomNumber * mybanners.length)]
document.write(show_mybanners);