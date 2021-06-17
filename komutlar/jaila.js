module.exports = {
  name:"jailayarla",
  code:`
  $if[$message==]
  $endif
  $if[$message[1]==kapat]
  $setServerVar[jail;yok]
  $color[GREEN]
  $author[Jail Sistemi Kapatılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
  $if[$mentionedRoles[1]!=]
  $setServerVar[jail;$mentionedRoles[1]]
  $color[GREEN]
  $author[Jail Rol \`$roleName[$mentionedRoles[1]]\` Olarak Ayarlanmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $elseIf[$message!=kapat]
  Eğer Rol Etiketlerseniz Jail Atıldığında Verilecek Rol O Olur.
Kapatmak İçin !jailayarla kapat yazmanız yeterlidir
$endelseIf
  $endif
  
`
}