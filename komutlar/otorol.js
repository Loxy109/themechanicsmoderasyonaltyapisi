module.exports = {
  name:"otorol",
  code:`
  $if[$message==]
  $endif
  $if[$message[1]==kapat]
  $setServerVar[otorol;yok]
  $setServerVar[otorollog;yok]
  $color[GREEN]
  $author[Otorol Sistemi Kapatılmıştır !;$authorAvatar]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}]
  $endif
   $if[$message[1]!=kapat]
   $setServerVar[otorol;$mentionedRoles[1]]
  $setServerVar[otorollog;$mentionedChannels[1]]
   
 $channelSendMessage[$channelID;{color:GREEN}{thumbnail:$authorAvatar}{description:
 Otorol Sistemi Güncellendi :ok_hand: 
 
 Yeni Otorol Kanalı = <#$mentionedChannels[1]>
 Yeni Otorol Rolü = <@&$mentionedRoles[1]>}]
 $onlyIf[$mentionedrOLES[1]!=;{color:RED}{author:Otorol İçin Rol Etiketlemelisin !:$authorAvatar}{footer:Otorolü Kapatmak için !otorol kapat Yazman Yeterli}]
 
 $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Otorol İçin KANAL Etiketlemelisin !:$authorAvatar}{footer:Otorolü Kapatmak için !otorol kapat Yazman Yeterli}]
  $onlyPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[admin;{color:RED}{author:Sunucuda \`Yönetici\` Yetkim Olması Şart}] 
  $endif
`
}