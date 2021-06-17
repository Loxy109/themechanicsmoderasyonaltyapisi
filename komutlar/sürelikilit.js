module.exports = {
  name:"kilitle",
  code:`
  Kanal Kilit Süresi Dolmuştur !
  $modifyChannelPerms[$mentionedChannels[1;yes];+sendmessages;$roleID[@everyone]]
  $wait[$noMentionMessage]
  $modifyChannelPerms[$mentionedChannels[1;yes];-sendmessages;$roleID[@everyone]]
  $channelSendMessage[$mentionedChannels[1;yes];
  {color:RED}
  {author:Bu Kanal $replaceText[$replaceText[$replaceText[$noMentionMessage;s; Saniye];m; Dakika];h; Saat] Boyunca Kilitlenmiştir:$authorAvatar}
  {footer:İşlemi Yapan Yetkili $userTag[$authorID]:$authorAvatar}]
  $addCmdReactions[✔️]
  $onlyIf[$checkContains[$noMentionMessage;s;m;h]!=false;{color:RED}{description:
  Kullanım Yanlış !
  1 Saniye = !kilitle <#kanal> 1s
  1 Dakika = !kilitle <#kanal> 1m
  1 Saat = !kilitle <#kanal> 1h}{thumbnail:$authorAvatar}]
  $onlyPerms[managechannels;{color:RED}{author:Sunucuda \`Kanalları Yönet\` Yetkiniz Bulunmamakta:$authorAvatar}]
  $onlyBotPerms[managechannels;{color:RED}{author:Sunucuda \`Kanalları Yönet\` Yetkim Olması Şart}] 
`
}