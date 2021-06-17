module.exports = {
  name:"davetlog",
  code:`
  $if[$checkContains[$message[1];gkanal;çkanal;kapat]==false]
  !davetlog \`çkanal\` , \`gkanal\` \`kapat\` Olmalıdır
  $endif
  $if[$message[1]==gkanal]
  $setServerVar[gkanal;$mentionedChannels[1]]
  $color[GREEN]
  $author[Giriş Kanalı $channelName[$mentionedChannels[1]] Olarak Ayarlanmıştır !;$authorAvatar]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Giriş Kanalı Ayarlamam İçin Kanal Etiketlemelisin !:$authorAvatar}]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
  
  $if[$message[1]==çkanal]
  $setServerVar[çkanal;$mentionedChannels[1]]
  $color[GREEN]
  $author[Çıkış Kanalı $channelName[$mentionedChannels[1]] Olarak Ayarlanmıştır !;$authorAvatar]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Çıkış Kanalı Ayarlamam İçin Kanal Etiketlemelisin !:$authorAvatar}]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
  $if[$message[1]==kapat]
  $setServerVar[çkanal;yok]
  $setServerVar[gkanal;yok]
  $color[GREEN]
  $author[Davet Log Kanalları Sıfırlanmıştır;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
`
}