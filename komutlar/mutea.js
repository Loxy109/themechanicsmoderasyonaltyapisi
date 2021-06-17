module.exports = {
  name:"muteayarla",
  code:`
  $if[$message==]
  $endif
  $if[$message[1]==kapat]
  $setServerVar[mute;yok]
  $color[GREEN]
  $author[Mute Sistemi Kapatılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
  $if[$mentionedRoles[1]!=]
  $setServerVar[mute;$mentionedRoles[1]]
  $color[GREEN]
  $author[Mute Rol \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $elseIf[$message!=kapat]
  Eğer Rol Etiketlerseniz Mute Atıldığında Verilecek Rol O Olur.
Kapatmak İçin !muteayarla kapat yazmanız yeterlidir
$endelseIf
  $endif
  
`
}