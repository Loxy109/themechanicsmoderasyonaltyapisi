module.exports = {
  name:"logayarla",
  code:`
  $if[$checkContains[$message[1];ayarla;sil]==false]
  !logayarla \`ayarla\` yada \`sil\` seçiniz.
  (Eğer bütün log kanallarını silmek istiyorsanız !logayarla \`sıfırla\` yazınız)
  $endif
  $if[$message[1] $message[2]==ayarla jail]
  $author[Ayarlanan Jail Log Kanalı $channelName[$mentionedChannels[1]] Olarak Ayarlandı.;$authorAvatar]
  $color[GREEN]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Kanal Etiketlemelisin !:$authorAvatar}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[jaillog;$mentionedChannels[1]]
  $endif
  
  $if[$message[1] $message[2]==ayarla mesaj]
  $channelSendMessage[$channelID;{author:Ayarlanan Mesaj Log Kanalı $channelName[$mentionedChannels[1]] Olarak Ayarlandı.:$authorAvatar}
  {color:GREEN}]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Kanal Etiketlemelisin !:$authorAvatar}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[mesajlog;$mentionedChannels[1]]
  $endif
  
  $if[$message[1] $message[2]==ayarla mute]
  $channelSendMessage[$channelID;{author:Ayarlanan Mute Log Kanalı $channelName[$mentionedChannels[1]] Olarak Ayarlandı.:$authorAvatar}
  {color:GREEN}]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Kanal Etiketlemelisin !:$authorAvatar}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[mutelog;$mentionedChannels[1]]
  $endif
  
  $if[$message[1] $message[2]==ayarla ban]
  $channelSendMessage[$channelID;{author:Ayarlanan Ban Log Kanalı $channelName[$mentionedChannels[1]] Olarak Ayarlandı.:$authorAvatar}
  {color:GREEN}]
  $onlyIf[$mentionedChannels[1]!=;{color:RED}{author:Kanal Etiketlemelisin !:$authorAvatar}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[banlog;$mentionedChannels[1]]
  $endif
  
  $if[$message[1] $message[2]==sil jail]
  $channelSendMessage[$channelID;{author:Jail Log Sıfırlanmıştır.:$authorAvatar}
  {color:GREEN}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[jaillog:]
  $endif
  
   $if[$message[1] $message[2]==sil mute]
  $channelSendMessage[$channelID;{author:Mute Log Sıfırlanmıştır.:$authorAvatar}
  {color:GREEN}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[mutelog:]
  $endif
  
   $if[$message[1] $message[2]==sil mesaj]
  $channelSendMessage[$channelID;{author:Mesaj Log Sıfırlanmıştır.:$authorAvatar}
  {color:GREEN}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[mesajlog:]
  $endif
  
   $if[$message[1] $message[2]==sil ban]
  $channelSendMessage[$channelID;{author:Ban Log Sıfırlanmıştır.:$authorAvatar}
  {color:GREEN}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[banlog:]
  $endif
  
   $if[$message[1]==sıfırla]
  $channelSendMessage[$channelID;{author:Bütün Log Kanalları Sıfırlanmıştır.:$authorAvatar}
  {color:GREEN}]
  $onlyPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkin Olmalıdır:$authorAvatar}]
   $onlyBotPerms[admin:{color:RED}{author:Bunun İçin Yönetici Yetkim Olmalıdır:$authorAvatar}]
  $setServerVar[jaillog:]
  $setServerVar[mutelog:]
  $setServerVar[banlog:]
  $setServerVar[mesajlog:]
  $endif
  
  `
}