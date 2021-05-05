mybanners=
[
"<a href=\"https://www.erosmania.com.br/produtos.asp?cod=070726&parc=2044\" target=\"_blank\"><img src=\"https://images2.imgbox.com/fc/e4/JetTlrfx_o.jpg\" width=\"500\" height=\"200\" alt=\"Erosmania\" title=\"Erosmania\" border=\"0\"></a>",
"<a href=\"https://www.erosmania.com.br/produtos.asp?cod=070730&parc=2044\" target=\"_blank\"><img src=\"https://images2.imgbox.com/6e/3f/pmBWzRzb_o.jpg\" width=\"500\" height=\"200\" alt=\"Erosmania\" title=\"Erosmania\" border=\"0\"></a>",
"<a href=\"https://www.erosmania.com.br/produtos.asp?cod=073231&parc=2044\" target=\"_blank\"><img src=\"https://images2.imgbox.com/07/09/efewqJjK_o.jpg\" width=\"500\" height=\"200\" alt=\"Erosmania\" title=\"Erosmania\" border=\"0\"></a>"
]
randomNumber = Math.random()
var show_mybanners = mybanners[Math.floor(randomNumber * mybanners.length)]
document.write(show_mybanners);