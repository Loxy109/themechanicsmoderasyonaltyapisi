module.exports = {
  name:"capsengel",
  code:`
  $if[$checkContains[$message[1];aç;kapat]==false]
  !capsengel \`aç\` yada \`kapat\` Olmalıdır
  $endif
  $if[$message[1]==aç]
  $setServerVar[capsengel;açık]
  $color[GREEN]
  $author[Caps Engel Sistemi Açılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
  $if[$message[1]==kapat]
  $setServerVar[capsengel;kapalı]
  $color[GREEN]
  $author[Caps Engel Sistemi Kapatılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
`
}