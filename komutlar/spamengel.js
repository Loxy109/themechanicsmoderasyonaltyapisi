module.exports = {
  name:"spamengel",
  code:`
  $if[$checkContains[$message[1];aç;kapat]==false]
  !spamengel \`aç\` yada \`kapat\` Olmalıdır
  $endif
  $if[$message[1]==aç]
  $setServerVar[spamengel;açık]
  $color[GREEN]
  $author[Spam Engel Sistemi Açılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
  $if[$message[1]==kapat]
  $setServerVar[spamengel;kapalı]
  $color[GREEN]
  $author[Spam Engel Sistemi Kapatılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
`
}