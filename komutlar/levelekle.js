module.exports = {
  name:"ekle",
  code:`
  $channelSendMessage[$channelID;{author:İŞLEM BAŞARILI:https://cdn.discordapp.com/attachments/788432743537180683/790281325630193704/onay-removebg-preview.png}{color:RANDOM}{description:
  Yapılan İşlem : $message[2]
  
  Yapılan Kişi : <@$mentioned[1]>
  
  Verilen Miktar : $message[3]}]
  
  $useChannel[$getServerVar[levellog]]
  $author[İşlem Yapıldı]
  $color[RANDOM]
  $description[$thumbnail[$userAvatar[$mentioned[1]]]
  Yapılan İşlem : $message[2]
  Yapılan Kişi : <@$mentioned[1]>
  Miktar : $message[3]]
  $footer[Yapan Kişi $username#$discriminator;$authorAvatar]
  $addTimestamp
  
  $setUserVar[$message[2];$message[3];$mentioned[1]]
  
  
  $onlyIf[$hasPerms[$authorID;admin]!=false;Üzgünüm Ekleme İşlemlerini Sadece \`\`YÖNETİCİ\`\` Birisi Yapabilir.]
  $onlyIf[$checkContains[$message[2];level;xp;xpdeğer;sonrakixp]!=false;Üzgünüm Değişken level/xp/xpdeğer/sonrakixp Olmalıdır.Tekrar Dene !]
  $onlyIf[$message[3]!=;Kullanım !ekle @kişi level/xp/xpdeğer/sonrakixp <miktar>]
  `
}